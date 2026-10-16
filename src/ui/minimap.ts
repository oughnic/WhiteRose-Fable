import * as THREE from 'three';
import { addDebugControls } from '../debug/debugPane';
import { ACTIVE_LOOK } from '../look/lookMode';
import { BLUEPRINT_BLUE, BLUEPRINT_FONT, BLUEPRINT_INK, drawBlueprintPlan, type PlanRect } from './minimapBlueprint';

/**
 * On-screen minimap: a plan of the storey you are on, drawn from the areas' own membership
 * boxes (the same "which area am I in" boxes — lobbies, corridors, landings, stair shafts,
 * the streets, Reception, the theatre and the gallery), coloured by wing.
 *
 * Floors: storeys are concept depth (ground = level 0, each specialisation 4 m further down),
 * so the map shows one storey at a time and switches at half a storey, the same rule the
 * storey culling uses. The storey above is ghosted underneath — "you are under the Care
 * wing" — and a lift-style strip (G, −1, −2 …) beside the map lights the current floor.
 *
 * Style (Minimap folder): wing colours, or a blueprint (minimapBlueprint.ts) — the default
 * in the sketchy-drawing look.
 */

export interface MinimapArea {
  id: string;
  boxes: THREE.Box3[];
  /** CSS colour: the wing colour, or a neutral for the shared spaces. */
  color: string;
}

/** Tunables, bound to the debug panel (Minimap folder). */
const minimapSettings = {
  visible: true,
  /** Map width and height in CSS pixels. */
  sizePx: innerWidth <= 640 ? 130 : 180,
  /** How many metres of hospital the map spans edge to edge. */
  metresAcross: 70,
  /** Turn the map with you (what's ahead is always up), or keep north up. */
  rotateWithView: true,
  /** How strongly the storey above shows through. */
  ghostAbove: 0.18,
  /** Opacity of the map's dark backing. */
  backing: 0.55,
  /** Wing-coloured plan, or white line-work on blueprint blue (the sketchy look's default). */
  style: ACTIVE_LOOK === 'sketch' ? 'blueprint' : 'wings',
};

const STOREY_M = 4;
const FLOOR_STRIP_PX = 30;
const NHS_BLUE = '#005eb8';

/** Storey index of a world height (0 = ground, 1 = one down …), switching at half a storey. */
const storeyAt = (y: number) => Math.max(0, Math.round(-y / STOREY_M));

export const createMinimap = (parent: HTMLElement, areas: MinimapArea[], deepestStorey: number) => {
  // one plan per storey; a box belongs to every storey whose floor it spans 1 m above
  // (the stair shafts span two, and appear on both)
  const plans: PlanRect[][] = Array.from({ length: deepestStorey + 1 }, () => []);
  for (const area of areas) {
    for (const b of area.boxes) {
      for (let s = 0; s <= deepestStorey; s++) {
        const probeY = -STOREY_M * s + 1;
        if (b.min.y <= probeY && b.max.y >= probeY) {
          plans[s].push({ x: b.min.x, z: b.min.z, w: b.max.x - b.min.x, d: b.max.z - b.min.z, color: area.color, areaId: area.id });
        }
      }
    }
  }

  const canvas = document.createElement('canvas');
  canvas.id = 'minimap';
  canvas.style.cssText = 'position:absolute;top:92px;left:16px;pointer-events:none;border-radius:6px';
  parent.appendChild(canvas);
  const ctx = canvas.getContext('2d')!;

  const resizeMinimap = () => {
    const dpr = Math.min(devicePixelRatio, 2);
    const w = minimapSettings.sizePx + FLOOR_STRIP_PX;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(minimapSettings.sizePx * dpr);
    canvas.style.width = `${w}px`;
    canvas.style.height = `${minimapSettings.sizePx}px`;
    canvas.style.display = minimapSettings.visible ? 'block' : 'none';
  };
  resizeMinimap();

  const drawPlan = (rects: PlanRect[], fill: (r: PlanRect) => string | null) => {
    for (const r of rects) {
      const style = fill(r);
      if (!style) continue;
      ctx.fillStyle = style;
      ctx.fillRect(r.x, r.z, r.w, r.d);
    }
  };

  /** The floor strip: G, −1, −2 … with the current storey lit. */
  const drawFloorStrip = (storey: number, size: number) => {
    const blueprint = minimapSettings.style === 'blueprint';
    const x = size + 4;
    const rowH = Math.min(22, (size - 4) / (deepestStorey + 1));
    for (let s = 0; s <= deepestStorey; s++) {
      const y = 2 + s * rowH;
      if (blueprint) {
        // blueprint: every floor an ink box on blue, the current one filled with ink
        ctx.fillStyle = s === storey ? BLUEPRINT_INK : BLUEPRINT_BLUE;
        ctx.fillRect(x, y, FLOOR_STRIP_PX - 6, rowH - 2);
        ctx.strokeStyle = BLUEPRINT_INK;
        ctx.lineWidth = 1;
        ctx.strokeRect(x + 0.5, y + 0.5, FLOOR_STRIP_PX - 7, rowH - 3);
      } else {
        ctx.fillStyle = s === storey ? NHS_BLUE : `rgba(0, 20, 40, ${minimapSettings.backing})`;
        ctx.fillRect(x, y, FLOOR_STRIP_PX - 6, rowH - 2);
      }
      ctx.fillStyle = blueprint ? (s === storey ? BLUEPRINT_BLUE : BLUEPRINT_INK) : s === storey ? '#fff' : 'rgba(255, 255, 255, 0.6)';
      ctx.font = `${s === storey ? 'bold ' : ''}12px ${blueprint ? BLUEPRINT_FONT : 'Arial, Helvetica, sans-serif'}`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(s === 0 ? 'G' : `−${s}`, x + (FLOOR_STRIP_PX - 6) / 2, y + (rowH - 2) / 2);
    }
  };

  /** Redraw around the player. `yaw` is the camera's; `currentAreaId` is outlined. */
  const updateMinimap = (feet: THREE.Vector3, yaw: number, currentAreaId: string) => {
    if (!minimapSettings.visible) return;
    const size = minimapSettings.sizePx;
    const dpr = canvas.width / (size + FLOOR_STRIP_PX);
    const storey = storeyAt(feet.y);
    const ppm = size / minimapSettings.metresAcross;
    // world (x, z) → map: rotating by the yaw puts what's ahead at the top; a fixed half
    // turn keeps +z (the north street) at the top instead. Both are true rotations, so
    // turning left on the map is turning left in the world.
    const turn = minimapSettings.rotateWithView ? yaw : Math.PI;

    const blueprint = minimapSettings.style === 'blueprint';

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, size + FLOOR_STRIP_PX, size);
    // a blueprint is opaque paper: the backing setting is for the wing-coloured map
    ctx.fillStyle = blueprint ? BLUEPRINT_BLUE : `rgba(0, 20, 40, ${minimapSettings.backing})`;
    ctx.fillRect(0, 0, size, size);

    ctx.save();
    ctx.beginPath();
    ctx.rect(0, 0, size, size);
    ctx.clip();
    ctx.translate(size / 2, size / 2);
    ctx.rotate(turn);
    ctx.scale(ppm, ppm);
    ctx.translate(-feet.x, -feet.z);

    if (blueprint) {
      drawBlueprintPlan({
        ctx,
        here: plans[storey],
        above: storey > 0 ? plans[storey - 1] : null,
        ghostAbove: minimapSettings.ghostAbove,
        currentAreaId,
        feetX: feet.x,
        feetZ: feet.z,
        ppm,
        reach: Math.ceil(minimapSettings.metresAcross * 0.75),
      });
    } else {
      // the storey above, ghosted: what you are underneath
      if (storey > 0 && minimapSettings.ghostAbove > 0) {
        drawPlan(plans[storey - 1], () => `rgba(255, 255, 255, ${minimapSettings.ghostAbove})`);
      }
      // this storey, by wing; the area you're in solid, the rest translucent
      ctx.globalAlpha = 0.6;
      drawPlan(plans[storey], (r) => (r.areaId === currentAreaId ? null : r.color));
      ctx.globalAlpha = 1;
      drawPlan(plans[storey], (r) => (r.areaId === currentAreaId ? r.color : null));
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 1.5 / ppm;
      for (const r of plans[storey]) if (r.areaId === currentAreaId) ctx.strokeRect(r.x, r.z, r.w, r.d);
    }

    // you: an arrow pointing where you look
    const fx = -Math.sin(yaw);
    const fz = -Math.cos(yaw);
    const len = 9 / ppm;
    const half = 5 / ppm;
    ctx.beginPath();
    ctx.moveTo(feet.x + fx * len, feet.z + fz * len);
    ctx.lineTo(feet.x - fx * half + fz * half, feet.z - fz * half - fx * half);
    ctx.lineTo(feet.x - fx * half * 0.3, feet.z - fz * half * 0.3);
    ctx.lineTo(feet.x - fx * half - fz * half, feet.z - fz * half + fx * half);
    ctx.closePath();
    ctx.fillStyle = blueprint ? BLUEPRINT_INK : '#fff';
    ctx.fill();
    ctx.strokeStyle = blueprint ? BLUEPRINT_BLUE : NHS_BLUE;
    ctx.lineWidth = 1.5 / ppm;
    ctx.stroke();
    ctx.restore();

    // N on the rim, towards +z (the north street) — it travels round when the map turns
    const nx = -Math.sin(turn);
    const ny = Math.cos(turn);
    ctx.fillStyle = blueprint ? BLUEPRINT_INK : '#fff';
    ctx.font = `bold 11px ${blueprint ? BLUEPRINT_FONT : 'Arial, Helvetica, sans-serif'}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('N', size / 2 + nx * (size / 2 - 9), size / 2 + ny * (size / 2 - 9));

    drawFloorStrip(storey, size);
  };

  addDebugControls((pane) => {
    const folder = pane.addFolder({ title: 'Minimap' });
    folder.addBinding(minimapSettings, 'visible', { label: 'show' });
    folder.addBinding(minimapSettings, 'style', { label: 'style', options: { 'wing colours': 'wings', blueprint: 'blueprint' } });
    folder.addBinding(minimapSettings, 'sizePx', { label: 'size (px)', min: 90, max: 400, step: 1 });
    folder.addBinding(minimapSettings, 'metresAcross', { label: 'shows (m across)', min: 20, max: 400, step: 1 });
    folder.addBinding(minimapSettings, 'rotateWithView', { label: 'turn with view' });
    folder.addBinding(minimapSettings, 'ghostAbove', { label: 'floor above', min: 0, max: 0.6, step: 0.01 });
    folder.addBinding(minimapSettings, 'backing', { label: 'backing (wing colours)', min: 0, max: 1, step: 0.01 });
    folder.on('change', resizeMinimap);
  });

  return { updateMinimap };
};
