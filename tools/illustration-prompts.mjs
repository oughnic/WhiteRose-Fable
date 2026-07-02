#!/usr/bin/env node
/**
 * illustration-prompts.mjs — emit one image-generation prompt per concept.
 *
 * The app displays a framed illustration beside each definition poster when
 * `public/art/illustrations/<slug>.jpg` exists and the slug is listed in
 * `public/art/illustrations/manifest.json` ([{ "slug": "care-plan" }, …]).
 * Run this script, feed the prompts to an image model, save the outputs to
 * the `file` paths, write the manifest, done — the app needs no rebuild.
 *
 * Usage: node tools/illustration-prompts.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { slug } from './lib/layout.mjs';

const world = JSON.parse(readFileSync('public/world.json', 'utf8'));

const entries = world.classes.map((c) => ({
  slug: slug(c.label),
  label: c.label,
  file: `public/art/illustrations/${slug(c.label)}.jpg`,
  prompt:
    `Flat mid-century illustration for a 1960s NHS public-information poster about ` +
    `"${c.label}"${c.description ? ` — ${c.description}` : ''}. ` +
    `Calm sage green, NHS blue (#005EB8) and muted ochre palette; simple bold geometric ` +
    `shapes with paper-print texture; no text or lettering; clean off-white background; ` +
    `square composition.`,
}));

mkdirSync('reports', { recursive: true });
writeFileSync(
  'reports/illustration-prompts.json',
  JSON.stringify(
    {
      instructions:
        'Generate one square image (≥768px) per entry and save it to `file`. Then write ' +
        'public/art/illustrations/manifest.json as a JSON array [{"slug": "<slug>"}] listing ' +
        'every generated image. The app picks them up on the next page load.',
      count: entries.length,
      entries,
    },
    null,
    2
  )
);
console.log(`${entries.length} prompts → reports/illustration-prompts.json`);
