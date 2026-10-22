import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import test from "node:test";
const root = new URL("../out/", import.meta.url);
const html = await readFile(new URL("index.html", root), "utf8");
test("exports a complete research portfolio without relying on client rendering", () => {
  assert.match(html, /Pranay Kashyap/);
  assert.match(html, /SAM-GEBD/);
  assert.match(html, /world model/i);
  assert.match(html, /US20250233960A1/);
  assert.equal((html.match(/class="first-author"/g) || []).length, 1);
  for (const id of [
    "research",
    "current",
    "patents",
    "experience",
    "education",
  ])
    assert.ok(html.includes(`id="${id}"`));
  assert.doesNotMatch(html, /Codex is working|SYSTEM LIVE|localhost:3000/);
});
test("all local images and linked resources exist in the deployment artifact", async () => {
  const refs = [...html.matchAll(/(?:src|href)="([^"#]+)"/g)].map(
    (match) => match[1],
  );
  for (const ref of new Set(refs)) {
    if (/^(https?:|mailto:|data:)/.test(ref)) continue;
    const path = ref.replace(/^\//, "").split("?")[0];
    await access(new URL(path.endsWith("/") ? `${path}index.html` : path, root));
  }
  assert.match(
    await readFile(new URL("Pranay-Kashyap-Resume.pdf", root), "latin1"),
    /^%PDF/,
  );
});
test("reflects the current resume and distinguishes grant status", async () => {
  for (const value of ["1.98 cm ADE", "17,512", "96.7%", "CareMate", "71.4%", "US12277768B2", "US12548599B2", "Pending", "Mar 2023", 'id="skills"']) assert.ok(html.includes(value), value);
  assert.doesNotMatch(html, /32-frame|32 context frames|Mar–Aug 2024|Identifiers below refer to published applications/);
  const resume = await readFile(new URL("resume/index.html", root), "utf8");
  assert.match(resume, /Pranay-Kashyap-Resume.tex/);
  assert.match(resume, /1.84%/);
});
