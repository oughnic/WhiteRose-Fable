/** Shapes produced by tools/build-world.mjs (world.json). */

export interface DoorBase {
  elementId: string;
  label: string;
  min: number | null;
  max: number | null;
  oppMin: string | null;
  oppMax: string | null;
}

export interface DoorOut extends DoorBase {
  targetId: string;
}

export interface DoorIn extends DoorBase {
  sourceId: string;
}

export interface Annotation {
  key: string;
  text: string;
}

export interface WorldClass {
  id: string;
  label: string;
  plural: string | null;
  alsoKnownAs: string[];
  deprecated: string[];
  description: string | null;
  source: string | null;
  termClause: string | null;
  roomNumber: string | null;
  notes: Annotation[];
  examples: Annotation[];
  supers: string[];
  subs: string[];
  out: DoorOut[];
  in: DoorIn[];
  self: DoorBase[];
  wing: string;
  floor: number;
}

export interface Wing {
  key: string;
  label: string;
  annex: boolean;
  /** Annexes hang off the Postgraduate Medical Centre; wings off the street loop. */
  zone: 'street' | 'gallery';
  rootIds: string[];
  classCount: number;
}

export interface WorldMeta {
  label: string;
  description: string;
  documentationVersion: string;
  author: string;
  organisation: string;
  exportedAtUtc: string;
  uri: string | null;
  generatedAt: string;
  sourceFile: string;
  pipelineVersion: string;
}

export interface World {
  meta: WorldMeta;
  wings: Wing[];
  classes: WorldClass[];
}
