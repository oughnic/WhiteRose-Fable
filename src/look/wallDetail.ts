import * as THREE from 'three';
import { addDebugControls } from '../debug/debugPane';
import { ACTIVE_LOOK } from './lookMode';

/**
 * Wall finish: barely-there relief on the painted walls (current look only).
 *
 * Every wall shares one flat sage material, so a long corridor reads as one repeated
 * surface. Real painted plaster is never flat: it undulates gently over a metre or two, has
 * the odd dent and filled patch, and the roller leaves a fine stipple. Those are added here
 * as tilts of the shading normal — no texture, no extra geometry — from noise sampled in
 * world space, so no two stretches of wall match and the pattern never tiles.
 *
 * The ceiling panels light the walls at a grazing angle, which is exactly what shows
 * relief; the bounce light (light probe) shows it a little too. The flat surround light
 * cannot (it is the same from every side).
 *
 * Three layers, each a wavelength (m) and a tilt (how far the normal leans, ~radians):
 * waviness (large, slow), dents and patches (hand-sized), stipple (paint texture). A layer
 * fades out as it gets smaller than a few pixels, so distant walls don't shimmer.
 */

const WALL_DETAIL_DEFAULTS = {
  /** Relief on or off (a uniform: no shader recompile). */
  enabled: true,
  wavinessScale: 2.4,
  wavinessTilt: 0.015,
  dentScale: 0.35,
  dentTilt: 0.008,
  stippleScale: 0.008,
  stippleTilt: 0.02,
};

/** Wall finish settings, bound to the debug panel (Wall finish folder). */
const wallDetail = { ...WALL_DETAIL_DEFAULTS };

/** Shared by every wall material: one change reaches them all. */
const wallDetailUniforms = {
  wallDetailScale: { value: new THREE.Vector3() },
  wallDetailTilt: { value: new THREE.Vector3() },
};

const applyWallDetail = () => {
  wallDetailUniforms.wallDetailScale.value.set(wallDetail.wavinessScale, wallDetail.dentScale, wallDetail.stippleScale);
  wallDetailUniforms.wallDetailTilt.value
    .set(wallDetail.wavinessTilt, wallDetail.dentTilt, wallDetail.stippleTilt)
    .multiplyScalar(wallDetail.enabled ? 1 : 0);
};
applyWallDetail();

const WALL_DETAIL_VERTEX_PARS = /* glsl */ `
varying vec3 vWallWorld;
`;

const WALL_DETAIL_VERTEX = /* glsl */ `
vWallWorld = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;
`;

const WALL_DETAIL_FRAGMENT_PARS = /* glsl */ `
varying vec3 vWallWorld;
uniform vec3 wallDetailScale;
uniform vec3 wallDetailTilt;

// hash without sine (Dave Hoskins): stable at large world coordinates
float wallHash( vec3 p ) {
  p = fract( p * 0.1031 );
  p += dot( p, p.zyx + 31.32 );
  return fract( ( p.x + p.y ) * p.z );
}

// gradient of 3D value noise, analytic (Inigo Quilez, "value noise derivatives")
vec3 wallNoiseGradient( vec3 x ) {
  vec3 i = floor( x );
  vec3 w = fract( x );
  vec3 u = w * w * w * ( w * ( w * 6.0 - 15.0 ) + 10.0 );
  vec3 du = 30.0 * w * w * ( w * ( w - 2.0 ) + 1.0 );
  float a = wallHash( i );
  float b = wallHash( i + vec3( 1.0, 0.0, 0.0 ) );
  float c = wallHash( i + vec3( 0.0, 1.0, 0.0 ) );
  float d = wallHash( i + vec3( 1.0, 1.0, 0.0 ) );
  float e = wallHash( i + vec3( 0.0, 0.0, 1.0 ) );
  float f = wallHash( i + vec3( 1.0, 0.0, 1.0 ) );
  float g = wallHash( i + vec3( 0.0, 1.0, 1.0 ) );
  float h = wallHash( i + vec3( 1.0, 1.0, 1.0 ) );
  float k1 = b - a;
  float k2 = c - a;
  float k3 = e - a;
  float k4 = a - b - c + d;
  float k5 = a - c - e + g;
  float k6 = a - b - e + f;
  float k7 = - a + b + c - d + e - f - g + h;
  return du * vec3(
    k1 + k4 * u.y + k6 * u.z + k7 * u.y * u.z,
    k2 + k5 * u.z + k4 * u.x + k7 * u.z * u.x,
    k3 + k6 * u.x + k5 * u.y + k7 * u.x * u.y
  );
}

// the noise lattice turned off the world axes, so it never lines up with the (axis-aligned) walls
const mat3 WALL_NOISE_TURN = mat3( 0.00, 0.80, 0.60, -0.80, 0.36, -0.48, -0.60, -0.48, 0.64 );

// one layer's slope in world space: wavelength in metres, faded out below a few pixels
vec3 wallDetailLayer( vec3 world, float wavelength, float tilt, float footprint, float seed ) {
  float visible = 1.0 - smoothstep( 0.15 * wavelength, 0.35 * wavelength, footprint );
  if ( tilt * visible <= 0.0 ) return vec3( 0.0 );
  vec3 q = WALL_NOISE_TURN * ( world / wavelength ) + seed;
  // chain rule through the turn: d/dworld = transpose( turn ) * gradient
  return tilt * visible * ( wallNoiseGradient( q ) * WALL_NOISE_TURN );
}
`;

const WALL_DETAIL_FRAGMENT = /* glsl */ `
{
  float wallFootprint = length( fwidth( vWallWorld ) );
  vec3 wallSlope = wallDetailLayer( vWallWorld, wallDetailScale.x, wallDetailTilt.x, wallFootprint, 0.0 )
    + wallDetailLayer( vWallWorld, wallDetailScale.y, wallDetailTilt.y, wallFootprint, 17.0 )
    + wallDetailLayer( vWallWorld, wallDetailScale.z, wallDetailTilt.z, wallFootprint, 43.0 );
  // into view space, keep only the part along the surface, lean the normal against it
  vec3 wallSlopeView = ( viewMatrix * vec4( wallSlope, 0.0 ) ).xyz;
  wallSlopeView -= dot( wallSlopeView, normal ) * normal;
  normal = normalize( normal - wallSlopeView );
}
`;

const compileWallDetail = (shader: THREE.WebGLProgramParametersWithUniforms) => {
  Object.assign(shader.uniforms, wallDetailUniforms);
  shader.vertexShader = shader.vertexShader
    .replace('#include <common>', `#include <common>\n${WALL_DETAIL_VERTEX_PARS}`)
    .replace('#include <project_vertex>', `#include <project_vertex>\n${WALL_DETAIL_VERTEX}`);
  shader.fragmentShader = shader.fragmentShader
    .replace('#include <common>', `#include <common>\n${WALL_DETAIL_FRAGMENT_PARS}`)
    .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>\n${WALL_DETAIL_FRAGMENT}`);
};

/**
 * Give a wall material the wall finish (current look only). Clones don't inherit it:
 * call this on each one (the theatre's dimmable walls).
 */
export const addWallDetail = (material: THREE.MeshStandardMaterial) => {
  if (ACTIVE_LOOK !== 'current') return;
  material.onBeforeCompile = compileWallDetail;
  material.customProgramCacheKey = () => 'wallDetail';
};

/** Wall finish folder in the debug panel (current look only). */
export const addWallDetailControls = () => {
  if (ACTIVE_LOOK !== 'current') return;
  addDebugControls((pane) => {
    const folder = pane.addFolder({ title: 'Wall finish' });
    folder.addBinding(wallDetail, 'enabled', { label: 'wall relief on' });
    folder.addBinding(wallDetail, 'wavinessScale', { label: 'waviness size (m)', min: 0.5, max: 8, step: 0.1 });
    folder.addBinding(wallDetail, 'wavinessTilt', { label: 'waviness depth', min: 0, max: 0.1, step: 0.001 });
    folder.addBinding(wallDetail, 'dentScale', { label: 'dents size (m)', min: 0.05, max: 1.5, step: 0.01 });
    folder.addBinding(wallDetail, 'dentTilt', { label: 'dents depth', min: 0, max: 0.1, step: 0.001 });
    folder.addBinding(wallDetail, 'stippleScale', { label: 'paint stipple size (m)', min: 0.002, max: 0.05, step: 0.001 });
    folder.addBinding(wallDetail, 'stippleTilt', { label: 'paint stipple depth', min: 0, max: 0.1, step: 0.001 });
    folder.addButton({ title: 'Reset wall finish' }).on('click', () => {
      Object.assign(wallDetail, WALL_DETAIL_DEFAULTS);
      applyWallDetail();
      folder.refresh();
    });
    folder.on('change', applyWallDetail);
  });
};
