import type { Manifest, ViteDevServer } from "vite";
import { Event } from "../Event";
import { Page } from "../Page";
import { render } from "../render";

export interface HandlerProps {
  event: Event;
  vite?: ViteDevServer;
  manifest?: Manifest;
}

export async function handler({ event, vite, manifest }: HandlerProps) {
  try {
    let doc = render(Page, {}, manifest);

    if (vite) doc = await vite.transformIndexHtml(event.url.pathname, doc);

    event.responseStatus = 200;
    event.responseHeaders["content-type"] = "text/html";
    event.responseBody = doc;
  } catch (e) {
    event.responseStatus = 500;
    if (vite) vite.ssrFixStacktrace(e as Error);
    event.responseBody = (e as Error).stack || "internal server error";
  }
}
