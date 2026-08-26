import * as THREE from 'three';
import { CSS3DRenderer, CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';
import { conceptSlug } from '../contsys';

/**
 * The lecture-theatre screen, live: the published concept page itself, framed on the
 * projection screen as real DOM — selectable, clickable, searchable — instead of another
 * canvas texture that would go soft the moment anyone leans in and fork the model's prose
 * into a second rendering. See DESIGN-LIVE-MODEL.md.
 *
 * A CSS3DRenderer draws the iframe through the same camera as the WebGL scene, in a layer
 * stacked on the canvas. DOM cannot be depth-tested against geometry, so the panel is only
 * mounted while the player is in the theatre and on the audience side of the screen — in a
 * raked hall nothing stands between the seats and the screen, and the gate makes that
 * structural rather than lucky (and keeps a live iframe out of the rest of the hospital).
 *
 * The screen mesh stays: the deck draws on it as before, and live mode blacks it so the
 * panel's edges land on darkness rather than a stray slide.
 */

/**
 * The projection surface is 6 × 3.375 m — exactly 16:9. The page renders at 1280×720 rather
 * than 1920×1080: fewer CSS pixels across the same six metres means every one is half as
 * large again, which is the difference between desk type and presentation type when read
 * from the seats. (?embed=1 then grows the type further and clears the page chrome.)
 */
const PAGE_W = 1280;
const PAGE_H = 720;

/**
 * Where the reference lives. Same-origin in production (the publication at /, the hospital at
 * /hospital/), which is what lets later phases script into the frame. On a dev server or the
 * Pages preview the publication is not there, so fall back to the live site — cross-origin
 * merely means the room cannot reach inside, and the page still displays.
 */
function conceptBase(): string {
  return location.hostname.endsWith('contsys.org') ? '' : 'https://contsys.org';
}

export class LivePanel {
  private cssScene = new THREE.Scene();
  private cssRenderer = new CSS3DRenderer();
  private iframe: HTMLIFrameElement;
  private object: CSS3DObject;
  private screen: THREE.Mesh;

  private placed = false;
  private panelPos = new THREE.Vector3();
  private panelNormal = new THREE.Vector3();

  private savedMap: THREE.Texture | null = null;
  private savedColor = new THREE.Color(0xffffff);
  private mounted = false;

  private _visible = false;
  private lastSlug = 'care_plan';

  constructor(container: HTMLElement, screen: THREE.Mesh) {
    this.screen = screen;

    const dom = this.cssRenderer.domElement;
    dom.style.position = 'absolute';
    dom.style.top = '0';
    dom.style.left = '0';
    // The layer never takes input; only the iframe inside it does. Dragging anywhere else
    // still looks around the room.
    dom.style.pointerEvents = 'none';
    dom.style.display = 'none';
    container.appendChild(dom);

    this.iframe = document.createElement('iframe');
    this.iframe.style.width = `${PAGE_W}px`;
    this.iframe.style.height = `${PAGE_H}px`;
    this.iframe.style.border = '0';
    this.iframe.style.background = '#fff';
    // Without this the page shows through mirrored when viewed from backstage.
    this.iframe.style.backfaceVisibility = 'hidden';
    this.iframe.style.pointerEvents = 'auto';
    this.iframe.title = 'ContSys reference — live concept page';

    this.object = new CSS3DObject(this.iframe);
    const s = 6 / PAGE_W; // 6 m of screen across PAGE_W px of page
    this.object.scale.set(s, s, s);
    this.cssScene.add(this.object);

    this.resize();
  }

  /** Lay the panel on the screen's face. Deferred: the world matrix needs the scene settled. */
  private place() {
    this.screen.getWorldPosition(this.panelPos);
    const q = this.screen.getWorldQuaternion(new THREE.Quaternion());
    // A plane faces its local +Z; the screen's rotation turns that toward the audience.
    this.panelNormal.set(0, 0, 1).applyQuaternion(q);
    // A hair proud of the mesh, so the page edge meets the dark surround, not the white mesh.
    this.panelPos.addScaledVector(this.panelNormal, 0.01);
    this.object.position.copy(this.panelPos);
    this.object.quaternion.copy(q);
    this.placed = true;
  }

  get visible(): boolean {
    return this._visible;
  }

  /** The slug currently (or last) on screen. */
  get slug(): string {
    return this.lastSlug;
  }

  /** Put a concept's published page on the screen. No slug repeats the last one. */
  show(slug?: string) {
    const s = conceptSlug(slug ?? this.lastSlug);
    this.lastSlug = s;
    // ?embed=1 asks the publication for its presentation dress: chrome gone, type up.
    // Harmless where the publication does not know it yet — the plain page comes back.
    const url = `${conceptBase()}/concept/${encodeURIComponent(s)}?embed=1`;
    if (this.iframe.getAttribute('src') !== url) this.iframe.setAttribute('src', url);

    if (!this._visible) {
      // Black the mesh behind the panel; restore on hide.
      const mat = this.screen.material as THREE.MeshBasicMaterial;
      this.savedMap = mat.map;
      this.savedColor.copy(mat.color);
      mat.map = null;
      mat.color.setHex(0x0a0d10);
      mat.needsUpdate = true;
      this._visible = true;
    }
  }

  /** Back to the slide deck. The iframe keeps its page, so re-showing is instant. */
  hide() {
    if (!this._visible) return;
    const mat = this.screen.material as THREE.MeshBasicMaterial;
    mat.map = this.savedMap;
    mat.color.copy(this.savedColor);
    mat.needsUpdate = true;
    this._visible = false;
  }

  /** Once per frame. Mounts, renders, or unmounts the DOM layer as the gate decides. */
  update(camera: THREE.PerspectiveCamera, inTheatre: boolean) {
    if (!this.placed) this.place();

    const facing =
      this._visible &&
      inTheatre &&
      camera.position.clone().sub(this.panelPos).dot(this.panelNormal) > 0;

    if (facing !== this.mounted) {
      this.cssRenderer.domElement.style.display = facing ? '' : 'none';
      this.mounted = facing;
    }
    if (this.mounted) this.cssRenderer.render(this.cssScene, camera);
  }

  resize() {
    this.cssRenderer.setSize(innerWidth, innerHeight);
  }

  /**
   * Scroll the page. Same-origin only — in production the publication shares the origin, so
   * this works; on a dev server the frame is sealed and false says so, letting the caller
   * fall back to advice rather than fail silently.
   */
  scrollBy(dy: number): boolean {
    try {
      const w = this.iframe.contentWindow;
      if (!w || !this.iframe.contentDocument) return false;
      w.scrollBy({ top: dy, behavior: 'smooth' });
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Click whatever the crosshair rests on: (u,v) is the hit on the screen mesh, which maps
   * straight onto page pixels because the page covers the screen 1:1. An untrusted click
   * still follows links and toggles sections, which is all a reader needs.
   */
  clickAt(u: number, v: number): boolean {
    try {
      const doc = this.iframe.contentDocument;
      if (!doc) return false;
      const x = u * PAGE_W;
      const y = (1 - v) * PAGE_H; // mesh UV counts from the bottom; pages count from the top
      const el = doc.elementFromPoint(x, y);
      if (!el) return false;
      el.dispatchEvent(
        new MouseEvent('click', { bubbles: true, cancelable: true, clientX: x, clientY: y, view: doc.defaultView })
      );
      return true;
    } catch {
      return false;
    }
  }
}
