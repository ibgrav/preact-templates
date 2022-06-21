import * as fs from "fs/promises";
import { resolve } from "path";
import { Event } from "../Event";
import { handler } from "./handler";
import manifest from "src/../dist/client/manifest.json";

(async () => {
  const slugs = ["/", "/about", "/first/second/third", "/first/second/third-again"];

  const jobs = slugs.map(async (slug) => {
    await staticExport({ slug });
  });

  await Promise.all(jobs);
})();

interface StaticExportProps {
  slug: string;
}

export async function staticExport({ slug }: StaticExportProps) {
  const paths = slug.split("/");
  const name = paths.pop() || "index";
  const dir = resolve(process.cwd(), "dist/client", ...paths);

  const event = new Event("GET", slug, {});

  await handler({ event, manifest });

  if (event.responseStatus === 200) {
    try {
      await fs.mkdir(dir, { recursive: true });
    } catch (e) {}

    const path = resolve(dir, name + ".html");
    console.log("exporting", path);
    await fs.writeFile(path, event.responseBody, "utf-8");
  }
}
