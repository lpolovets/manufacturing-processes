#!/usr/bin/env node
// Generates AI illustrations for sheet entries via the Gemini image API.
// The API key is NEVER stored in this repo: it is read from $GEMINI_API_KEY
// or from ../.gemini_api_key (one level above the repo root, gitignored by absence).
//
//   node build/generate-images.js anchor            -> generate the style-anchor image
//   node build/generate-images.js batch [n]         -> generate n candidates per entry (default 2),
//                                                      style-conditioned on the anchor
//   node build/generate-images.js edit <png> "<instruction>"  -> targeted edit of an existing
//                                                      image, written alongside as <png>-edit.png
// Output goes to the OUT dir below (a scratch area, not the repo) for human review;
// picked images are copied into sheets/<slug>/images/ by hand afterwards.
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT = '/private/tmp/claude-501/-Users-leo-claude-refsheets/5116f9ba-4a1c-4985-8881-fcf8a42f639d/scratchpad/gen';
const MODEL = 'gemini-2.5-flash-image';

const KEY = process.env.GEMINI_API_KEY ||
  fs.readFileSync(path.join(ROOT, '..', '.gemini_api_key'), 'utf8').trim();

const STYLE = 'Minimalist technical illustration, the style of a precise patent drawing ' +
  'crossed with an isometric product sketch. Uniform-weight dark slate-gray ink linework ' +
  'with sparse, muted steel-blue accent shading (hex 4E7AA8) on a plain very light warm-gray ' +
  'background (hex F2F3F1). Three-quarter isometric view, single centered subject, generous ' +
  'margins. No text, no labels, no callouts, no logos, no humans, no background scenery, ' +
  'no drop shadows. Clean, engineered, calm.';

const PROMPTS = {
  1: 'An electric parallel-jaw robot gripper mounted on a robot wrist flange at the top, pointing downward: a compact rounded rectangular housing, two sturdy flat metal fingers extending down and facing each other, gripping a short muted steel-blue machined cylinder between the fingertip pads, one cable exiting the housing. Proportions like a Robotiq or Schunk gripper.',
  2: 'A pneumatic two-jaw industrial gripper: a small square-bodied unit with two short hardened L-shaped jaws, two air fittings on the body, mounted on a robot wrist flange, jaws holding a turned metal part.',
  3: 'An adaptive underactuated robot gripper with three articulated fingers, each finger made of two hinged links, wrapping and enveloping a sphere, linkages and pivot pins visible.',
  4: 'Side profile view at eye level: a robot wrist plate carrying four bellows suction cups, the cups slightly compressed against the top face of a cardboard box which hangs held beneath them, clearly lifted with a visible gap above a thin ground line below; one vacuum hose runs up from the plate. The cup-to-box contact is the focus.',
  5: 'Straight-on side elevation view, camera at the level of the gripper underside: a wide flat vacuum gripper plate whose thick dark porous foam layer faces downward, with two cardboard boxes of different heights stuck to that foam underside and hanging in mid-air. The taller box presses deeper into the foam, which visibly bulges and compresses around the top edges of each box at the contact line. Both boxes hang well above a thin ground line at the bottom. The dark foam-to-box contact interface is the clear focus of the image.',
  6: 'Side profile view: a short wide cylindrical electropermanent magnetic gripper on a robot flange, lifting a large steel hex-head bolt that clings sideways to its flat round underside pole face, the bolt hanging in the air well above a thin ground line, small muted steel-blue accent on the bolt.',
  7: 'Side profile view: a thin flat electroadhesion paddle held at a slight angle, a piece of limp draped fabric clinging flat against its underside face and hanging past its edges, clearly stuck to the pad and lifted in mid-air; the pad edge shows a subtle striped electrode pattern. The fabric-to-pad contact face is visible from the side.',
  8: 'A soft robotic gripper with four plump ribbed elastomer fingers curled tightly around a strawberry, fingertips pressed firmly against the fruit on all sides, strawberry held securely in mid-air with no gap between fingers and fruit, pneumatic manifold above. Slight side angle showing the wrap contact.',
  9: 'Side profile view of a granular jamming gripper in action: a balloon-like membrane filled with visible granules, vacuum-hardened and molded snugly over the top half of a small star-shaped object, the object gripped and lifted into mid-air well above a thin ground line, vacuum line running up from the neck. The membrane visibly conforms around the points of the object it holds.',
  10: 'A research-grade dexterous robotic hand with five articulated fingers, exposed tendons and joint pulleys along the fingers, open palm facing slightly forward, mounted on a cylindrical wrist.',
  11: 'A sleek production humanoid robot hand with five fingers, smooth enclosed shell panels, integrated forearm housing, in a relaxed half-open pose about to pinch a small object between thumb and forefinger.',
  12: 'A robotic MIG welding torch on a robot wrist: an angled torch neck with gas nozzle tip near a metal seam joint between two plates, a small precise arc glow at the tip, wire-feed conduit curving away.',
  13: 'A robotic deburring spindle end effector: a slim cylindrical spindle with a small rotary burr tool at its tip, mounted through a radial compliance ring, working the edge of a rough metal casting.',
  14: 'A robotic dispensing end effector: a slender dispensing valve with a fine needle nozzle laying a neat continuous bead of adhesive along a straight path on a flat panel.',
  15: 'A robotic screwdriving end effector: a vertical screwdriver spindle with a hex bit holding a single screw at its tip by vacuum, poised above a threaded hole in a plate, a feed tube entering the side.',
  16: 'A robotic automatic tool changer shown as two halves slightly separated: a round master plate on a robot wrist above, and a matching tool plate below, with visible locating pins, locking ball ring, and pass-through connector blocks between them.',
  17: 'A remote-center compliance device: a short cylindrical unit of stacked elastomer-and-metal shear pads mounted between a robot flange and a smooth peg, the peg entering a chamfered hole in a block below, slightly tilted to show self-alignment.',
};

async function generate(prompt, anchorB64, outfile) {
  const parts = [];
  if (anchorB64) {
    parts.push({ inline_data: { mime_type: 'image/png', data: anchorB64 } });
    parts.push({ text: 'Match the exact visual style, line weight, palette, background color, and rendering approach of this reference illustration. New subject: ' + prompt + ' ' + STYLE });
  } else {
    parts.push({ text: prompt + ' ' + STYLE });
  }
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': KEY },
      body: JSON.stringify({
        contents: [{ parts }],
        generationConfig: { responseModalities: ['IMAGE'], imageConfig: { aspectRatio: '4:3' } },
      }),
    });
  if (!res.ok) throw new Error(outfile + ': HTTP ' + res.status + ' ' + (await res.text()).slice(0, 300));
  const data = await res.json();
  const img = (data.candidates?.[0]?.content?.parts || []).find(p => p.inlineData || p.inline_data);
  if (!img) throw new Error(outfile + ': no image in response: ' + JSON.stringify(data).slice(0, 300));
  const b64 = (img.inlineData || img.inline_data).data;
  fs.writeFileSync(outfile, Buffer.from(b64, 'base64'));
  console.log('wrote', outfile);
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const mode = process.argv[2];
  if (mode === 'anchor') {
    await generate(PROMPTS[1], null, path.join(OUT, 'anchor.png'));
  } else if (mode === 'batch') {
    const per = parseInt(process.argv[3] || '2', 10);
    const anchorB64 = fs.readFileSync(path.join(OUT, 'anchor.png')).toString('base64');
    const jobs = [];
    for (const [n, prompt] of Object.entries(PROMPTS)) {
      for (let c = 0; c < per; c++) {
        jobs.push({ n, c, prompt });
      }
    }
    let failed = 0;
    const workers = Array.from({ length: 3 }, async () => {
      while (jobs.length) {
        const { n, c, prompt } = jobs.shift();
        const f = path.join(OUT, String(n).padStart(3, '0') + '-' + String.fromCharCode(97 + c) + '.png');
        if (fs.existsSync(f)) continue; // resumable: skip already-generated candidates
        try { await generate(prompt, anchorB64, f); }
        catch (e) { failed++; console.error(e.message); }
      }
    });
    await Promise.all(workers);
    console.log(failed ? failed + ' FAILED' : 'all done');
  } else if (mode === 'edit') {
    const src = process.argv[3], instruction = process.argv[4];
    if (!src || !instruction) { console.error('usage: ... edit <png> "<instruction>"'); process.exit(1); }
    const b64 = fs.readFileSync(src).toString('base64');
    const out = src.replace(/\.png$/, '') + '-edit.png';
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-goog-api-key': KEY },
        body: JSON.stringify({
          contents: [{ parts: [
            { inline_data: { mime_type: 'image/png', data: b64 } },
            { text: instruction + ' Change nothing else about the image: keep the exact same composition, style, line work, colors, and background.' },
          ] }],
          generationConfig: { responseModalities: ['IMAGE'], imageConfig: { aspectRatio: '4:3' } },
        }),
      });
    if (!res.ok) throw new Error('edit: HTTP ' + res.status + ' ' + (await res.text()).slice(0, 300));
    const data = await res.json();
    const img = (data.candidates?.[0]?.content?.parts || []).find(p => p.inlineData || p.inline_data);
    if (!img) throw new Error('edit: no image in response');
    fs.writeFileSync(out, Buffer.from((img.inlineData || img.inline_data).data, 'base64'));
    console.log('wrote', out);
  } else {
    console.error('usage: node build/generate-images.js anchor|batch [candidates-per-entry]|edit <png> "<instruction>"');
    process.exit(1);
  }
})();
