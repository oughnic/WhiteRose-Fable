/**
 * The minimap as a blueprint (the sketchy-drawing look's map, or pick it in the Minimap
 * folder): white line-work on blueprint blue, a metre grid that travels with the plan,
 * rooms drawn as outlines rather than wing-coloured fills, the storey above dashed.
 */

export interface PlanRect {
  x: number;
  z: number;
  w: number;
  d: number;
  color: string;
  areaId: string;
}

export const BLUEPRINT_BLUE = '#1b4f8f';
export const BLUEPRINT_INK = '#e8f1ff';
export const BLUEPRINT_FONT = '"Courier New", Courier, monospace';

/** A world-aligned grid around (cx, cz): fine every metre, stronger every 5 m. Call in world units. */
const drawBlueprintGrid = (ctx: CanvasRenderingContext2D, cx: number, cz: number, reach: number, ppm: number) => {
  const x0 = Math.floor(cx - reach);
  const z0 = Math.floor(cz - reach);
  const fine = ppm >= 3; // a metre grid finer than 3 px is just noise
  for (let i = 0; i <= reach * 2; i++) {
    const major = (x0 + i) % 5 === 0;
    if (!major && !fine) continue;
    ctx.strokeStyle = major ? 'rgba(232, 241, 255, 0.16)' : 'rgba(232, 241, 255, 0.07)';
    ctx.beginPath();
    ctx.moveTo(x0 + i, z0);
    ctx.lineTo(x0 + i, z0 + reach * 2);
    ctx.stroke();
  }
  for (let i = 0; i <= reach * 2; i++) {
    const major = (z0 + i) % 5 === 0;
    if (!major && !fine) continue;
    ctx.strokeStyle = major ? 'rgba(232, 241, 255, 0.16)' : 'rgba(232, 241, 255, 0.07)';
    ctx.beginPath();
    ctx.moveTo(x0, z0 + i);
    ctx.lineTo(x0 + reach * 2, z0 + i);
    ctx.stroke();
  }
};

export interface BlueprintPlanArgs {
  ctx: CanvasRenderingContext2D;
  here: PlanRect[];
  /** The storey above (ghosted), or null on the ground floor. */
  above: PlanRect[] | null;
  ghostAbove: number;
  currentAreaId: string;
  feetX: number;
  feetZ: number;
  /** Map scale, pixels per metre. */
  ppm: number;
  /** Metres from the centre to the corner of the map (the grid must reach it at any turn). */
  reach: number;
}

/** The plan in blueprint style. The context is already in world units (metres). */
export const drawBlueprintPlan = ({ ctx, here, above, ghostAbove, currentAreaId, feetX, feetZ, ppm, reach }: BlueprintPlanArgs) => {
  ctx.lineWidth = 1 / ppm;
  drawBlueprintGrid(ctx, feetX, feetZ, reach, ppm);
  if (above && ghostAbove > 0) {
    ctx.setLineDash([3 / ppm, 3 / ppm]);
    ctx.strokeStyle = `rgba(232, 241, 255, ${ghostAbove * 1.5})`;
    for (const r of above) ctx.strokeRect(r.x, r.z, r.w, r.d);
    ctx.setLineDash([]);
  }
  // rooms: a faint wash and an ink outline; where you are, a stronger wash and a heavier line
  for (const r of here) {
    const current = r.areaId === currentAreaId;
    ctx.fillStyle = current ? 'rgba(232, 241, 255, 0.28)' : 'rgba(232, 241, 255, 0.06)';
    ctx.fillRect(r.x, r.z, r.w, r.d);
  }
  ctx.strokeStyle = 'rgba(232, 241, 255, 0.75)';
  ctx.lineWidth = 1 / ppm;
  for (const r of here) if (r.areaId !== currentAreaId) ctx.strokeRect(r.x, r.z, r.w, r.d);
  ctx.strokeStyle = BLUEPRINT_INK;
  ctx.lineWidth = 2 / ppm;
  for (const r of here) if (r.areaId === currentAreaId) ctx.strokeRect(r.x, r.z, r.w, r.d);
};
