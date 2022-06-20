import { ComponentChildren } from "preact";
import { render as renderToString } from "preact-render-to-string";
import { Manifest } from "vite";
import { Document } from "./Document";

export function render(element: ComponentChildren, manifest?: Manifest) {
  return renderToString(<Document manifest={manifest}>{element}</Document>, { pretty: true });
}
