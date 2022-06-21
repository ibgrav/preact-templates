import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import { resolve } from "path";

const SSR = process.env.SSR;

const shared = defineConfig({
  plugins: [preact()],
  resolve: { alias: [{ find: "src", replacement: resolve(process.cwd(), "src") }] },
  esbuild: {
    logOverride: { "this-is-undefined-in-esm": "silent" },
  },
});

const client = defineConfig({
  ...shared,
  build: {
    manifest: true,
    outDir: "dist/client",
    rollupOptions: {
      input: "/src/client/index.tsx",
    },
  },
});

const server = defineConfig({
  ...shared,
  publicDir: false,
  build: {
    outDir: `dist/${process.env.SSR}`,
    ssr: `/src/server/handlers/handler.${SSR}.ts`,
  },
});

export default Boolean(process.env.SSR) ? server : client;
