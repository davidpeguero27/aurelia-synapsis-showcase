import {
  copyFileSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  writeFileSync
} from "node:fs";
import { execFileSync } from "node:child_process";

execFileSync("node", ["node_modules/vite/bin/vite.js", "build"], {
  stdio: "inherit"
});

mkdirSync("dist/server", { recursive: true });
mkdirSync("dist/.openai", { recursive: true });
copyFileSync(".openai/hosting.json", "dist/.openai/hosting.json");

const assetFiles = readdirSync("dist/assets");
const cssFile = assetFiles.find((name) => name.endsWith(".css"));
const jsFile = assetFiles.find((name) => name.endsWith(".js"));

if (!cssFile || !jsFile) {
  throw new Error("Expected Vite CSS and JS assets in dist/assets.");
}

const indexHtml = readFileSync("dist/index.html", "utf8");
const css = readFileSync(`dist/assets/${cssFile}`, "utf8");
const js = readFileSync(`dist/assets/${jsFile}`, "utf8");
const pngBase64 = readFileSync(
  "dist/aurelia-mobile-redesign-final.png"
).toString("base64");
const paypalQrBase64 = readFileSync(
  "dist/aurelia-paypal-qr.png"
).toString("base64");

writeFileSync(
  "dist/server/index.js",
  `const indexHtml = ${JSON.stringify(indexHtml)};
const css = ${JSON.stringify(css)};
const js = ${JSON.stringify(js)};
const pngBase64 = ${JSON.stringify(pngBase64)};
const paypalQrBase64 = ${JSON.stringify(paypalQrBase64)};
const cssPath = "/assets/${cssFile}";
const jsPath = "/assets/${jsFile}";

function decodeBase64(value) {
  const binary = atob(value);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return bytes;
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === cssPath) {
      return new Response(css, {
        headers: { "content-type": "text/css; charset=utf-8" }
      });
    }
    if (url.pathname === jsPath) {
      return new Response(js, {
        headers: { "content-type": "application/javascript; charset=utf-8" }
      });
    }
    if (url.pathname === "/aurelia-mobile-redesign-final.png") {
      return new Response(decodeBase64(pngBase64), {
        headers: { "content-type": "image/png" }
      });
    }
    if (url.pathname === "/aurelia-paypal-qr.png") {
      return new Response(decodeBase64(paypalQrBase64), {
        headers: { "content-type": "image/png" }
      });
    }
    return new Response(indexHtml, {
      headers: { "content-type": "text/html; charset=utf-8" }
    });
  }
};
`,
  "utf8"
);
