import {Hono} from "hono";
import {zValidator} from "@hono/zod-validator";
import {z} from "zod";

const HELLO = new Set<string>()
const helloRouter = new Hono()
    .get("/", async (c) => {
        if (HELLO.size === 0) return c.json({}, 404)
        return c.json(Array.from(HELLO), 200)
    })
    .get('/:id', async (c) => {
        const {id} = c.req.param()
        const hello = HELLO.has(id)
        if (!hello) return c.json({error: "Invalid Name"}, 404)
        return c.json({message: "Hello World!", data: id}, 200)
    }).post("/", zValidator("json", z.object({name: z.string()})), async (c) => {
        const {name} = c.req.valid("json")
        HELLO.add(name)
        return c.json(name, 201)
    })

export default helloRouter