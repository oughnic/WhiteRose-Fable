import * as THREE from 'three';

/** NHS blue, Pantone 300. */
export const NHS_BLUE = '#005eb8';

export interface SignSpec {
  /** Pixel size of the canvas; keep aspect ≈ mesh aspect. */
  widthPx: number;
  heightPx: number;
  title: string;
  titleSize?: number;
  subtitle?: string;
  subtitleSize?: number;
  body?: string;
  bodySize?: number;
  /** Shrink the body font until the whole text fits the canvas. */
  fitBody?: boolean;
  /** Small print pinned to the bottom (e.g. definition sources). */
  footer?: string;
  align?: 'left' | 'center';
  background?: string;
  color?: string;
}

function wrap(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let line = '';
  for (const w of words) {
    const probe = line ? `${line} ${w}` : w;
    if (ctx.measureText(probe).width > maxWidth && line) {
      lines.push(line);
      line = w;
    } else {
      line = probe;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function truncate(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string {
  if (ctx.measureText(text).width <= maxWidth) return text;
  let t = text;
  while (t.length > 1 && ctx.measureText(`${t}…`).width > maxWidth) t = t.slice(0, -1);
  return `${t}…`;
}

/** Draw an NHS-style sign to a canvas texture: white Arial on NHS blue. */
export function makeSignTexture(spec: SignSpec): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = spec.widthPx;
  canvas.height = spec.heightPx;
  const ctx = canvas.getContext('2d')!;
  const pad = Math.round(spec.widthPx * 0.05);
  const align = spec.align ?? 'left';
  const x = align === 'center' ? spec.widthPx / 2 : pad;

  ctx.fillStyle = spec.background ?? NHS_BLUE;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = spec.color ?? '#ffffff';
  ctx.textAlign = align;
  ctx.textBaseline = 'top';

  let y = pad;
  let titleSize = spec.titleSize ?? Math.round(spec.heightPx * 0.28);
  let subSize = spec.subtitleSize ?? Math.round(titleSize * 0.55);
  // shrink to fit: wrapped title + subtitle must never run off the canvas
  // (body signs manage their own space via fitBody)
  if (!spec.body) {
    const subRatio = subSize / titleSize;
    for (let guard = 0; guard < 24 && titleSize > 18; guard++) {
      ctx.font = `bold ${titleSize}px Arial`;
      let need = wrap(ctx, spec.title, spec.widthPx - pad * 2).length * titleSize * 1.15;
      if (spec.subtitle) {
        ctx.font = `${subSize}px Arial`;
        need += wrap(ctx, spec.subtitle, spec.widthPx - pad * 2).length * subSize * 1.2;
      }
      if (need <= spec.heightPx - pad * 1.6) break;
      titleSize = Math.round(titleSize * 0.93);
      subSize = Math.max(14, Math.round(titleSize * subRatio));
    }
  }
  ctx.font = `bold ${titleSize}px Arial`;
  for (const line of wrap(ctx, spec.title, spec.widthPx - pad * 2)) {
    ctx.fillText(line, x, y);
    y += titleSize * 1.15;
  }

  if (spec.subtitle) {
    ctx.font = `${subSize}px Arial`;
    ctx.globalAlpha = 0.85;
    for (const line of wrap(ctx, spec.subtitle, spec.widthPx - pad * 2)) {
      ctx.fillText(line, x, y);
      y += subSize * 1.2;
    }
    ctx.globalAlpha = 1;
  }

  if (spec.body) {
    y += pad * 0.5;
    let s = spec.bodySize ?? Math.round(titleSize * 0.45);
    if (spec.fitBody) {
      // reserve room for the footer, then shrink until every line fits
      const footerPx = spec.footer ? Math.round(titleSize * 0.32) * 2.6 + pad : pad;
      const avail = spec.heightPx - y - footerPx;
      while (s > 16) {
        ctx.font = `${s}px Arial`;
        if (wrap(ctx, spec.body, spec.widthPx - pad * 2).length * s * 1.3 <= avail) break;
        s -= 2;
      }
    }
    ctx.font = `${s}px Arial`;
    for (const line of wrap(ctx, spec.body, spec.widthPx - pad * 2)) {
      ctx.fillText(line, x, y);
      y += s * 1.3;
    }
  }

  if (spec.footer) {
    const s = Math.round((spec.titleSize ?? spec.heightPx * 0.28) * 0.32);
    ctx.font = `${s}px Arial`;
    ctx.globalAlpha = 0.72;
    let fy = spec.heightPx - pad;
    const lines = wrap(ctx, spec.footer, spec.widthPx - pad * 2).reverse();
    for (const line of lines) {
      fy -= s * 1.25;
      ctx.fillText(line, x, fy);
    }
    ctx.globalAlpha = 1;
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.anisotropy = 4;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/** NHS green — used for example (patient-information) notices. */
export const NHS_GREEN = '#009639';

/**
 * A framed corridor notice: white card with a coloured header band —
 * notes and examples from the ISO metadata hang as these.
 */
export function makeNoticeTexture(header: string, headerColor: string, body: string): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 620;
  canvas.height = 810;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#fbfbf8';
  ctx.fillRect(0, 0, 620, 810);
  ctx.fillStyle = headerColor;
  ctx.fillRect(0, 0, 620, 92);
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 46px Arial';
  ctx.textBaseline = 'middle';
  ctx.fillText(header, 30, 48);
  ctx.textBaseline = 'top';
  ctx.fillStyle = '#20262b';
  ctx.font = '34px Arial';
  let y = 130;
  for (const line of wrap(ctx, body, 560)) {
    ctx.fillText(line, 30, y);
    y += 46;
    if (y > 770) break; // very long notes are truncated on the card
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.anisotropy = 4;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/** An aged sign with the deprecated terms struck through — painted over, not forgotten. */
export function makeOldTermsTexture(terms: string[]): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 620;
  canvas.height = 290;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#e9e3d0'; // aged cream
  ctx.fillRect(0, 0, 620, 290);
  ctx.strokeStyle = '#8b8672';
  ctx.lineWidth = 6;
  ctx.strokeRect(8, 8, 604, 274);
  ctx.fillStyle = '#6c6753';
  ctx.font = '26px Arial';
  ctx.fillText('formerly signposted as', 28, 34);
  ctx.fillStyle = '#3a382f';
  let y = 88;
  for (const term of terms.slice(0, 3)) {
    ctx.font = 'bold 44px Arial';
    ctx.fillText(term, 28, y);
    const w = ctx.measureText(term).width;
    ctx.strokeStyle = '#7d2a2a';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(24, y + 2);
    ctx.lineTo(32 + w, y - 6);
    ctx.stroke();
    y += 64;
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/**
 * A procedural mid-century print (placeholder art while the Wikimedia
 * manifest is curated): quiet geometric bands in a muted palette.
 */
export function makePrintTexture(seed: number): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  const W = 640;
  const H = 460;
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d')!;
  let s = (seed % 2147483646) + 1;
  const rnd = () => (s = (s * 16807) % 2147483647) / 2147483647;
  const palettes = [
    ['#e8e3d4', '#41668c', '#c4a35a', '#7a4b3a', '#5d7a76'],
    ['#ece7dc', '#6c8c5f', '#c96f4a', '#3d4a52', '#c4b57a'],
    ['#e6e2d8', '#8a5a74', '#5a7d8a', '#c9a35a', '#4a5747'],
  ];
  const pal = palettes[seed % palettes.length];
  ctx.fillStyle = pal[0];
  ctx.fillRect(0, 0, W, H);
  const n = 5 + Math.floor(rnd() * 5);
  for (let i = 0; i < n; i++) {
    ctx.fillStyle = pal[1 + Math.floor(rnd() * (pal.length - 1))];
    ctx.globalAlpha = 0.75 + rnd() * 0.25;
    if (rnd() < 0.45) {
      ctx.beginPath();
      ctx.arc(rnd() * W, rnd() * H, 40 + rnd() * 100, 0, Math.PI * (0.7 + rnd() * 1.3));
      ctx.lineWidth = 14 + rnd() * 30;
      ctx.strokeStyle = ctx.fillStyle as string;
      ctx.stroke();
    } else {
      const w = 40 + rnd() * 150;
      ctx.fillRect(rnd() * (W - w), rnd() * (H - 100), w, 50 + rnd() * 160);
    }
  }
  ctx.globalAlpha = 1;
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/** Gallery placard under an artwork: title, credit, licence. */
export function makePlacardTexture(title: string, credit: string): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 150;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#f5f4ef';
  ctx.fillRect(0, 0, 512, 150);
  ctx.fillStyle = '#20262b';
  ctx.font = 'bold 34px Arial';
  ctx.fillText(truncate(ctx, title, 470), 22, 26);
  ctx.font = '24px Arial';
  ctx.globalAlpha = 0.75;
  let y = 78;
  for (const line of wrap(ctx, credit, 470).slice(0, 2)) {
    ctx.fillText(line, 22, y);
    y += 32;
  }
  ctx.globalAlpha = 1;
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export interface BoardRow {
  text: string;
  sub?: string;
  /** Colour chip drawn before the text (wayfinding colours). */
  chip?: string;
  /** Highlight this row (e.g. the current floor on a lift board). */
  strong?: boolean;
}

export interface BoardSpec {
  widthPx: number;
  heightPx: number;
  title: string;
  subtitle?: string;
  rows: BoardRow[];
  columns?: number;
  rowSize?: number;
  background?: string;
}

/** Shared board geometry — the painter and the clickable cells must agree. */
function boardMetrics(spec: BoardSpec) {
  const pad = Math.round(spec.widthPx * 0.035);
  const titleSize = Math.round(spec.heightPx * 0.075);
  let top = pad + titleSize * 1.25;
  if (spec.subtitle) top += titleSize * 0.8;
  top += pad * 0.4; // gap before the rule
  const ruleY = top;
  top += pad * 0.6;
  const columns = spec.columns ?? 1;
  const colWidth = (spec.widthPx - pad * 2 - pad * (columns - 1)) / columns;
  const rowSize = spec.rowSize ?? Math.round(titleSize * 0.62);
  const rowH = rowSize * 1.55;
  const rowsPerCol = Math.max(1, Math.floor((spec.heightPx - top - pad) / rowH));
  return { pad, titleSize, top, ruleY, columns, colWidth, rowSize, rowH, rowsPerCol };
}

/**
 * UV rectangles [u0, v0, u1, v1] for each row (null when a row overflows the
 * board) — lets a raycast hit on the mesh resolve to the row under the pointer.
 */
export function boardCellRects(spec: BoardSpec, count: number): ([number, number, number, number] | null)[] {
  const m = boardMetrics(spec);
  const rects: ([number, number, number, number] | null)[] = [];
  for (let i = 0; i < count; i++) {
    const col = Math.floor(i / m.rowsPerCol);
    if (col >= m.columns) {
      rects.push(null);
      continue;
    }
    const rx = m.pad + col * (m.colWidth + m.pad);
    const ry = m.top + (i % m.rowsPerCol) * m.rowH;
    rects.push([rx / spec.widthPx, 1 - (ry + m.rowH) / spec.heightPx, (rx + m.colWidth) / spec.widthPx, 1 - ry / spec.heightPx]);
  }
  return rects;
}

/** A list board: title + rows laid out in columns (directory, lift board, stair signs). */
export function makeBoardTexture(spec: BoardSpec): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = spec.widthPx;
  canvas.height = spec.heightPx;
  const ctx = canvas.getContext('2d')!;
  const m = boardMetrics(spec);
  const pad = m.pad;

  ctx.fillStyle = spec.background ?? NHS_BLUE;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.textBaseline = 'top';
  ctx.textAlign = 'left';

  const titleSize = m.titleSize;
  ctx.fillStyle = '#ffffff';
  ctx.font = `bold ${titleSize}px Arial`;
  ctx.fillText(truncate(ctx, spec.title, spec.widthPx - pad * 2), pad, pad);

  if (spec.subtitle) {
    ctx.font = `${Math.round(titleSize * 0.55)}px Arial`;
    ctx.globalAlpha = 0.85;
    ctx.fillText(truncate(ctx, spec.subtitle, spec.widthPx - pad * 2), pad, pad + titleSize * 1.25);
    ctx.globalAlpha = 1;
  }
  ctx.strokeStyle = 'rgba(255,255,255,0.5)';
  ctx.lineWidth = Math.max(2, spec.heightPx * 0.004);
  ctx.beginPath();
  ctx.moveTo(pad, m.ruleY);
  ctx.lineTo(spec.widthPx - pad, m.ruleY);
  ctx.stroke();

  const top = m.top;
  const columns = m.columns;
  const colWidth = m.colWidth;
  const rowSize = m.rowSize;
  const rowH = m.rowH;
  const rowsPerCol = m.rowsPerCol;

  spec.rows.forEach((row, i) => {
    const col = Math.floor(i / rowsPerCol);
    if (col >= columns) return; // overflow guarded by callers sizing the board
    const rx = pad + col * (colWidth + pad);
    const ry = top + (i % rowsPerCol) * rowH;
    let tx = rx;
    if (row.chip) {
      ctx.fillStyle = row.chip;
      ctx.fillRect(rx, ry + rowSize * 0.1, rowSize * 0.8, rowSize * 0.8);
      tx += rowSize * 1.2;
    }
    ctx.fillStyle = '#ffffff';
    ctx.font = `${row.strong ? 'bold ' : ''}${rowSize}px Arial`;
    const label = truncate(ctx, row.text, colWidth - (tx - rx));
    ctx.fillText(label, tx, ry);
    if (row.sub) {
      const used = ctx.measureText(label).width;
      ctx.font = `${Math.round(rowSize * 0.78)}px Arial`;
      ctx.globalAlpha = 0.75;
      ctx.fillText(
        truncate(ctx, `  ${row.sub}`, colWidth - (tx - rx) - used),
        tx + used,
        ry + rowSize * 0.15
      );
      ctx.globalAlpha = 1;
    }
  });

  const tex = new THREE.CanvasTexture(canvas);
  tex.anisotropy = 4;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/**
 * Lazy signage: registers sign meshes with a placeholder material and only
 * rasterises canvas textures for signs near the player (161 areas ≈ 1,100
 * signs — rendering them all up front would cost hundreds of MB of texture).
 */
interface SignEntry {
  pos: THREE.Vector3;
  mesh: THREE.Mesh;
  make: () => THREE.Texture;
  ready: boolean;
}

/** Curated Wikimedia artwork (public/art/manifest.json). */
export interface ArtEntry {
  file: string;
  subject: string;
  title: string;
  artist: string;
  licence: string;
  source: string;
}

/**
 * Load an image as a texture via a canvas copy. Direct HTMLImageElement
 * uploads stick as black on first upload in some GL environments; the
 * canvas path matches every other sign in the hospital and is reliable.
 */
export function loadImageTexture(path: string, aspect = 1.36): THREE.Texture {
  // Fixed-size canvas: resizing a canvas texture after the first GPU upload
  // is silently ignored on some GL stacks (texture storage is immutable),
  // so the canvas is allocated once and the photo cover-cropped into it.
  const canvas = document.createElement('canvas');
  canvas.width = 1088;
  canvas.height = Math.round(1088 / aspect);
  const c2 = canvas.getContext('2d')!;
  c2.fillStyle = '#3b4046'; // mount-board grey until the photo arrives
  c2.fillRect(0, 0, canvas.width, canvas.height);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  // large NPOT mipmap generation is also unreliable there — sample linearly
  tex.generateMipmaps = false;
  tex.minFilter = THREE.LinearFilter;
  const img = new Image();
  img.onload = () => {
    const s = Math.max(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight);
    const dw = img.naturalWidth * s;
    const dh = img.naturalHeight * s;
    c2.drawImage(img, (canvas.width - dw) / 2, (canvas.height - dh) / 2, dw, dh);
    tex.needsUpdate = true;
  };
  img.src = path;
  return tex;
}

export class SignManager {
  private entries: SignEntry[] = [];
  private placeholder = new THREE.MeshBasicMaterial({ color: new THREE.Color(NHS_BLUE) });

  register(mesh: THREE.Mesh, worldPos: THREE.Vector3, make: () => THREE.Texture) {
    mesh.material = this.placeholder;
    this.entries.push({ pos: worldPos.clone(), mesh, make, ready: false });
  }

  /**
   * Call sparingly (throttled) — fills nearby signs, releases far ones.
   * Rasterising a canvas costs ~1–2 ms, and the finger-plan packs hundreds of
   * signs within sight, so fills are budgeted per tick, nearest first.
   */
  update(playerPos: THREE.Vector3, fillRadius = 55, releaseRadius = 120, budget = 8) {
    const wanted: { e: SignEntry; d: number }[] = [];
    for (const e of this.entries) {
      const d = e.pos.distanceTo(playerPos);
      // beyond the release radius a sign is fog-washed and unreadable, but
      // still a draw call each — hide it (matters on the compact loop)
      e.mesh.visible = d < releaseRadius;
      if (!e.ready && d < fillRadius) {
        wanted.push({ e, d });
      } else if (e.ready && d > releaseRadius) {
        const m = e.mesh.material as THREE.MeshBasicMaterial;
        m.map?.dispose();
        m.dispose();
        e.mesh.material = this.placeholder;
        e.ready = false;
      }
    }
    wanted.sort((a, b) => a.d - b.d);
    for (const { e } of wanted.slice(0, budget)) {
      e.mesh.material = new THREE.MeshBasicMaterial({ map: e.make() });
      e.ready = true;
    }
  }

  get count() {
    return this.entries.length;
  }
  get readyCount() {
    return this.entries.filter((e) => e.ready).length;
  }
}

/** A flat sign plate mesh (metres) with lazily generated texture. */
export function makeLazySign(
  signs: SignManager,
  widthM: number,
  heightM: number,
  worldPos: THREE.Vector3,
  make: () => THREE.Texture,
  name = 'sign'
): THREE.Mesh {
  const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(widthM, heightM),
    new THREE.MeshBasicMaterial()
  );
  mesh.name = name;
  signs.register(mesh, worldPos, make);
  return mesh;
}
