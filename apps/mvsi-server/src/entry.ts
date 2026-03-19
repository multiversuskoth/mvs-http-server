const [command, ...args] = Bun.argv.slice(2);

async function start() {
  switch (command) {
    case "websocket":
      await import("./websocketStart.ts");
      break;
    case "worker":
      await import("./workerStart.ts");
      break;
    default:
      await import("./index.elysia.ts");
  }
}
start();
