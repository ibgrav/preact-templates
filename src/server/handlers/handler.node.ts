import { IncomingMessage, ServerResponse } from "http";
import { Manifest, ViteDevServer } from "vite";
import { Event } from "../Event";
import { handler } from "./handler";

export interface HandlerNodeProps {
  req: IncomingMessage;
  res: ServerResponse;
  vite?: ViteDevServer;
  manifest?: Manifest;
}

export async function handlerNode({ req, res, vite, manifest }: HandlerNodeProps) {
  const event = new Event(req.method || "GET", req.url || "/", req.headers);

  await handler({ event, vite, manifest });

  for (const [key, val] of Object.entries(event.responseHeaders)) {
    if (val) res.setHeader(key, String(val));
  }

  res.statusCode = event.responseStatus;
  res.end(event.responseBody);
}
