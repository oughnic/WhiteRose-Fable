#!/usr/bin/env node
/**
 * build-world.mjs — ContSys Hospital data pipeline (CLI).
 *
 * Mauro Data Mapper export → public/world.json + reports/world-report.md
 * The transform itself lives in tools/lib/core.mjs (shared with the audit).
 *
 * Usage: node tools/build-world.mjs [path-to-master-json]
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { buildWorld } from './lib/core.mjs';

const SOURCE = process.argv[2] ?? 'data/A-system-of-concepts-for-the-continuity-of-care.json';
const OUT_WORLD = 'public/world.json';
const OUT_REPORT = 'reports/world-report.md';

const raw = JSON.parse(readFileSync(SOURCE, 'utf8'));
const { world, report, summary, errors } = buildWorld(raw, SOURCE);

mkdirSync(path.dirname(OUT_WORLD), { recursive: true });
writeFileSync(OUT_WORLD, JSON.stringify(world));
mkdirSync(path.dirname(OUT_REPORT), { recursive: true });
writeFileSync(OUT_REPORT, report);

console.log(`${summary}\n→ ${OUT_WORLD}\n→ ${OUT_REPORT}`);
if (errors.length) process.exitCode = 1;
