/**
 * copy-css.cjs
 * Copies UDS CSS files and Bootstrap JS into public/ after npm install.
 * Uses .cjs extension because package.json has "type":"module".
 */
const fs = require("fs");
const path = require("path");

const cssFiles = [
  "unity-bootstrap-theme.css",
  "unity-bootstrap-theme.bundle.css",
  "unity-bootstrap-header-footer.css",
];

fs.mkdirSync("public/css", { recursive: true });
fs.mkdirSync("public/js", { recursive: true });

const cssBase = path.join(
  "node_modules",
  "@asu",
  "unity-bootstrap-theme",
  "dist",
  "css"
);

for (const file of cssFiles) {
  const src = path.join(cssBase, file);
  const dest = path.join("public", "css", file);
  try {
    fs.copyFileSync(src, dest);
    console.log(`Copied: ${dest}`);
  } catch {
    console.warn(`Skipped (not found): ${src}`);
  }
}

const jsSrc = path.join(
  "node_modules",
  "@asu",
  "unity-bootstrap-theme",
  "dist",
  "js",
  "bootstrap.bundle.min.js"
);
const jsDest = path.join("public", "js", "bootstrap.bundle.min.js");
try {
  fs.copyFileSync(jsSrc, jsDest);
  console.log(`Copied: ${jsDest}`);
} catch {
  console.warn(`Skipped (not found): ${jsSrc}`);
}

// Copy @asu/app-rfi image asset
const rfiImgSrc = path.join(
  "node_modules",
  "@asu",
  "app-rfi",
  "dist",
  "assets",
  "img",
  "WS2-DefaultImagev01-Final.png"
);
const rfiImgDest = path.join(
  "public",
  "app-rfi",
  "assets",
  "img",
  "WS2-DefaultImagev01-Final.png"
);
fs.mkdirSync(path.dirname(rfiImgDest), { recursive: true });
try {
  fs.copyFileSync(rfiImgSrc, rfiImgDest);
  console.log(`Copied: ${rfiImgDest}`);
} catch {
  console.warn(`Skipped (not found): ${rfiImgSrc}`);
}

console.log("Done.");
