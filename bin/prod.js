//@ts-check

const { readFileSync } = require("fs");
const { resolve } = require("path");
const { createServer } = require("http");
const sirv = require("sirv");
const { handlerNode } = require("../dist/node/handler.node");

const manifest = JSON.parse(readFileSync(resolve(process.cwd(), "dist/client/manifest.json"), "utf-8"));

//@ts-ignore
const assets = sirv("dist/client", {
  maxAge: 31536000, // 1Y
  immutable: true,
});

const server = createServer((req, res) => {
  assets(req, res, async () => {
    await handlerNode({ req, res, manifest, vite: undefined });
  });
});

server.listen(4000, "0.0.0.0", () => {
  console.log("PROD SERVER http://localhost:4000/");
});
