/**
 * The look post-process, one full-screen pass over the rendered colour and depth.
 *
 * Edges come from depth alone — no second scene render:
 * - silhouettes: across any flat surface 1/depth runs linearly in screen space, so a kink in
 *   it (its second difference, relative to its value) is a jump onto something else. Long
 *   grazing floors stay clean, which a plain depth difference would not;
 * - creases: surface normals rebuilt from the depth of neighbouring pixels (taking, on each
 *   axis, the neighbour on the same surface), compared a line-width apart.
 * Lines fade out with the scene's fog.
 *
 * Toon (sketchMode 0): the colour, with the lines drawn over it.
 *
 * Sketch (sketchMode 1): "sketchy drawings" (Nienhaus & Döllner, GPU Gems 2 ch. 15). The
 * flat colour (shade map) and the lines (edge map) are each read through a noise offset —
 * the uncertainty, a fraction of the screen width — turned by its own 2×2 matrix — the matrices point opposite ways, so colour and line never
 * quite register, like a quick drawing coloured in. The noise is looked up at each pixel's
 * world position (rebuilt from depth) so it sticks to the walls instead of sliding over them
 * as you turn (their fix for the "shower door" effect); extra line copies with their own
 * noise give the repeated, overdrawn strokes. A boil re-seeds the noise a few times a second.
 */

export const LOOK_VERTEX_SHADER = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

export const LOOK_FRAGMENT_SHADER = /* glsl */ `
uniform sampler2D tColor;
uniform sampler2D tDepth;
uniform vec2 resolution;
uniform mat4 projectionInverse;
uniform mat4 cameraWorld;
uniform float cameraFar;
uniform float fogNear;
uniform float fogFar;
uniform int sketchMode;
uniform float lineWidth;
uniform float depthSensitivity;
uniform float creaseSensitivity;
uniform vec3 lineColor;
uniform float lineOpacity;
uniform vec3 paperColor;
uniform float colourAmount;
uniform float paperGrain;
uniform float brightness;
uniform float uncertainty;
uniform mat2 shadeWobble;
uniform mat2 lineWobble;
uniform float noiseScale;
uniform bool stickToSurfaces;
uniform int lineCopies;
uniform float boilSeed;
varying vec2 vUv;

// Depth is read a whole pixel at a time (texelFetch). A fractional offset on the unfiltered
// depth texture snaps unevenly to one side or the other, and on grazing floors and ceilings
// that lopsidedness reads as a fold: stripes that followed the view.
ivec2 pixelAt(vec2 uv) { return ivec2(floor(uv * resolution)); }
float depthAtPx(ivec2 p) { return texelFetch(tDepth, clamp(p, ivec2(0), ivec2(resolution) - 1), 0).x; }
bool isSky(float depth) { return depth >= 0.99999; }

vec3 viewPosAtPx(ivec2 p) {
  vec2 uv = (vec2(p) + 0.5) / resolution;
  vec4 view = projectionInverse * vec4(uv * 2.0 - 1.0, depthAtPx(p) * 2.0 - 1.0, 1.0);
  return view.xyz / view.w;
}

/** Surface normal (view space) from the depth of the four pixels around p. */
vec3 normalAtPx(ivec2 p) {
  vec3 c = viewPosAtPx(p);
  vec3 l = viewPosAtPx(p - ivec2(1, 0));
  vec3 r = viewPosAtPx(p + ivec2(1, 0));
  vec3 b = viewPosAtPx(p - ivec2(0, 1));
  vec3 t = viewPosAtPx(p + ivec2(0, 1));
  // the neighbour nearer in depth is on the same surface: across an edge, use the other side
  vec3 dx = abs(r.z - c.z) < abs(c.z - l.z) ? r - c : c - l;
  vec3 dy = abs(t.z - c.z) < abs(c.z - b.z) ? t - c : c - b;
  return normalize(cross(dx, dy));
}

float creaseWith(vec3 normal, ivec2 p) {
  if (isSky(depthAtPx(p))) return 0.0; // the silhouette test draws that one
  return 1.0 - dot(normal, normalAtPx(p));
}

float inverseDistanceAtPx(ivec2 p) { return 1.0 / max(-viewPosAtPx(p).z, 1e-4); }

/** 0 = no line, 1 = full line at uv. Neighbours are a whole number of pixels away, on both sides. */
float edgeAt(vec2 uv) {
  ivec2 p = pixelAt(uv);
  float depth = depthAtPx(p);
  int width = max(1, int(lineWidth + 0.5));
  ivec2 sx = ivec2(width, 0);
  ivec2 sy = ivec2(0, width);
  float zc = isSky(depth) ? cameraFar : -viewPosAtPx(p).z;
  float ic = 1.0 / zc;
  float il = inverseDistanceAtPx(p - sx);
  float ir = inverseDistanceAtPx(p + sx);
  float ib = inverseDistanceAtPx(p - sy);
  float it = inverseDistanceAtPx(p + sy);
  float bend = (abs(il + ir - 2.0 * ic) + abs(ib + it - 2.0 * ic)) / ic;
  float silhouette = smoothstep(depthSensitivity, depthSensitivity * 2.0, bend);
  float crease = 0.0;
  if (!isSky(depth)) {
    vec3 n = normalAtPx(p);
    float fold = max(max(creaseWith(n, p - sx), creaseWith(n, p + sx)), max(creaseWith(n, p - sy), creaseWith(n, p + sy)));
    crease = smoothstep(creaseSensitivity, creaseSensitivity * 1.5, fold);
  }
  return max(silhouette, crease) * (1.0 - smoothstep(fogNear, fogFar, zc));
}

float hash13(vec3 p) {
  p = fract(p * 0.1031);
  p += dot(p, p.zyx + 31.32);
  return fract((p.x + p.y) * p.z);
}

/** Smooth value noise, 0..1. */
float valueNoise(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(mix(hash13(i), hash13(i + vec3(1, 0, 0)), f.x), mix(hash13(i + vec3(0, 1, 0)), hash13(i + vec3(1, 1, 0)), f.x), f.y),
    mix(mix(hash13(i + vec3(0, 0, 1)), hash13(i + vec3(1, 0, 1)), f.x), mix(hash13(i + vec3(0, 1, 1)), hash13(i + vec3(1, 1, 1)), f.x), f.y),
    f.z
  );
}

float turbulence(vec3 p) { return valueNoise(p) * 0.6 + valueNoise(p * 2.03) * 0.3 + valueNoise(p * 4.07) * 0.1; }

/** The uncertainty at uv: a -1..1 offset, from noise at the pixel's world position (or on screen). */
vec2 wobbleAt(vec2 uv, float seed) {
  ivec2 px = pixelAt(uv);
  vec3 p = stickToSurfaces && !isSky(depthAtPx(px))
    ? (cameraWorld * vec4(viewPosAtPx(px), 1.0)).xyz * noiseScale
    : vec3(uv * resolution * noiseScale * 0.01, 0.0);
  p += seed * vec3(17.13, 5.71, 11.39);
  return vec2(turbulence(p), turbulence(p + vec3(31.4, 7.9, 3.3))) * 2.0 - 1.0;
}

void main() {
  // the uncertainty is a fraction of the screen width, the same distance across and down
  vec2 reach = uncertainty * vec2(1.0, resolution.x / resolution.y);
  if (sketchMode == 0) {
    vec3 colour = texture2D(tColor, vUv).rgb;
    gl_FragColor = vec4(mix(colour, lineColor, edgeAt(vUv) * lineOpacity), 1.0);
  } else {
    vec2 wobble = wobbleAt(vUv, boilSeed);
    vec3 shade = texture2D(tColor, clamp(vUv + shadeWobble * wobble * reach, 0.0, 1.0)).rgb;
    vec3 colour = mix(paperColor, shade, colourAmount) * brightness;
    float ink = 0.0;
    for (int i = 0; i < 4; i++) {
      if (i >= lineCopies) break;
      vec2 copyWobble = i == 0 ? wobble : wobbleAt(vUv, boilSeed + float(i) * 7.31);
      float stroke = edgeAt(clamp(vUv + lineWobble * copyWobble * reach, 0.0, 1.0)) * lineOpacity;
      // later copies are lighter, as a pencil going back over a line
      ink = 1.0 - (1.0 - ink) * (1.0 - stroke * (i == 0 ? 1.0 : 0.6));
    }
    colour = mix(colour, lineColor, ink);
    colour *= 1.0 - paperGrain * (hash13(vec3(gl_FragCoord.xy, 0.0)) - 0.5);
    gl_FragColor = vec4(colour, 1.0);
  }
  #include <colorspace_fragment>
}
`;
