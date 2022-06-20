import type { HandlerEvent, HandlerResponse } from "@netlify/functions";
import { Manifest } from "vite";
import { Event } from "../Event";
import { handler } from "./handler";

interface HandlerNetlifyProps {
  netlifyEvent?: HandlerEvent;
  manifest?: Manifest;
}

export async function handlerNetlify({ netlifyEvent, manifest }: HandlerNetlifyProps): Promise<HandlerResponse> {
  const method = netlifyEvent?.httpMethod || "GET";
  const url = (netlifyEvent?.path || "/") + (netlifyEvent?.rawQuery ? "?" + netlifyEvent?.rawQuery : "");
  const headers = { ...netlifyEvent?.headers, ...netlifyEvent?.multiValueHeaders };

  const event = new Event(method, url, headers);

  await handler({ event, manifest });

  return {
    body: event.responseBody,
    statusCode: event.responseStatus,
    headers: event.responseHeaders,
    multiValueHeaders: event.responseMultiValueHeaders,
  };
}
