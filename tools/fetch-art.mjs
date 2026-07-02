#!/usr/bin/env node
/**
 * fetch-art.mjs — curate CC-licensed Yorkshire photography from Wikimedia
 * Commons for the hospital's picture frames.
 *
 * For each subject: search Commons, verify the licence from extmetadata
 * (CC BY / CC BY-SA / CC0 / Public domain only), then download a 1280 px
 * rendition to public/art/ and record full attribution in
 * public/art/manifest.json (title, artist, licence, source URL).
 *
 * Usage: node tools/fetch-art.mjs
 */
import { writeFileSync, mkdirSync } from 'node:fs';

const API = 'https://commons.wikimedia.org/w/api.php';
const UA = 'ContSysHospital/0.1 (ISO 13940 concept-model explorer; art curation script)';
const OUT_DIR = 'public/art';
const OK_LICENCE = /^(CC BY(-SA)?( \d\.\d)?|CC0|Public domain)/i;

const SUBJECTS = [
  'Malham Cove',
  'Gordale Scar',
  'Ribblehead Viaduct',
  'Swaledale',
  'Wensleydale',
  'Aysgarth Falls',
  'Ingleborough',
  'Pen-y-ghent',
  'Brimham Rocks',
  'Bolton Abbey',
  'Upper Wharfedale',
  'Hardraw Force',
  'Kettlewell',
  'Runswick Bay',
  'Roseberry Topping',
  'Yorkshire Dales dry stone walls',
];

const strip = (html) => (html ?? '').replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** Polite fetch: paced, and patient with 429 rate limits. */
async function politeFetch(url) {
  for (let attempt = 0; attempt < 4; attempt++) {
    const res = await fetch(url, { headers: { 'User-Agent': UA } });
    if (res.status !== 429) return res;
    const wait = 15000 * (attempt + 1);
    console.warn(`      rate limited — waiting ${wait / 1000}s`);
    await sleep(wait);
  }
  return fetch(url, { headers: { 'User-Agent': UA } });
}

async function api(params) {
  const url = `${API}?${new URLSearchParams({ format: 'json', ...params })}`;
  const res = await politeFetch(url);
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.json();
}

async function curate(subject) {
  const data = await api({
    action: 'query',
    generator: 'search',
    gsrsearch: `filetype:bitmap ${subject}`,
    gsrnamespace: '6',
    gsrlimit: '8',
    prop: 'imageinfo',
    iiprop: 'url|extmetadata|size',
    iiurlwidth: '1280',
  });
  const pages = Object.values(data.query?.pages ?? {}).sort((a, b) => a.index - b.index);
  for (const p of pages) {
    const ii = p.imageinfo?.[0];
    const md = ii?.extmetadata;
    if (!ii || !md) continue;
    const licence = strip(md.LicenseShortName?.value);
    if (!OK_LICENCE.test(licence)) continue;
    if ((ii.width ?? 0) < 1000 || ii.width < ii.height) continue; // landscape only
    return {
      subject,
      title: strip(md.ObjectName?.value) || p.title.replace(/^File:|\.\w+$/g, ''),
      artist: strip(md.Artist?.value) || 'unknown',
      licence,
      source: ii.descriptionurl,
      thumbUrl: ii.thumburl,
    };
  }
  return null;
}

mkdirSync(OUT_DIR, { recursive: true });
const manifest = [];
for (const subject of SUBJECTS) {
  try {
    const pick = await curate(subject);
    if (!pick) {
      console.warn(`skip  ${subject} — no freely licensed landscape candidate`);
      continue;
    }
    const res = await politeFetch(pick.thumbUrl);
    if (!res.ok) {
      console.warn(`skip  ${subject} — download failed (${res.status})`);
      continue;
    }
    const file = `art${String(manifest.length + 1).padStart(2, '0')}.jpg`;
    writeFileSync(`${OUT_DIR}/${file}`, Buffer.from(await res.arrayBuffer()));
    manifest.push({ file, ...pick, thumbUrl: undefined });
    console.log(`ok    ${subject} → ${file} · ${pick.licence} · ${pick.artist.slice(0, 40)}`);
  } catch (err) {
    console.warn(`skip  ${subject} — ${err.message}`);
  }
  await sleep(3000); // pace ourselves — Commons rate-limits bursts
}

writeFileSync(`${OUT_DIR}/manifest.json`, JSON.stringify(manifest, null, 2));
console.log(`\n${manifest.length}/${SUBJECTS.length} artworks curated → ${OUT_DIR}/manifest.json`);
process.exitCode = manifest.length ? 0 : 1;
