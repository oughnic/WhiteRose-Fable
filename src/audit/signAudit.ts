import * as THREE from 'three';
import type { SignManager } from '../world/signage';
import { boxesNear, describeLoggedBox, BOX_LOG_ON, type LoggedBox } from './boxRegistry';

export type SignIssueKind = 'cut' | 'blocked' | 'facing a wall' | 'overflow';

export interface SignIssue {
  sign: string;
  area: string;
  issue: SignIssueKind;
  /** The box in the way (material + its area), for cut / blocked / facing a wall. */
  by?: string;
  /** Share of the sign's face the box covers (0–1). */
  coverage?: number;
  worldPos: { x: number; y: number; z: number };
}

const EDGE_MARGIN = 0.02; // frames and supports may touch a sign's rim
const BLOCK_DEPTH = 0.15; // a box this close in front hides the face
const WALL_DEPTH = 0.3; // a box this close in front means the sign faces a wall
const IMAGE_SIGNS = /^(pic|print|illu):/; // photos load over the network: no text to overflow

const roundedPos = (v: THREE.Vector3) => ({ x: +v.x.toFixed(2), y: +v.y.toFixed(2), z: +v.z.toFixed(2) });

/**
 * Sign audit (__hospital.signAudit()): for every registered sign, is a box cutting
 * through it, standing just in front of it, or is it facing a wall a hand's width
 * away — and does its text overflow the canvas? Boxes come from the AreaKit log
 * (dev server or ?audit only).
 */
export const auditSigns = (signs: SignManager, checkText = true): SignIssue[] => {
  if (!BOX_LOG_ON) throw new Error('signAudit needs the box log: run the dev server or add ?audit');
  const issues: SignIssue[] = [];
  const normal = new THREE.Vector3();
  const centre = new THREE.Vector3();
  for (const entry of signs.all) {
    const mesh = entry.mesh;
    mesh.updateWorldMatrix(true, false);
    const geo = mesh.geometry as THREE.PlaneGeometry;
    const { width, height } = geo.parameters;
    const face = new THREE.Box3().setFromObject(mesh, true);
    normal.set(0, 0, 1).transformDirection(mesh.matrixWorld);
    mesh.getWorldPosition(centre);
    const axis = Math.abs(normal.x) > 0.99 ? 0 : Math.abs(normal.z) > 0.99 ? 2 : -1;
    const area = (mesh.parent?.name ?? '').replace(/^area:/, '');
    const report = (issue: SignIssueKind, lb?: LoggedBox, coverage?: number) =>
      issues.push({
        sign: mesh.name,
        area,
        issue,
        by: lb && describeLoggedBox(lb),
        coverage: coverage === undefined ? undefined : +coverage.toFixed(2),
        worldPos: roundedPos(centre),
      });
    if (axis >= 0) {
      const dir = normal.getComponent(axis) > 0 ? 1 : -1;
      const plane = centre.getComponent(axis);
      const ui = axis === 0 ? 2 : 0;
      const [u0, u1] = [face.min.getComponent(ui) + EDGE_MARGIN, face.max.getComponent(ui) - EDGE_MARGIN];
      const [v0, v1] = [face.min.y + EDGE_MARGIN, face.max.y - EDGE_MARGIN];
      const region = face.clone().expandByScalar(WALL_DEPTH + 0.05);
      for (const lb of boxesNear(region)) {
        const b = lb.box;
        const ou = Math.min(u1, b.max.getComponent(ui)) - Math.max(u0, b.min.getComponent(ui));
        const ov = Math.min(v1, b.max.y) - Math.max(v0, b.min.y);
        if (ou <= 0 || ov <= 0) continue;
        const coverage = (ou * ov) / (width * height);
        // the box's depth range measured in front of the face (+ = in front)
        const ends = [(b.min.getComponent(axis) - plane) * dir, (b.max.getComponent(axis) - plane) * dir];
        const near = Math.min(...ends);
        const far = Math.max(...ends);
        if (near < -0.0005 && far > 0.0005) report('cut', lb, coverage);
        else if (near >= -0.0005 && near < BLOCK_DEPTH && far > 0.0005) report('blocked', lb, coverage);
        else if (near >= BLOCK_DEPTH && near < WALL_DEPTH && coverage > 0.5) report('facing a wall', lb, coverage);
      }
    }
    if (checkText && !IMAGE_SIGNS.test(mesh.name)) {
      const tex = entry.make();
      if (tex.userData.overflow) report('overflow');
      tex.dispose();
    }
  }
  return issues;
};
