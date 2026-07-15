import * as THREE from 'three';
import { NHS_BLUE } from './signage';

/**
 * The lecture-theatre slide deck.
 *
 * `public/slides/manifest.json` lists the deck in order — either a bare array
 * (`["01.png", "02.png", "clip.mp4"]`) or `{ "slides": [...] }`. Images are
 * letterboxed onto a fixed 1920×1080 canvas (slides must never crop); `.mp4` /
 * `.webm` entries play as video textures. With no manifest, a built-in
 * instructional deck explains how to load your own.
 *
 * Textures follow the house GL rules: fixed-size canvas (the resize-after-
 * upload trap), no mipmaps + linear filtering (the NPOT trap).
 */

const SLIDE_W = 1920;
const SLIDE_H = 1080;

type Entry =
  | { kind: 'image'; src: string }
  | { kind: 'video'; src: string }
  | { kind: 'builtin'; draw: (ctx: CanvasRenderingContext2D) => void };

function blueTitle(ctx: CanvasRenderingContext2D, title: string, subtitle: string, footer: string) {
  ctx.fillStyle = NHS_BLUE;
  ctx.fillRect(0, 0, SLIDE_W, SLIDE_H);
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.font = 'bold 118px Arial';
  ctx.fillText(title, SLIDE_W / 2, 470);
  ctx.font = '54px Arial';
  ctx.globalAlpha = 0.92;
  ctx.fillText(subtitle, SLIDE_W / 2, 580);
  ctx.font = '34px Arial';
  ctx.globalAlpha = 0.7;
  ctx.fillText(footer, SLIDE_W / 2, 990);
  ctx.globalAlpha = 1;
}

function listSlide(ctx: CanvasRenderingContext2D, title: string, lines: string[]) {
  ctx.fillStyle = '#f4f6f7';
  ctx.fillRect(0, 0, SLIDE_W, SLIDE_H);
  ctx.fillStyle = NHS_BLUE;
  ctx.fillRect(0, 0, SLIDE_W, 190);
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'left';
  ctx.font = 'bold 78px Arial';
  ctx.fillText(title, 110, 128);
  ctx.fillStyle = '#16212a';
  ctx.font = '46px Arial';
  lines.forEach((line, i) => ctx.fillText(line, 110, 330 + i * 105));
}

function builtinDeck(): Entry[] {
  return [
    {
      kind: 'builtin',
      draw: (ctx) =>
        blueTitle(
          ctx,
          'Postgraduate Medical Centre',
          'Lecture Theatre · ContSys Hospital',
          'a walkable model of the continuity-of-care concept system'
        ),
    },
    {
      kind: 'builtin',
      draw: (ctx) =>
        listSlide(ctx, 'Bring your own slides', [
          '1.  Export your deck as PNG or JPG images (1920 × 1080 works best).',
          '2.  Copy them into the site’s  slides/  folder.',
          '3.  List them in order in  slides/manifest.json :',
          '         ["01.png", "02.png", "03.png"]',
          '4.  Video clips (.mp4, .webm) can be listed too — they play here.',
          '5.  Redeploy. This screen then presents your deck.',
        ]),
    },
    {
      kind: 'builtin',
      draw: (ctx) =>
        listSlide(ctx, 'Presenting & filming', [
          '← →  or  PageUp / PageDown change slides — presenter clickers work.',
          'Tap or click the screen: right side = next, left side = back.',
          'H  hides the whole interface for a clean recording.',
          'L  dims the house lights.',
          'Add  ?start=theatre  to the address to begin at the lectern.',
          'B  returns to your last stop when you’re done.',
        ]),
    },
  ];
}

export class SlideDeck {
  private entries: Entry[] = [];
  private index = 0;
  private cache = new Map<number, THREE.Texture>();
  private video: HTMLVideoElement | null = null;
  private videoTex: THREE.VideoTexture | null = null;
  private mat: THREE.MeshBasicMaterial;

  constructor(screen: THREE.Mesh) {
    this.mat = screen.material as THREE.MeshBasicMaterial;
  }

  get count() {
    return this.entries.length;
  }
  get label() {
    return `Slide ${this.index + 1} / ${this.entries.length}`;
  }

  async load() {
    try {
      const r = await fetch('slides/manifest.json');
      if (r.ok) {
        const m = await r.json();
        const list: string[] = Array.isArray(m) ? m : (m?.slides ?? []);
        this.entries = list.map((f) => ({
          kind: /\.(mp4|webm|mov)$/i.test(f) ? 'video' : 'image',
          src: `slides/${f}`,
        }));
      }
    } catch {
      /* no manifest — use the built-in deck */
    }
    if (!this.entries.length) this.entries = builtinDeck();
    this.show(0);
  }

  next() {
    this.show(Math.min(this.index + 1, this.entries.length - 1));
  }
  prev() {
    this.show(Math.max(this.index - 1, 0));
  }

  private show(i: number) {
    if (!this.entries.length) return;
    this.index = i;
    const e = this.entries[i];
    if (e.kind === 'video') {
      this.mat.map = this.playVideo(e.src);
    } else {
      this.video?.pause();
      this.mat.map = this.texture(i);
      // warm the neighbours so the next click is instant
      if (this.entries[i + 1]?.kind === 'image') this.texture(i + 1);
      if (this.entries[i - 1]?.kind === 'image') this.texture(i - 1);
    }
    this.mat.needsUpdate = true;
  }

  /** Canvas texture for an image/builtin entry (fixed size, letterboxed). */
  private texture(i: number): THREE.Texture {
    const hit = this.cache.get(i);
    if (hit) return hit;
    const canvas = document.createElement('canvas');
    canvas.width = SLIDE_W;
    canvas.height = SLIDE_H;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = '#0d1114';
    ctx.fillRect(0, 0, SLIDE_W, SLIDE_H);
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.generateMipmaps = false;
    tex.minFilter = THREE.LinearFilter;
    const e = this.entries[i];
    if (e.kind === 'builtin') {
      e.draw(ctx);
      tex.needsUpdate = true;
    } else if (e.kind === 'image') {
      const img = new Image();
      img.onload = () => {
        const s = Math.min(SLIDE_W / img.width, SLIDE_H / img.height); // contain — never crop a slide
        const w = img.width * s;
        const h = img.height * s;
        ctx.drawImage(img, (SLIDE_W - w) / 2, (SLIDE_H - h) / 2, w, h);
        tex.needsUpdate = true;
      };
      img.src = e.src;
    }
    this.cache.set(i, tex);
    return tex;
  }

  private playVideo(src: string): THREE.VideoTexture {
    if (!this.video) {
      this.video = document.createElement('video');
      this.video.playsInline = true;
      this.videoTex = new THREE.VideoTexture(this.video);
      this.videoTex.colorSpace = THREE.SRGBColorSpace;
      this.videoTex.generateMipmaps = false;
      this.videoTex.minFilter = THREE.LinearFilter;
    }
    const v = this.video;
    if (!v.src.endsWith(src)) v.src = src;
    v.currentTime = 0;
    v.muted = false;
    v.play().catch(() => {
      // stricter autoplay policy: retry silently rather than not at all
      v.muted = true;
      v.play().catch(() => {});
    });
    return this.videoTex!;
  }
}
