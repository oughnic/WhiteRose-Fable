/** Type declarations for layout.mjs (imported by the TypeScript app). */

export declare const G: {
  CORRIDOR_W: number;
  ROOM_H: number;
  STOREY: number;
  DOOR_W: number;
  DOOR_H: number;
  DOOR_SPACING: number;
  ENTRY: number;
  END_ZONE: number;
  NOTICE_SPACING: number;
  LOBBY_W: number;
  LOBBY_D: number;
  LANDING_Z0: number;
  LANDING_Z1: number;
  STREET_Z0: number;
  STREET_Z1: number;
  STREET_H: number;
  STRIP: number;
  STAIR_SLOT: number;
  WING_GAP: number;
  PIT_X0: number;
  PIT_X1: number;
  PIT_Z0: number;
  PIT_Z1: number;
};

export declare const slug: (s: string) => string;

export declare const corridorLen: (
  nOut: number,
  nIn: number,
  nNotes?: number,
  nExamples?: number
) => number;

export interface AreaPlacement {
  x: number;
  level: number;
  y: number;
  /** North-row areas are rotated 180°: lobby z ∈ [10,17], corridor beyond. */
  flip: boolean;
  corridorLen: number;
}

export interface LandingPlacement {
  parentId: string;
  level: number;
  y: number;
  x0: number;
  x1: number;
  stairX: number;
  homeChildIds: string[];
  southIds: string[];
  northIds: string[];
  portalChildIds: string[];
}

export interface WingPlacement {
  key: string;
  x0: number;
  x1: number;
  rootIds: string[];
}

export interface Layout {
  areas: Record<string, AreaPlacement>;
  landings: Record<string, LandingPlacement>;
  homeChildren: Record<string, string[]>;
  nonPrimaryUp: { childId: string; parentId: string }[];
  wings: WingPlacement[];
  street: { x0: number; x1: number };
}

export declare function computeLayout(world: unknown): Layout;
