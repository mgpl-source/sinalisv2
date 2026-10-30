import { cp, rm, writeFile } from "node:fs/promises";
// A raiz permanece pronta para o GitHub Pages: main / (root).
for (const path of ["assets", "media", "fonts"]) {
  await rm(path, { recursive: true, force: true });
  await cp(`dist/${path}`, path, { recursive: true });
}
await cp("dist/index.html", "index.html");
for (const name of ["LUCIDE-LICENSE.txt", "REACT-LICENSE.txt", "REACT-DOM-LICENSE.txt"]) await cp(`dist/${name}`, name);
await writeFile(".nojekyll", "");
