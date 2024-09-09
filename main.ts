import { createApp } from "./dist/server/app.js";
import { serveStatic } from "hono/deno";

const app = createApp({
	middleware: [serveStatic({ root: "./dist/client" })],
});

Deno.serve(app.fetch);
