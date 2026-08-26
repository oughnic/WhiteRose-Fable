/**
 * The join between this walkthrough and the reference publication at contsys.org.
 *
 * Both address the same 172 concepts, and the address is the slug — not a UUID, which binds one
 * model export only. contsys.org publishes `/concept/care_plan`, so a link in from a concept
 * page arrives here as `?concept=care_plan` while the world data carries the term itself,
 * "care plan". Matching on the raw label misses every multi-word concept, which is 146 of them.
 *
 * So compare on a normalised key rather than on either form directly, and be generous about the
 * separator: someone typing a concept into the address bar should not have to know whether the
 * publication chose underscores or hyphens.
 */

/**
 * The canonical published slug: lower case, spaces become underscores, and a hyphen that is part
 * of the term survives — `care plan` is `care_plan`, but `self-care` stays `self-care`.
 * This is the form contsys.org serves, so it is the form to link *out* with.
 */
export function conceptSlug(label: string): string {
  const out: string[] = [];
  let pendingSeparator = false;

  for (const ch of label.trim().toLowerCase()) {
    if (/[a-z0-9]/.test(ch)) {
      if (pendingSeparator && out.length) out.push('_');
      pendingSeparator = false;
      out.push(ch);
    } else if (/\s/.test(ch) || ch === '_') {
      pendingSeparator = true;
    } else if (ch === '-') {
      if (pendingSeparator && out.length) out.push('_');
      pendingSeparator = false;
      if (out.length && out[out.length - 1] !== '-') out.push('-');
    }
    // other punctuation is dropped
  }

  return out.join('').replace(/^[-_]+|[-_]+$/g, '');
}

/**
 * A comparison key that ignores which separator was used. `care plan`, `care_plan`, `care-plan`
 * and `Care Plan` all reduce to the same thing, so a link or a typed address finds the concept
 * whichever form it arrived in. Only for matching — never for building a URL.
 */
export function conceptKey(label: string): string {
  return conceptSlug(label).replace(/_/g, '-');
}

/** Where this concept is documented. */
export function conceptUrl(label: string): string {
  return `https://contsys.org/concept/${conceptSlug(label)}`;
}
