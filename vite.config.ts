import { defineConfig } from "vite";
import { domco } from "domco";
import { adapter } from "domco/adapter/deno";

export default defineConfig({
	plugins: [
		domco({
			// use deno adapter for deployment
			adapter: adapter(),
		}),
	],
});
