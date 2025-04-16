import { serve } from "@hono/node-server";
import { Hono } from "hono";
import "dotenv/config";
import helloRouter from "./hello.ts";
import { cors } from "hono/cors";

const app = new Hono()
  .use("*", cors())
  .route("/hello", helloRouter)
  .get("/", (c) => {
    return c.text("Hello Hono!");
  });

export type AppType = typeof app;

serve(
  {
    fetch: app.fetch,
    port: 5000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
