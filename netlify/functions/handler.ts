import { Handler } from "@netlify/functions";
import { handlerNetlify } from "../../dist/netlify/handler.netlify.js";
import manifest from "../../dist/client/manifest.json";

export const handler: Handler = async (netlifyEvent) => {
  return handlerNetlify({ netlifyEvent, manifest });
};
