import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.html(c.var.page()));

export default app;
