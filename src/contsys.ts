/**
 * The ContSys URL contract — see INTEGRATION.md.
 *
 * Slugs are the persistent public identifier for a concept, matching the URLs
 * already live at contsys.org: the lowercase term with spaces as underscores,
 * keeping any real hyphens in the term itself.
 *   "care plan" → "care_plan" · "subject of care" → "subject_of_care" ·
 *   "self-care" → "self-care"
 * Mauro UUIDs bind one export only and must never be used as a link target.
 */

export const CONTSYS_ORIGIN = 'https://contsys.org';

/** The persistent slug for a concept label. */
export function conceptSlug(label: string): string {
  return label.trim().toLowerCase().replace(/\s+/g, '_');
}

/** The persistent URL of a concept's full definition in the reference. */
export function conceptUrl(label: string): string {
  return `${CONTSYS_ORIGIN}/concept/${encodeURIComponent(conceptSlug(label))}`;
}

/**
 * Matching key under which the underscore slug, the hyphen alias, and the
 * spaced label all converge (care_plan ≡ care-plan ≡ "care plan"), so deep
 * links in any of the three forms find the concept.
 */
export function conceptKey(s: string): string {
  return s.trim().toLowerCase().replace(/[_-]+/g, ' ').replace(/\s+/g, ' ');
}
