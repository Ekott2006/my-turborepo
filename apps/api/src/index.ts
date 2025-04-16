import {serve} from '@hono/node-server'
import {Hono} from 'hono'
import "dotenv/config"
import helloRouter from "./hello.ts";

const app = new Hono()
    .route("/hello", helloRouter)
    .get('/', (c) => {
        return c.text('Hello Hono!')
    })

export type AppType = typeof app

serve({
    fetch: app.fetch,
    port: Number(process.env.PORT || 3000)
}, (info) => {
    console.log(`Server is running on http://localhost:${info.port}`)
})
