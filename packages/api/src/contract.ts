import { initContract } from "@ts-rest/core";
import { z } from "zod";

const c = initContract();

// TODO: database integration?
const PostSchema = z.object({
  id: z.string(),
  title: z.string(),
  body: z.string(),
});

export const contract = c.router({
  createPost: {
    method: "POST",
    path: "/posts",
    //     ^ Note! This is the full path on the server, not just the sub-path of a route
    responses: {
      201: c.type<z.infer<typeof PostSchema>>(),
    },
    body: z.object({
      title: z.string(),
      content: z.string(),
      published: z.boolean().optional(),
      description: z.string().optional(),
    }),
    summary: "Create a post",
    metadata: { role: "user" } as const,
  },
  getPosts: {
    method: "GET",
    path: "/posts",
    responses: {
      200: c.type<{ posts: z.infer<typeof PostSchema>[]; total: number }>(),
    },
    headers: z.object({
      pagination: z.string().optional(),
    }),
    query: z.object({
      take: z.string().transform(Number).optional(),
      skip: z.string().transform(Number).optional(),
      search: z.string().optional(),
    }),
    summary: "Get all posts",
    metadata: { role: "guest" } as const,
  },
  getPost: {
    method: "GET",
    path: "/posts",
    responses: {
      200: c.type<{ posts: z.infer<typeof PostSchema>[]; total: number }>(),
    },
    headers: z.object({
      pagination: z.string().optional(),
    }),
    query: z.object({
      take: z.string().transform(Number).optional(),
      skip: z.string().transform(Number).optional(),
      search: z.string().optional(),
    }),
    summary: "Get all posts",
    metadata: { role: "guest" } as const,
  },
});
