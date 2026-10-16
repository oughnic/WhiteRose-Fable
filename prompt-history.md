# Prompt history

## Session 2026-10-12

1. (Planning) Take over the repo and fix four things: z-fighting in many places across the
   hospital; titles that can't be read (e.g. the "← Reference Gallery / clause 3.1
   definitions" sign has a wall through it); the on-screen joystick showing on desktop — it
   should only show for touch or pen input; lift rides flash the screen black — they should
   be doors close → teleport → doors open at the destination.
2. (Planning answers) May run `npm run dev` and use Chrome DevTools to run detectors and
   check fixes, killing the server afterwards. Only the joystick hides on mouse devices —
   the round ↩ ⏩ ℹ ⌖ buttons stay. A lift ride to Reception (no cab): doors close, then a
   direct cut with the chime, no black flash.
3. "Implement the following plan: Fix Z-fighting, unreadable signs, the desktop joystick,
   and lift teleport" — the approved plan (global depth/decal fixes, specific overlaps,
   `__hospital.zfight()` and `__hospital.signAudit()` detectors, theatre/gallery/street sign
   fixes, `body.touch` joystick via `src/ui/inputMode.ts`, `src/world/liftRide.ts` ride
   sequence with no black flash), verified in the dev build with Chrome DevTools.

## Session 2026-10-13

1. "install tweakpane library, and make it accessible (including only import) when the
   #debug hash is on the URL. update deps"
2. "From now on unless I said the contrary let's try to add everything to the tweakpane
   configurable, so if I forgot to mention it or the parameters are not easily understood
   please remind me (put this on the claude.md). As this is an exploration, let's play a
   little: 1) let's add a global overwrite materials, so let's look how all materials look
   with (standard, toon) add a select to the tweakpane"
3. "Something that can be very handy is to have a minimap on the screen (this can make the
   user know exactly where he is) any idea how to handle the different floors?"
4. "Bug (no tweakpane need it) Look like if I got through a door I just teleport, even if I
   go backwards (this is very confusing and disorientated). No backward possibility to go
   through doors. If I'm in front of a door and want to use it, I need to do an action
   (maybe press the E button on desktop, and a new button to tap appears on mobile) also
   what a simple opening door animation before transporting"
5. "ok the overwrite material on the tweakpanel is not doing anything I think maybe we need
   to refresh the scene somehow?"
6. "Thanks, let's add another button to the tweakpane copy parameters, this allow with one
   click to copy all the settings adjust on the tweakpane to easily paste in here and you
   as an agent can implement it. I'm seeing that we got plenty of lights, sun flat fill,
   what is the lamp reach? I think this model of lighting is wrong. we got the lights on
   the ceiling, can you make areaRectLight of them please. Also let's set the toon material
   as default"
7. (Answer) RectAreaLight can't light toon → chose "RectAreaLight, standard default".
8. "Something that can be very handy is to have a minimap on the screen (this can make the
   user know exactly where he is)" — repeated; built the floor plan + floor strip + ghosted
   storey above proposed earlier.
9. "ok we don't need more override, standard material will be our default. can you make the
   floor (only the floor) 0 roughness. and increase the ceiling panels in 40. We can get rid
   of sky fill and sun (if PBR reflections affect all materials we can get rid of it too)"
10. "What is lit panels nearBy?"
11. "I can always see like sun light reflected on the floor is like directional light... can
    we get rid of it?"
12. "just for the sake of testing we're going to split this (as an AB test) using a select
    on the tweakpane. for one side we're going to have the experience that we currently
    have. On the other side we're going to create a toon version. with toon material,
    outline post processing, and curves surfaces (rounded box no more hard angles) replace
    the reactAreaLights for a combination of hemisphere, directional, and the current point
    light the one that move with our character. Another version will be done with basic
    material but with an post processing sketchy based on this one: shade uncertainty, for
    this if possible we can have the blue print style for the minimap?"
13. "ReferenceError: Cannot access 'volume' before initialization"
14. "ok on the toon look, we got a visual bug, there are some stripe lines follow my view
    that get proyected on the floor and the ceiling / the sketchy we need to set a
    uncerttinty of 0.007, and is way too bright can we lower the luminocity?"

## Session 2026-10-14

1. "Is it possible to add lightProbes to the realistic preset? will affect our performance
   drastically? Apart from that I would like to add some random generated details on the
   normals, just to prove the point. spesifically on the walls (only the walls for now) it
   has to be sutil, it has to be barely noticeble but right now all the walls are the same
   no difference, on long hallways it look very similar all. (this again add only to the
   realistic preset)"

## Session 2026-10-16

1. "bring down on toneMapping line width (px) to 1 line strength on 0.25 And on sketchy line
   strength 0.25"
