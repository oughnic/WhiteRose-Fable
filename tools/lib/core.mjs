/**
 * core.mjs — shared model→world transform used by build-world.mjs (CLI)
 * and audit-world.mjs (verification).
 *
 * Applies the definitional filter agreed in PLAN.md ("Decisions locked"):
 *   - drop `thing` and `tangible and visible entity` (structural scaffold)
 *   - drop every class whose termClause starts 3.1, EXCEPT event, role, knowledge
 *   - contract inheritance edges through dropped classes to the nearest kept ancestor
 */
import path from 'node:path';

/** Filter configuration — one place to change what is dropped or kept. */
export const CONFIG = {
  dropLabels: ['thing', 'tangible and visible entity'],
  dropClausePrefix: '3.1',
  keepDespiteClause: ['event', 'role', 'knowledge'],
  /** Kept root classes grouped into a named annex instead of forming their own wings. */
  annexes: {
    resources: { label: 'Resources annex', members: ['care resource', 'care funds'] },
    reference: { label: 'Reference collection', members: [] }, // clause 3.1 — membership by clause
  },
  /** Placeholder clause used on scaffold-layer classes: show wing name, not a room number. */
  placeholderClause: '9.9.9',
};

/**
 * The publication models DOLCE parentage as metadata tags on top-level
 * classes (ontology.type :: ontologyId) rather than as classes; wings group
 * by tag, walked up the ORIGINAL parent chain where a root is untagged.
 */
const DOLCE_WINGS = {
  'dolce=Event': ['event', 'event'],
  'dolce=State': ['state', 'state'],
  'dolce=Process': ['process', 'process'],
  'dolce=MentalObject': ['mental-object', 'mental object'],
  'dolce=TimeInterval': ['time-interval', 'time interval'],
  'dolce=PhysicalObject': ['physical-object', 'physical object'],
  'dul=Role': ['role', 'role'],
};

const ISO_NS = 'directives.org.iso';
const XMI_NS = 'uk.ac.ox.softeng.maurodatamapper.xmi';

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const cleanLabel = (s) => s.replace(/ \(\d+\)$/, '');
const splitTerms = (v) => v.split(/[;\n]/).map((t) => t.trim()).filter(Boolean);

/** Transform a Mauro export into { world, report, summary, warnings, errors }. */
export function buildWorld(raw, sourcePath) {
  const model = raw.model;
  const classes = model.classes ?? [];
  const byId = new Map(classes.map((c) => [c.id, c]));
  const dataTypes = new Map((model.dataTypes ?? []).map((dt) => [dt.id, dt]));

  const isoEntries = (c) => (c.metadata ?? []).filter((e) => e.namespace === ISO_NS);
  const isoValue = (c, key) => isoEntries(c).find((e) => e.key === key)?.value ?? null;
  const clauseOf = (c) => isoValue(c, 'termClause');

  const warnings = [];
  const errors = [];

  // -------------------------------------------------------------- drop rule
  // Scaffold classes are dropped outright. Clause 3.1 classes are KEPT as the
  // Reference collection (off the Postgraduate Medical Centre) but stay OUT of
  // the main hospital's inheritance: main classes contract through them as if
  // dropped, and 3.1 classes keep only their own intra-3.1 hierarchy.
  const dropReason = new Map(); // id -> reason string
  const defIds = new Set(); // clause 3.1 — the Reference collection
  for (const c of classes) {
    const clause = clauseOf(c);
    if (CONFIG.dropLabels.includes(c.label)) {
      dropReason.set(c.id, 'structural scaffold');
    } else if (
      clause?.startsWith(CONFIG.dropClausePrefix) &&
      !CONFIG.keepDespiteClause.includes(c.label)
    ) {
      defIds.add(c.id);
    }
  }
  const isDropped = (id) => dropReason.has(id);
  const isDef = (id) => defIds.has(id);

  // -------------------------------------------------------------- contraction
  const ancestorMemo = new Map();
  function keptAncestors(id, stack = new Set()) {
    if (ancestorMemo.has(id)) return ancestorMemo.get(id);
    if (stack.has(id)) {
      warnings.push(`extends cycle detected at "${byId.get(id)?.label}" — treated as root`);
      return [];
    }
    stack.add(id);
    const out = [];
    for (const pid of byId.get(id)?.extendsIds ?? []) {
      if (!byId.has(pid)) {
        errors.push(`dangling extendsId ${pid} on "${byId.get(id)?.label}"`);
        continue;
      }
      for (const a of isDropped(pid) || isDef(pid) ? keptAncestors(pid, stack) : [pid]) {
        if (!out.includes(a)) out.push(a);
      }
    }
    stack.delete(id);
    ancestorMemo.set(id, out);
    return out;
  }

  const kept = classes.filter((c) => !isDropped(c.id));
  const supers = new Map(
    kept.map((c) => [
      c.id,
      isDef(c.id)
        ? (c.extendsIds ?? []).filter((pid) => byId.has(pid) && isDef(pid)) // 3.1 hierarchy stays within 3.1
        : keptAncestors(c.id),
    ])
  );
  const subs = new Map(kept.map((c) => [c.id, []]));
  for (const c of kept) for (const p of supers.get(c.id)) subs.get(p)?.push(c.id);

  const contractions = [];
  for (const c of kept) {
    if (isDef(c.id)) continue; // the 3.1 hierarchy is preserved, not contracted
    for (const pid of c.extendsIds ?? []) {
      if (isDropped(pid) || isDef(pid)) {
        const resolved = keptAncestors(pid).map((a) => byId.get(a).label);
        contractions.push(
          `${c.label}: ${byId.get(pid).label} ⇒ ${resolved.length ? resolved.join(', ') : '(none — becomes a root)'}`
        );
      }
    }
  }

  // -------------------------------------------------------------- associations
  const lostDoors = [];
  const outByClass = new Map(kept.map((c) => [c.id, []]));
  const inByClass = new Map(kept.map((c) => [c.id, []]));
  const selfByClass = new Map(kept.map((c) => [c.id, []]));

  for (const c of classes) {
    for (const e of c.dataElements ?? []) {
      const dt = dataTypes.get(e.dataTypeId);
      if (!dt || dt.domainType !== 'ReferenceType') {
        warnings.push(`element "${e.label}" on "${c.label}" has non-reference type — skipped`);
        continue;
      }
      const targetId = dt.referenceClassId;
      if (!byId.has(targetId)) {
        errors.push(`dangling referenceClassId on element "${e.label}" of "${c.label}"`);
        continue;
      }
      const target = byId.get(targetId);
      if (isDropped(c.id) || isDropped(targetId)) {
        const why = isDropped(c.id) ? `source dropped (${c.label})` : `target dropped (${target.label})`;
        lostDoors.push(`${c.label} —[${cleanLabel(e.label)}]→ ${target.label}  (${why})`);
        continue;
      }
      const xmi = (e.metadata ?? []).filter((m) => m.namespace === XMI_NS);
      const door = {
        elementId: e.id,
        label: cleanLabel(e.label),
        min: e.minMultiplicity ?? null,
        max: e.maxMultiplicity ?? null,
        oppMin: xmi.find((m) => m.key === 'oppositeMinMultiplicity')?.value ?? null,
        oppMax: xmi.find((m) => m.key === 'oppositeMaxMultiplicity')?.value ?? null,
      };
      if (targetId === c.id) {
        selfByClass.get(c.id).push({ ...door });
      } else {
        outByClass.get(c.id).push({ ...door, targetId });
        inByClass.get(targetId).push({ ...door, sourceId: c.id });
      }
    }
  }

  // -------------------------------------------------------------- notes & examples
  // The export carries examples under two key forms: legacy `example N` (with a
  // space) and revised `exampleN` (no space — better capitalisation, extra
  // entries, updated wording). Where a class has both, the unspaced set wins.
  const exampleQuirks = [];
  function notesAndExamples(c) {
    const notes = [];
    const examples = [];
    for (const { key, value } of isoEntries(c)) {
      let m;
      if ((m = key.match(/^note ?(\d+)$/i))) notes.push({ n: Number(m[1]), key, text: value });
      else if (key === 'noteToEntry') notes.push({ n: 1000, key, text: value });
      else if ((m = key.match(/^example ?(\d+)$/i)))
        examples.push({ n: Number(m[1]), key, spaced: / /.test(key), text: value });
    }
    notes.sort((a, b) => a.n - b.n);
    let chosen = examples;
    const hasUnspaced = examples.some((e) => !e.spaced);
    const hasSpaced = examples.some((e) => e.spaced);
    if (hasUnspaced && hasSpaced) {
      chosen = examples.filter((e) => !e.spaced);
      exampleQuirks.push(
        `${c.label}: legacy "example N" superseded by "exampleN" (kept ${chosen.length}, dropped ${examples.length - chosen.length})`
      );
    }
    chosen.sort((a, b) => a.n - b.n);
    return {
      notes: notes.map(({ key, text }) => ({ key, text })),
      examples: chosen.map(({ key, text }) => ({ key, text })),
    };
  }

  // -------------------------------------------------------------- wings & floors
  const annexOfRoot = new Map();
  for (const [key, a] of Object.entries(CONFIG.annexes))
    for (const m of a.members) annexOfRoot.set(m, key);

  // DOLCE category of a class: its own ontology tag, or the nearest tagged
  // class up the ORIGINAL (pre-contraction) parent chain.
  const tagOf = (c) =>
    (c.metadata ?? []).find((m) => m.namespace === 'ontology.type' && m.key === 'ontologyId')?.value ?? null;
  const dolceMemo = new Map();
  function dolceOf(id, stack = new Set()) {
    if (dolceMemo.has(id)) return dolceMemo.get(id);
    if (stack.has(id)) return null;
    stack.add(id);
    const c = byId.get(id);
    let t = tagOf(c);
    if (!t || !DOLCE_WINGS[t]) {
      t = null;
      for (const pid of c?.extendsIds ?? []) {
        const pt = byId.has(pid) ? dolceOf(pid, stack) : null;
        if (pt) {
          t = pt;
          break;
        }
      }
    }
    stack.delete(id);
    dolceMemo.set(id, t);
    return t;
  }

  const wingMemo = new Map();
  const floorMemo = new Map();
  function placement(id) {
    if (wingMemo.has(id)) return { wing: wingMemo.get(id), floor: floorMemo.get(id) };
    const parents = supers.get(id);
    let res;
    if (isDef(id) && !parents.length) {
      res = { wing: 'reference', floor: 0 };
    } else if (!parents.length) {
      const label = byId.get(id).label;
      const dolce = dolceOf(id);
      res = { wing: annexOfRoot.get(label) ?? (dolce ? DOLCE_WINGS[dolce][0] : slug(label)), floor: 0 };
    } else {
      const p = placement(parents[0]); // primary parent chain
      res = { wing: p.wing, floor: p.floor + 1 };
    }
    wingMemo.set(id, res.wing);
    floorMemo.set(id, res.floor);
    return res;
  }
  kept.forEach((c) => placement(c.id));

  // Every street root should resolve to a DOLCE category; anything that
  // doesn't (and isn't an annex member) deserves a warning.
  const roots = kept.filter((c) => supers.get(c.id).length === 0);
  for (const r of roots) {
    if (isDef(r.id) || annexOfRoot.has(r.label)) continue;
    if (!dolceOf(r.id)) {
      const orig = (r.extendsIds ?? []).map((p) => byId.get(p)?.label).join(', ') || '(none)';
      warnings.push(`wing root "${r.label}" has no DOLCE tag in its ancestry (original parents: ${orig})`);
    }
  }

  // -------------------------------------------------------------- assemble world
  const keptSorted = [...kept].sort((a, b) => a.label.localeCompare(b.label));
  const worldClasses = keptSorted.map((c) => {
    const { notes, examples } = notesAndExamples(c);
    const clause = clauseOf(c);
    const alsoKnownAs = [
      ...(isoValue(c, 'admittedTerms') ? splitTerms(isoValue(c, 'admittedTerms')) : []),
      ...(isoValue(c, 'synonym') ? splitTerms(isoValue(c, 'synonym')) : []),
    ];
    const deprecated = isoValue(c, 'deprecatedTerms') ? splitTerms(isoValue(c, 'deprecatedTerms')) : [];
    if (!c.description?.trim()) warnings.push(`missing description: "${c.label}"`);
    if (!clause) warnings.push(`missing termClause: "${c.label}"`);
    return {
      id: c.id,
      label: c.label,
      plural: isoValue(c, 'plural'),
      alsoKnownAs,
      deprecated,
      description: c.description?.trim() || null,
      source: isoValue(c, 'source'),
      termClause: clause,
      roomNumber: clause && clause !== CONFIG.placeholderClause ? clause : null,
      notes,
      examples,
      supers: supers.get(c.id),
      subs: subs.get(c.id),
      out: outByClass.get(c.id),
      in: inByClass.get(c.id),
      self: selfByClass.get(c.id),
      wing: wingMemo.get(c.id),
      floor: floorMemo.get(c.id),
    };
  });

  const wingKeys = [...new Set(worldClasses.map((c) => c.wing))].sort();
  const dolceLabel = new Map(Object.values(DOLCE_WINGS).map(([key, label]) => [key, label]));
  const wings = wingKeys.map((key) => {
    const members = worldClasses.filter((c) => c.wing === key);
    const rootIds = roots.filter((r) => wingMemo.get(r.id) === key).map((r) => r.id);
    const annex = Object.hasOwn(CONFIG.annexes, key);
    return {
      key,
      label: annex ? CONFIG.annexes[key].label : dolceLabel.get(key) ?? byId.get(rootIds[0])?.label ?? key,
      annex,
      /** Annexes hang off the Postgraduate Medical Centre; wings off the street loop. */
      zone: annex ? 'gallery' : 'street',
      rootIds,
      classCount: members.length,
    };
  });

  const maxDepth = Math.max(...worldClasses.map((c) => c.floor));
  const multiParent = worldClasses.filter((c) => c.supers.length > 1);
  const doorCount = worldClasses.reduce((n, c) => n + c.out.length + c.self.length, 0);

  const world = {
    meta: {
      label: model.label,
      description: model.description,
      documentationVersion: model.documentationVersion,
      author: model.author,
      organisation: model.organisation,
      exportedAtUtc: raw.exportedAtUtc,
      uri: (model.metadata ?? []).find((m) => m.key === 'uri')?.value ?? null,
      generatedAt: new Date().toISOString(),
      sourceFile: path.basename(sourcePath),
      pipelineVersion: '0.1.0',
    },
    wings,
    classes: worldClasses,
  };

  // -------------------------------------------------------------- report
  const droppedRows = classes
    .filter((c) => isDropped(c.id))
    .sort((a, b) => a.label.localeCompare(b.label))
    .map((c) => `| ${c.label} | ${clauseOf(c) ?? '—'} | ${dropReason.get(c.id)} |`);

  const wingRows = wings.map(
    (w) =>
      `| ${w.label} | \`${w.key}\` | ${w.annex ? 'annex' : 'wing'} | ${w.classCount} | ${w.rootIds.map((id) => byId.get(id).label).join(', ')} |`
  );

  const report = `# World build report

Source: \`${path.basename(sourcePath)}\` — ${model.label} v${model.documentationVersion}, exported ${raw.exportedAtUtc}
Generated: ${world.meta.generatedAt} (pipeline ${world.meta.pipelineVersion})

## Totals
| | |
|---|---|
| Raw dataClasses | ${classes.length} |
| Kept (areas) | **${worldClasses.length}** |
| Dropped | ${dropReason.size} |
| Doors kept (associations incl. self) | **${doorCount}** |
| Doors lost with dropped classes | ${lostDoors.length} |
| Self-references | ${worldClasses.reduce((n, c) => n + c.self.length, 0)} |
| Wings | ${wings.filter((w) => !w.annex).length} + ${wings.filter((w) => w.annex).length} annex |
| Multi-parent classes (after contraction) | ${multiParent.length} |
| Max inheritance depth (after contraction) | ${maxDepth} |

## Wings
| Label | Key | Kind | Classes | Roots |
|---|---|---|---|---|
${wingRows.join('\n')}

## Dropped classes (${dropReason.size})
| Class | Clause | Reason |
|---|---|---|
${droppedRows.join('\n')}

## Doors lost (${lostDoors.length})
${lostDoors.map((d) => `- ${d}`).join('\n') || '- none'}

## Inheritance contractions (${contractions.length})
${contractions.map((d) => `- ${d}`).join('\n') || '- none'}

## Example-key quirks (${exampleQuirks.length})
${exampleQuirks.map((d) => `- ${d}`).join('\n') || '- none'}

## Warnings (${warnings.length})
${warnings.map((d) => `- ${d}`).join('\n') || '- none'}

## Errors (${errors.length})
${errors.map((d) => `- ${d}`).join('\n') || '- none'}
`;

  const summary =
    `world.json: ${worldClasses.length} areas, ${doorCount} doors, ` +
    `${wings.length} wings/annexes, max depth ${maxDepth}` +
    `\ndropped ${dropReason.size} classes, lost ${lostDoors.length} doors, ` +
    `${warnings.length} warnings, ${errors.length} errors`;

  return { world, report, summary, warnings, errors };
}
