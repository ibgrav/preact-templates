const { createServer } = require("http");
const { createServer: createViteServer } = require("vite");

createViteServer({
  server: {
    middlewareMode: true,
  },
}).then((vite) => {
  const server = createServer((req, res) => {
    vite.middlewares(req, res, async () => {
      const handler = (await vite.ssrLoadModule("/src/server/handlers/handler.node.ts")).default;
      await handler({ req, res, vite });
    });
  });

  server.listen(4000, "0.0.0.0", () => {
    console.log("DEV SERVER http://localhost:4000/");
  });
});
