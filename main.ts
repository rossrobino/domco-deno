import { createApp } from "./dist/server/app.js";
import { serveStatic } from "hono/deno";
import { createMiddleware } from "hono/factory";
import { etag } from "hono/etag";

const immutable = createMiddleware(async (c, next) => {
	await next();
	if (c.req.path.startsWith("/_immutable")) {
		c.header("Cache-Control", "public, immutable, max-age=31536000");
	}
});

const app = createApp({
	middleware: [etag(), immutable, serveStatic({ root: "./dist/client" })],
});

Deno.serve(app.fetch);
