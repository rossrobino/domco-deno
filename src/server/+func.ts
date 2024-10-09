import type { Handler } from "domco";
import { html } from "client:page";

export const handler: Handler = (req) => {
	const { pathname } = new URL(req.url);

	if (pathname === "/") {
		return new Response(html, {
			headers: {
				"Content-Type": "text/html",
			},
		});
	}

	return new Response("Not found", { status: 404 });
};
