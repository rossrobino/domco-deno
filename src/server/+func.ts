import type { Handler } from "domco";

// both of these types are added with the triple slash directive in src/env.d.ts
import { html } from "client:page"; // domco/env
import rawText from "../client/style.css?raw"; // vite/client

export const handler: Handler = (req) => {
	const { pathname } = new URL(req.url);

	console.log(rawText); // works

	if (pathname === "/") {
		return new Response(
			html, // works
			{
				headers: {
					"Content-Type": "text/html",
				},
			},
		);
	}

	return new Response("Not found", { status: 404 });
};
