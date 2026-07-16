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
  /** Effective 180° rotation (row flip XOR wing mirror). */
  flip: boolean;
  /** True when the area's wing lives on the north street (whole wing rotated). */
  mirror: boolean;
  /** World-z of the area group's origin (0, 17, K or K−17). */
  oz: number;
  corridorLen: number;
}

export interface LandingPlacement {
  parentId: string;
  level: number;
  y: number;
  x0: number;
  x1: number;
  stairX: number;
  /** True when the parent wing is mirrored onto the north street. */
  mirror?: boolean;
  /** z offset for gallery-zone wings (0 for street wings). */
  dz?: number;
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
  street: 'south' | 'north' | 'gallery';
}

export interface LoopPlacement {
  /** Courtyard depth between the two streets' inner walls. */
  C: number;
  /** Mirror constant: z → K−z maps the south street band onto the north. */
  K: number;
  xEnd: number;
  south: { z0: number; z1: number };
  north: { z0: number; z1: number };
  connectors: { west: [number, number]; east: [number, number] };
  /** The Reference/Resources gallery west of the Postgraduate Medical Centre. */
  gallery: { x0: number; x1: number; z0: number; z1: number; dz: number; entrance: [number, number] };
}

export interface Layout {
  areas: Record<string, AreaPlacement>;
  landings: Record<string, LandingPlacement>;
  homeChildren: Record<string, string[]>;
  nonPrimaryUp: { childId: string; parentId: string }[];
  wings: WingPlacement[];
  street: { x0: number; x1: number };
  loop: LoopPlacement;
}

export declare function computeLayout(world: unknown): Layout;
