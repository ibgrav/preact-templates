import type { FunctionalComponent } from "preact";
import type { Manifest } from "vite";

import { h } from "preact";
import { render as renderToString } from "preact-render-to-string";
import { extractCss, setup } from "goober";

setup(h);

export function render<P>(Component: FunctionalComponent<P>, props: P, manifest?: Manifest) {
  const body = renderToString(<Component {...props} />, { pretty: true });

  let script = "src/client/index.tsx";

  if (manifest) {
    const entry = manifest?.["src/client/index.tsx"];
    script = entry.file;
  }

  return `<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Harvard Business School</title>
    <style id="_goober">${extractCss()}</style>
  </head>
  <body>
    ${body}
    <script src="/${script}" type="module"></script>
  </body>
</html>`;
}
