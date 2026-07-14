import * as THREE from 'three';
import type { World } from './types';
import { buildArea, ancestorLevels, type BuiltArea, type Interactable, type PeopleTier } from './world/corridor';
import { Walker, personRng } from './world/people';
import { buildAtrium, ATRIUM_ID } from './world/atrium';
import { buildStreet, STREET_ID } from './world/street';
import { SignManager, type ArtEntry } from './world/signage';
import { wingColor } from './world/colors';
import { Player } from './engine/player';
import { showMenu, isMenuOpen, type MenuItem } from './ui/menu';
import { computeLayout } from '../tools/lib/layout.mjs';

const PORTAL_COOLDOWN_MS = 700;

const appEl = document.getElementById('app')!;
const startEl = document.getElementById('start')!;
const fadeEl = document.getElementById('fade')!;
const toastEl = document.getElementById('toast')!;
const promptEl = document.getElementById('prompt')!;
const signEl = document.getElementById('area-sign')!;
const signLabelEl = document.querySelector<HTMLElement>('#area-sign .label')!;
const signRoomEl = document.querySelector<HTMLElement>('#area-sign .room')!;

let toastTimer = 0;
function toast(msg: string) {
  toastEl.textContent = msg;
  toastEl.style.opacity = '1';
  clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => (toastEl.style.opacity = '0'), 2200);
}

function flashFade() {
  fadeEl.style.opacity = '1';
  setTimeout(() => (fadeEl.style.opacity = '0'), 160);
}

async function boot() {
  const world: World = await fetch('world.json').then((r) => {
    if (!r.ok) throw new Error(`world.json ${r.status} — run \`npm run world\` first`);
    return r.json();
  });

  const byId = new Map(world.classes.map((c) => [c.id, c]));
  const byLabel = new Map(world.classes.map((c) => [c.label, c]));
  const wingLabel = new Map(world.wings.map((w) => [w.key, w.annex ? w.label : `${w.label} wing`]));
  const layout = computeLayout(world);

  // curated Wikimedia artwork + optional poster illustrations (both optional)
  const art: ArtEntry[] = await fetch('art/manifest.json')
    .then((r) => (r.ok ? r.json() : []))
    .catch(() => []);
  const illustrations = await fetch('art/illustrations/manifest.json')
    .then((r) => (r.ok ? r.json() : null))
    .then((list) => (list ? new Set<string>(list.map((e: { slug: string }) => e.slug)) : null))
    .catch(() => null);

  // phone-tier devices get reduced GPU load: WebKit kills pages that stall
  // or overrun memory ("A problem repeatedly occurred" on iPhone)
  const phone = navigator.maxTouchPoints > 0 && Math.min(screen.width, screen.height) <= 500;

  // activity tier: how many people about — auto by platform, ?people= overrides,
  // and prefers-reduced-motion keeps everyone seated
  const peopleParam = new URLSearchParams(location.search).get('people');
  const people: PeopleTier =
    peopleParam === 'off' || peopleParam === 'low' || peopleParam === 'full' ? peopleParam : phone ? 'low' : 'full';
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // --- scene ---------------------------------------------------------------
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x22262b);
  // depth haze: long views fade out, and the far plane culls most of the
  // street (the difference between 7 fps and 60 on the spine vista)
  scene.fog = phone ? new THREE.Fog(0x22262b, 42, 120) : new THREE.Fog(0x22262b, 55, 150);
  scene.add(new THREE.HemisphereLight(0xffffff, 0xb9bec2, 1.0));
  scene.add(new THREE.AmbientLight(0xffffff, 0.38));
  const sun = new THREE.DirectionalLight(0xffffff, 0.4);
  sun.position.set(3, 8, 2);
  scene.add(sun);

  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: !phone });
  } catch {
    throw new Error(
      '3D graphics (WebGL) could not start in this browser. On iPhone/iPad, ' +
        'Lockdown Mode blocks WebGL — allow this site under Settings → Privacy ' +
        '& Security → Lockdown Mode → Configure Web Browsing, or try another device.'
    );
  }
  renderer.setSize(innerWidth, innerHeight);
  renderer.setPixelRatio(Math.min(devicePixelRatio, phone ? 1.5 : 2));
  // without touch-action:none the browser claims touch drags for scrolling
  // and cancels our pointer events — drag-to-look would never fire
  renderer.domElement.style.touchAction = 'none';
  renderer.domElement.style.userSelect = 'none';
  appEl.appendChild(renderer.domElement);

  // --- build the whole hospital --------------------------------------------
  const signs = new SignManager();
  const areas = new Map<string, BuiltArea>();
  const ctx = { world, byId, signs, layout, art, illustrations, people };

  const atrium = buildAtrium(world, signs, art, people);
  areas.set(atrium.id, atrium);
  const street = buildStreet(world, layout, signs, art, people);
  areas.set(street.id, street);
  for (const wc of world.classes) {
    const p = layout.areas[wc.id];
    // north-row areas are rotated 180°; their origin sits at z=17 so the
    // lobby opening lands on the landing's north edge (z=10)
    const area = buildArea(wc, ctx, new THREE.Vector3(p.x, p.y, p.flip ? 17 : 0));
    areas.set(area.id, area);
  }
  for (const a of areas.values()) scene.add(a.group);

  const allColliders = [...areas.values()].flatMap((a) => a.colliders);
  const allWalkables = [...areas.values()].flatMap((a) => a.walkables);
  const allInteractables = [...areas.values()].flatMap((a) => a.interactables);

  // door pairing: the out door and in door of one association share elementId
  const doorPairs = new Map<string, Interactable[]>();
  for (const it of allInteractables) {
    if (it.elementId) {
      const list = doorPairs.get(it.elementId) ?? [];
      list.push(it);
      doorPairs.set(it.elementId, list);
    }
  }
  function doorCounterpart(it: Interactable): Interactable | undefined {
    if (it.kind === 'door-self') return undefined;
    return doorPairs.get(it.elementId!)?.find((q) => q !== it);
  }

  // --- player ----------------------------------------------------------------
  const player = new Player(renderer.domElement);
  player.setColliders(allColliders);
  player.setWalkables(allWalkables);
  player.teleport(atrium.spawnPos, atrium.spawnYaw);
  scene.add(player.camera);
  if (phone) {
    player.camera.far = 130;
    player.camera.updateProjectionMatrix();
  }

  // Only areas near the player render (fog hides the cutoff). This also
  // spreads GPU uploads across the walk instead of one giant first frame —
  // a single multi-second stall is what gets a page killed on iPhone.
  // --- walking staff and visitors --------------------------------------------
  const walkers: { w: Walker; owner: BuiltArea }[] = [];
  if (people !== 'off' && !reducedMotion) {
    const wRnd = personRng(20260703);
    const addWalker = (owner: BuiltArea, a: THREE.Vector3, b: THREE.Vector3) => {
      const w = new Walker(a, b, 1 + Math.floor(wRnd() * 99991));
      scene.add(w.group);
      walkers.push({ w, owner });
    };
    // porters and visitors pacing beats of the street
    const nStreet = people === 'full' ? 7 : 3;
    for (let i = 0; i < nStreet; i++) {
      const x0 = 4 + ((layout.street.x1 - 70) * i) / Math.max(1, nStreet - 1);
      addWalker(street, new THREE.Vector3(x0, 0, 9), new THREE.Vector3(Math.min(x0 + 55, layout.street.x1 - 4), 0, 9));
    }
    if (people === 'full') {
      // a nurse on each sizeable landing
      let n = 0;
      for (const [pid, l] of Object.entries(layout.landings)) {
        if (l.x1 - l.x0 < 18 || n >= 12) continue;
        const owner = areas.get(pid);
        if (!owner) continue;
        addWalker(owner, new THREE.Vector3(l.x0 + 1.2, l.y, 8.5), new THREE.Vector3(l.x1 - 1.2, l.y, 8.5));
        n++;
      }
      // the odd wanderer in the longer corridors
      let c = 0;
      for (const wc of world.classes) {
        const p = layout.areas[wc.id];
        if (p.corridorLen < 24 || c >= 8) continue;
        const owner = areas.get(wc.id);
        if (!owner) continue;
        const z0 = p.flip ? 17.8 : -0.8;
        const z1 = p.flip ? 17 + p.corridorLen - 2 : -(p.corridorLen - 2);
        addWalker(owner, new THREE.Vector3(p.x, p.y, z0), new THREE.Vector3(p.x, p.y, z1));
        c++;
      }
    }
  }

  const VIS_RANGE = phone ? 140 : 175;
  function updateVisibility() {
    const p = player.position;
    for (const a of areas.values()) {
      let d = Infinity;
      for (const b of a.boxes) d = Math.min(d, b.distanceToPoint(p));
      a.group.visible = d < VIS_RANGE;
    }
  }
  updateVisibility();

  let currentArea: BuiltArea = atrium;
  function setArea(area: BuiltArea) {
    currentArea = area;
    const wc = area.wc;
    signLabelEl.textContent = area.label;
    signRoomEl.textContent = wc
      ? [wc.roomNumber ? `Room ${wc.roomNumber}` : null, `${wingLabel.get(wc.wing) ?? wc.wing} · ${wc.floor ? `level −${wc.floor}` : 'ground'}`]
          .filter(Boolean)
          .join(' · ')
      : world.meta.label;
    signEl.style.borderLeft = `8px solid ${wc ? wingColor(wc.wing) : '#ffffff'}`;
  }
  setArea(atrium);

  const volume = (b: THREE.Box3) =>
    (b.max.x - b.min.x) * (b.max.y - b.min.y) * (b.max.z - b.min.z);
  function areaAt(pos: THREE.Vector3): BuiltArea | undefined {
    let best: BuiltArea | undefined;
    let bestVol = Infinity;
    for (const a of areas.values()) {
      for (const b of a.boxes) {
        if (b.containsPoint(pos) && volume(b) < bestVol) {
          best = a;
          bestVol = volume(b);
        }
      }
    }
    return best;
  }

  // any touch capability (phone, tablet, touch-screen PC) gets the touch UI;
  // keyboard + mouse keep working alongside it
  const hasTouch = navigator.maxTouchPoints > 0 || 'ontouchstart' in window || matchMedia('(pointer: coarse)').matches;
  const coarseOnly = matchMedia('(pointer: coarse)').matches; // true mobile/tablet
  if (hasTouch) {
    document.body.classList.add('touch');
    const badge = startEl.querySelector<HTMLElement>('.badge');
    const blurb = startEl.querySelector<HTMLElement>('p');
    if (badge) badge.textContent = coarseOnly ? 'Tap to enter' : 'Click or tap to enter';
    if (blurb) blurb.textContent = 'Left pad or WASD to walk · drag to look · ⏩ jumps ahead · ℹ reads · ⌖ porter · double-click captures the mouse';
  }
  startEl.addEventListener('pointerup', (e) => {
    // Touch-capable setups NEVER auto-lock: taps often report as "mouse" on
    // touch-screen PCs and embedded views, and an accidental pointer lock
    // freezes clientX/Y — which pins the joystick and kills drag-look.
    // Drag-look covers mouse users too; double-click opts into pointer lock.
    if (hasTouch || e.pointerType === 'touch') startEl.style.display = 'none';
    else player.controls.lock();
  });
  renderer.domElement.addEventListener('dblclick', () => player.controls.lock());
  player.controls.addEventListener('lock', () => (startEl.style.display = 'none'));
  player.controls.addEventListener('unlock', () => {
    if (!isMenuOpen() && !readerOpen) startEl.style.display = 'flex';
  });

  // --- travel ------------------------------------------------------------------
  let lastTravelAt = 0;
  function travelToArea(id: string, note?: string) {
    const dest = areas.get(id);
    if (!dest) return;
    player.teleport(dest.spawnPos, dest.spawnYaw);
    setArea(dest);
    insideTriggers = triggersAt(player.floorPosition); // arrive disarmed
    flashFade();
    if (note) toast(note);
    lastTravelAt = performance.now();
  }

  function passDoor(it: Interactable) {
    const destId = it.targetIds[0];
    const dest = areas.get(destId);
    if (!dest) return;
    if (it.kind === 'door-self') {
      player.teleport(dest.spawnPos, dest.spawnYaw);
      toast(`${it.label} — back where you started (a pig's ear)`);
    } else {
      const other = doorCounterpart(it);
      if (other?.exitPos) {
        player.teleport(other.exitPos, other.exitYaw ?? 0);
      } else {
        player.teleport(dest.spawnPos, dest.spawnYaw);
      }
      toast(`${it.label} → ${dest.label}`);
    }
    setArea(dest);
    insideTriggers = triggersAt(player.floorPosition); // arrive disarmed
    flashFade();
    lastTravelAt = performance.now();
  }

  const itemFor = (id: string, prefix = ''): MenuItem => {
    const c = byId.get(id);
    return {
      label: `${prefix}${c?.label ?? id}`,
      sub: c ? [c.roomNumber, `${wingLabel.get(c.wing) ?? c.wing} · ${c.floor ? `level −${c.floor}` : 'ground'}`].filter(Boolean).join(' · ') : undefined,
      chip: c ? wingColor(c.wing) : undefined,
      value: id,
    };
  };

  function openLiftMenu(it: Interactable) {
    const wc = byId.get(it.areaId);
    const wasLocked = player.controls.isLocked;
    if (wasLocked) player.controls.unlock();
    const done = (pick?: () => void) => {
      if (wasLocked) player.controls.lock();
      pick?.();
    };
    const items: MenuItem[] = [];
    if (wc) {
      const anc = ancestorLevels(wc, byId).sort((a, b) => b.level - a.level);
      items.push(...anc.map((a) => itemFor(a.id, `▲${a.level}  `)));
      items.push({ label: `●  ${wc.label}`, sub: 'you are here', strong: true, value: null });
      items.push(...wc.subs.map((id) => itemFor(id, '▼1  ')));
    }
    items.push({ label: '⌂  Reception', sub: 'ground floor', value: ATRIUM_ID });
    showMenu('Lift', wc?.label ?? '', items, {
      onPick: (id) =>
        done(() => {
          const dest = areas.get(id);
          if (dest?.liftPos) {
            // ride the lift: arrive inside the destination cab
            player.teleport(dest.liftPos, dest.liftYaw ?? 0);
            setArea(dest);
            flashFade();
            toast(`Lift → ${dest.label}`);
            lastTravelAt = performance.now();
          } else {
            travelToArea(id, `Lift → ${dest?.label}`);
          }
        }),
      onClose: () => done(),
    });
  }

  function openSearch() {
    const wasLocked = player.controls.isLocked;
    if (wasLocked) player.controls.unlock();
    const items = [...world.classes]
      .sort((a, b) => a.label.localeCompare(b.label))
      .map((c) => itemFor(c.id));
    items.unshift({ label: '⌂  Reception', sub: 'the atrium', value: ATRIUM_ID });
    showMenu('Porter service', 'where would you like to go?', items, {
      searchable: true,
      onPick: (id) => {
        if (wasLocked) player.controls.lock();
        travelToArea(id, `Porter → ${areas.get(id)?.label}`);
      },
      onClose: () => {
        if (wasLocked) player.controls.lock();
      },
    });
  }

  // --- reader overlay: the HTML twin of the current area ---------------------
  const readerEl = document.getElementById('reader')!;
  const readerTitle = readerEl.querySelector('h2')!;
  const readerMeta = readerEl.querySelector<HTMLElement>('header .meta')!;
  const readerBody = readerEl.querySelector<HTMLElement>('.reader-body')!;
  let readerOpen = false;
  let readerWasLocked = false;

  const esc = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  function closeReader() {
    readerOpen = false;
    readerEl.style.display = 'none';
    if (readerWasLocked) player.controls.lock();
  }

  function openReader() {
    const wc = currentArea.wc;
    readerTitle.textContent = currentArea.label;
    readerMeta.textContent = wc
      ? [wc.roomNumber ? `Room ${wc.roomNumber}` : null, `${wingLabel.get(wc.wing) ?? wc.wing}`, wc.floor ? `level −${wc.floor}` : 'ground']
          .filter(Boolean)
          .join(' · ')
      : world.meta.label;
    let html = '';
    if (!wc) {
      html =
        currentArea.id === ATRIUM_ID
          ? `<p>Reception for the ContSys Hospital — a walkable model of ${esc(world.meta.label)}. The hospital street runs east; every wing's entrance opens off it. Press M (or ⌖) for the porter.</p>`
          : `<p>The hospital street: the ground-level spine connecting all wings. Root concepts open off the south side; courtyard windows line the north.</p>`;
    } else {
      html += `<p>${esc(wc.description ?? 'Definition pending.')}</p>`;
      const facts: string[] = [];
      if (wc.plural) facts.push(`<strong>Plural:</strong> ${esc(wc.plural)}`);
      if (wc.alsoKnownAs.length) facts.push(`<strong>Also known as:</strong> ${esc(wc.alsoKnownAs.join('; '))}`);
      if (wc.deprecated.length) facts.push(`<strong>Deprecated terms:</strong> ${esc(wc.deprecated.join('; '))}`);
      if (wc.termClause) facts.push(`<strong>Clause:</strong> ${esc(wc.termClause)}`);
      if (wc.source) facts.push(`<span class="small"><strong>Source:</strong> ${esc(wc.source)}</span>`);
      if (facts.length) html += `<p>${facts.join('<br>')}</p>`;
      if (wc.notes.length) {
        html += `<h3>Notes</h3><ol>${wc.notes.map((n) => `<li>${esc(n.text)}</li>`).join('')}</ol>`;
      }
      if (wc.examples.length) {
        html += `<h3>Examples</h3><ol>${wc.examples.map((e) => `<li>${esc(e.text)}</li>`).join('')}</ol>`;
      }
      const name = (id: string) => esc(byId.get(id)?.label ?? '?');
      if (wc.out.length || wc.self.length) {
        html += `<h3>Doors out (right wall)</h3><ul>${[
          ...wc.out.map((d) => `<li>${esc(d.label)} → ${name(d.targetId)}</li>`),
          ...wc.self.map((d) => `<li>${esc(d.label)} → ${esc(wc.label)} (end wall)</li>`),
        ].join('')}</ul>`;
      }
      if (wc.in.length) {
        html += `<h3>Doors in (left wall)</h3><ul>${wc.in
          .map((d) => `<li>${name(d.sourceId)} — ${esc(d.label)}</li>`)
          .join('')}</ul>`;
      }
      if (wc.supers.length) html += `<h3>Stairs up</h3><ul>${wc.supers.map((id) => `<li>${name(id)}</li>`).join('')}</ul>`;
      if (wc.subs.length) html += `<h3>Stairs down</h3><ul>${wc.subs.map((id) => `<li>${name(id)}</li>`).join('')}</ul>`;
    }
    readerBody.innerHTML = html;
    readerWasLocked = player.controls.isLocked;
    if (readerWasLocked) player.controls.unlock();
    readerEl.style.display = 'flex';
    readerOpen = true;
  }

  readerEl.addEventListener('click', (e) => {
    if (e.target === readerEl) closeReader();
  });

  // --- per-frame interaction ------------------------------------------------
  let activePrompt: Interactable | null = null;
  function interact() {
    if (isMenuOpen() || readerOpen) return;
    if (activePrompt?.kind === 'lift') openLiftMenu(activePrompt);
  }

  /** Triggers currently containing the player (same storey, within zone). */
  function triggersAt(pos: THREE.Vector3): Set<Interactable> {
    const s = new Set<Interactable>();
    for (const it of currentArea.interactables) {
      if (Math.abs(it.triggerPos.y - pos.y) > 2) continue;
      const dx = Math.abs(pos.x - it.triggerPos.x);
      const dz = Math.abs(pos.z - it.triggerPos.z);
      if (it.halfX !== undefined) {
        if (dx <= it.halfX && dz <= (it.halfZ ?? it.halfX)) s.add(it);
      } else if (dx * dx + dz * dz <= it.radius * it.radius) {
        s.add(it);
      }
    }
    return s;
  }
  // Edge-fired triggers: anything you ARRIVE inside stays disarmed until you
  // step out and back in — walking through a door can't ping-pong you back.
  let insideTriggers = new Set<Interactable>();
  function checkInteractions() {
    const now = performance.now();
    const nowInside = triggersAt(player.floorPosition);
    let nearestPrompt: Interactable | null = null;
    for (const it of nowInside) {
      if (!it.auto) {
        nearestPrompt = it;
        continue;
      }
      if (insideTriggers.has(it)) continue; // re-arms only after stepping out
      if (now - lastTravelAt < PORTAL_COOLDOWN_MS) continue;
      if (it.kind === 'stair-up' || it.kind === 'stair-down') {
        travelToArea(it.targetIds[0], `${it.label} (portal)`);
      } else {
        passDoor(it);
      }
      return; // travel reseeded insideTriggers for the arrival position
    }
    insideTriggers = nowInside;
    activePrompt = nearestPrompt;
    promptEl.textContent = nearestPrompt ? (nearestPrompt.prompt ?? `E — ${nearestPrompt.label}`) : '';
    promptEl.style.opacity = nearestPrompt ? '1' : '0';
  }

  addEventListener('keydown', (e) => {
    if (readerOpen) {
      if (e.code === 'Escape' || e.code === 'KeyR') closeReader();
      return;
    }
    if (isMenuOpen()) return;
    if (e.code === 'KeyE') interact();
    if (e.code === 'KeyR') openReader();
    if (e.code === 'KeyM') openSearch();
    if (e.code === 'KeyF') {
      if (player.dash(12) > 0.3) flashFade();
    }
  });
  promptEl.addEventListener('click', interact);

  // --- touch + drag look ------------------------------------------------------
  // always on: it only acts while the pointer is NOT locked, so mouse users
  // can drag-look too and touch works on any device
  player.enableDragLook(renderer.domElement);
  if (hasTouch) {
    const joy = document.getElementById('joy')!;
    const knob = document.getElementById('joy-knob')!;
    let joyId: number | null = null;
    const reset = () => {
      joyId = null;
      knob.style.transform = '';
      player.setTouchMove(0, 0);
    };
    const updateKnob = (e: PointerEvent) => {
      const r = joy.getBoundingClientRect();
      let dx = e.clientX - (r.left + r.width / 2);
      let dy = e.clientY - (r.top + r.height / 2);
      if (!Number.isFinite(dx) || !Number.isFinite(dy)) return;
      const m = Math.hypot(dx, dy);
      const max = 44;
      if (m > max) {
        dx *= max / m;
        dy *= max / m;
      }
      knob.style.transform = `translate(${dx}px, ${dy}px)`;
      player.setTouchMove(-dy / max, dx / max);
    };
    joy.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      joyId = e.pointerId;
      updateKnob(e);
      try {
        joy.setPointerCapture(e.pointerId);
      } catch {
        /* synthetic or already-captured pointers — tracking still works */
      }
    });
    joy.addEventListener('pointermove', (e) => {
      if (e.pointerId !== joyId) return;
      e.preventDefault();
      updateKnob(e);
    });
    joy.addEventListener('pointerup', reset);
    joy.addEventListener('pointercancel', reset);
    document.getElementById('btn-read')!.addEventListener('click', () => (readerOpen ? closeReader() : openReader()));
    document.getElementById('btn-porter')!.addEventListener('click', () => {
      if (!isMenuOpen() && !readerOpen) openSearch();
    });
    document.getElementById('btn-dash')!.addEventListener('click', () => {
      if (!isMenuOpen() && !readerOpen && player.dash(12) > 0.3) flashFade();
    });
  }

  // --- loop -------------------------------------------------------------------
  const clock = new THREE.Clock();
  let signTimer = 0;
  const frameMs = { logic: 0, render: 0 };
  const bootAt = performance.now();
  let frameAvg = 12;
  let demoteStage = 0;
  renderer.setAnimationLoop(() => {
    const t0 = performance.now();
    const dt = Math.min(clock.getDelta(), 0.05);
    if (!isMenuOpen()) player.update(dt);
    for (const entry of walkers) {
      const vis = entry.owner.group.visible;
      entry.w.group.visible = vis;
      if (vis) entry.w.update(dt);
    }
    const here = areaAt(player.floorPosition);
    if (here && here !== currentArea) setArea(here);
    checkInteractions();
    signTimer += dt;
    if (signTimer > 0.4) {
      signTimer = 0;
      signs.update(player.position, phone ? 40 : 55, phone ? 100 : 120, phone ? 5 : 8);
      updateVisibility();
      // adaptive activity: if real frame work drags, thin the walkers out
      // (uses measured work time, so a throttled background tab never demotes)
      if (performance.now() - bootAt > 12000 && walkers.length) {
        if (demoteStage === 0 && frameAvg > 26) {
          demoteStage = 1;
          for (let i = walkers.length - 1; i >= 0; i -= 2) {
            scene.remove(walkers[i].w.group);
            walkers.splice(i, 1);
          }
          toast('Trimmed ward activity to keep things smooth');
        } else if (demoteStage === 1 && frameAvg > 30) {
          demoteStage = 2;
          for (const entry of walkers) scene.remove(entry.w.group);
          walkers.length = 0;
          toast('Paused ward activity for performance');
        }
      }
    }
    const t1 = performance.now();
    renderer.render(scene, player.camera);
    frameMs.logic = t1 - t0;
    frameMs.render = performance.now() - t1;
    frameAvg = frameAvg * 0.96 + (frameMs.logic + frameMs.render) * 0.04;
  });

  addEventListener('resize', () => {
    player.camera.aspect = innerWidth / innerHeight;
    player.camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
  });

  // --- audit + debug API -----------------------------------------------------
  function audit() {
    const expect = {
      areas: world.classes.length + 2, // + atrium + street
      doorOut: world.classes.reduce((n, c) => n + c.out.length, 0),
      doorIn: world.classes.reduce((n, c) => n + c.in.length, 0),
      doorSelf: world.classes.reduce((n, c) => n + c.self.length, 0),
      notices: world.classes.reduce((n, c) => n + c.notes.length + c.examples.length, 0),
      stairUpPortals: world.classes.reduce((n, c) => n + Math.max(0, c.supers.length - 1), 0),
      stairDownPortals: world.classes.reduce(
        (n, c) => n + (c.subs.length - (layout.homeChildren[c.id]?.length ?? 0)),
        0
      ),
      lifts: world.classes.filter((c) => c.supers.length || c.subs.length).length,
      realStairwells: Object.keys(layout.landings).length,
    };
    const count = (kind: string) => allInteractables.filter((i) => i.kind === kind).length;
    const built = {
      areas: areas.size,
      doorOut: count('door-out'),
      doorIn: count('door-in'),
      doorSelf: count('door-self'),
      notices: [...areas.values()].reduce((n, a) => n + (a.notices ?? 0), 0),
      stairUpPortals: count('stair-up'),
      stairDownPortals: count('stair-down'),
      lifts: count('lift'),
      realStairwells: Object.keys(layout.landings).length,
    };
    const unpaired = allInteractables.filter(
      (it) => (it.kind === 'door-out' || it.kind === 'door-in') && !doorCounterpart(it)
    );
    // reachability over real architecture + portals, starting at the atrium
    const adj = new Map<string, Set<string>>();
    const link = (a: string, b: string) => {
      if (!adj.has(a)) adj.set(a, new Set());
      adj.get(a)!.add(b);
    };
    link(ATRIUM_ID, STREET_ID);
    for (const w of layout.wings) for (const r of w.rootIds) { link(STREET_ID, r); link(r, STREET_ID); }
    for (const [pid, kids] of Object.entries(layout.homeChildren)) {
      for (const k of kids) { link(pid, k); link(k, pid); } // real stairwell + landing
    }
    for (const it of allInteractables) {
      for (const t of it.targetIds) link(it.areaId, t);
      if (it.kind === 'lift') {
        const wc = byId.get(it.areaId)!;
        for (const a of ancestorLevels(wc, byId)) link(it.areaId, a.id);
        for (const s of wc.subs) link(it.areaId, s);
        link(it.areaId, ATRIUM_ID);
      }
    }
    const seen = new Set<string>([ATRIUM_ID]);
    const stack = [ATRIUM_ID];
    while (stack.length) {
      for (const n of adj.get(stack.pop()!) ?? []) {
        if (!seen.has(n)) {
          seen.add(n);
          stack.push(n);
        }
      }
    }
    const unreachable = [...areas.keys()].filter((id) => !seen.has(id)).map((id) => areas.get(id)!.label);
    const pass =
      built.areas === expect.areas &&
      built.doorOut === expect.doorOut &&
      built.doorIn === expect.doorIn &&
      built.doorSelf === expect.doorSelf &&
      built.notices === expect.notices &&
      built.stairUpPortals === expect.stairUpPortals &&
      built.stairDownPortals === expect.stairDownPortals &&
      built.lifts === expect.lifts &&
      unpaired.length === 0 &&
      unreachable.length === 0;
    return { pass, expect, built, unpaired: unpaired.length, unreachable, signs: signs.count };
  }

  (window as unknown as Record<string, unknown>).__hospital = {
    world,
    layout,
    player,
    areas,
    interactables: allInteractables,
    audit,
    openSearch,
    perf: () => ({ ...frameMs, avg: +frameAvg.toFixed(1), drawCalls: renderer.info.render.calls, triangles: renderer.info.render.triangles }),
    people: () => ({ tier: people, walkers: walkers.length, demoteStage }),
    /** Advance walkers manually (testing without an animation loop). */
    tickPeople(dt = 0.1, steps = 1) {
      for (let i = 0; i < steps; i++) for (const e of walkers) e.w.update(dt);
    },
    /** Synchronous frame timing (N renders) — immune to rAF throttling. */
    bench(n = 30) {
      const t0 = performance.now();
      for (let i = 0; i < n; i++) renderer.render(scene, player.camera);
      return { msPerFrame: +((performance.now() - t0) / n).toFixed(2), drawCalls: renderer.info.render.calls, triangles: renderer.info.render.triangles };
    },
    currentArea: () => currentArea.label,
    goto(label: string) {
      const target =
        label === 'Reception'
          ? atrium
          : label === 'Hospital Street'
            ? street
            : (byLabel.get(label) && areas.get(byLabel.get(label)!.id)) || null;
      if (!target) return `unknown area: ${label}`;
      travelToArea(target.id);
      return target.label;
    },
    /** Walk forward n metres in 10 cm steps with ground-follow, triggering doors. */
    walk(metres: number) {
      const steps = Math.ceil(Math.abs(metres) / 0.1);
      for (let i = 0; i < steps; i++) {
        const yaw = player.camera.rotation.y;
        const p = player.camera.position;
        p.x += -Math.sin(yaw) * 0.1 * Math.sign(metres);
        p.z += -Math.cos(yaw) * 0.1 * Math.sign(metres);
        player.snapGround();
        const here = areaAt(player.floorPosition);
        if (here && here !== currentArea) setArea(here);
        checkInteractions();
      }
      const p = player.camera.position;
      return { x: +p.x.toFixed(2), y: +(p.y - 1.7).toFixed(2), z: +p.z.toFixed(2), area: currentArea.label };
    },
  };

  console.info(
    `[hospital] built ${areas.size} areas, ${allInteractables.length} interactables, ${signs.count} signs, street ${Math.round(layout.street.x1)}m`
  );
}

boot().catch((err) => {
  console.error(err);
  const p = document.createElement('p');
  p.style.cssText = 'color:#fff;padding:24px;font-family:Arial';
  p.textContent = String(err);
  startEl.replaceChildren(p);
});
