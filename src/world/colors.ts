/** Wing wayfinding colours (NHS identity palette, calm tones). */
export const WING_COLORS: Record<string, string> = {
  event: '#41b6e6',
  'mental-object': '#78be20',
  state: '#ed8b00',
  stative: '#ed8b00',
  process: '#ae2573',
  'time-interval': '#8a1538',
  role: '#00a499',
  'physical-object': '#ffb81c',
  resources: '#7c2855',
  reference: '#005eb8',
};

export const wingColor = (key: string): string => WING_COLORS[key] ?? '#425563';
