import { defineConfig } from "vite";
import { domco } from "domco";
import { adapter } from "domco/adapter/deno";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
	plugins: [domco({ adapter: adapter() })],
	css: {
		postcss: {
			plugins: [tailwindcss(), autoprefixer()],
		},
	},
});
