import {hcWithType} from "api/src/hc.ts";

// export const client = hcWithType('https://my-turborepo-nzv5.onrender.com/')
export const client = hcWithType(import.meta.env.VITE_API_URL)
