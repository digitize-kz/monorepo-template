import dotenv from "dotenv";
import { z } from "zod";

dotenv.config({
  path: "../../.env",
});
console.log(process.env.DATABASE_URL);

const zParse = z.object({
  DATABASE_URL: z.string().url(),
});

const res = zParse.parse(process.env);
export const env: { DATABASE_URL: string } = res;
