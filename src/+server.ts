import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.html(c.var.page()));

app.get("/api", (c) => c.json({ hello: "world" }));

export default app;
