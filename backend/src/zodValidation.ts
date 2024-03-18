import z from 'zod';

export const signUpBody =  z.object({
    email: z.string().email(),
    password: z.string(),
    name: z.string()
})

export type signUpBody = z.infer<typeof signUpBody>;

export const signInBody =  z.object({
    email: z.string().email(),
    password: z.string(),
})

export type signInBody = z.infer<typeof signInBody>;

export const createPostBody = z.object({
    title: z.string(),
    // content: z.object(),
})

export type createPostBody = z.infer<typeof createPostBody>;

export const updatePostBody = z.object({
    title: z.string(),
    subtitle: z.string(),
    content: z.string(),
})

export type updatePostBody = z.infer<typeof updatePostBody>;
