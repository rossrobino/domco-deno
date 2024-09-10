import { createApp } from "./dist/server/app.js";
import { serveStatic } from "hono/deno";
import type { MiddlewareHandler } from "hono";

const immutable: MiddlewareHandler = async (c, next) => {
	await next();
	c.header("Cache-Control", "public, immutable, max-age=31536000");
};

const app = createApp({
	middleware: [
		{
			path: "/_immutable/*",
			handler: immutable,
		},
		{
			path: "/*",
			handler: serveStatic({
				root: "./dist/client",
			}),
		},
	],
});

Deno.serve(app.fetch);
