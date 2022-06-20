import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

const SSR = process.env.SSR;

const client = defineConfig({
  plugins: [preact()],
  build: {
    manifest: true,
    outDir: "dist/client",
    rollupOptions: {
      input: "/src/client/index.tsx",
    },
  },
});

const server = defineConfig({
  plugins: [preact()],
  publicDir: false,
  build: {
    outDir: `dist/${process.env.SSR}`,
    ssr: `/src/server/handlers/handler.${SSR}.ts`,
  },
});

export default Boolean(process.env.SSR) ? server : client;
