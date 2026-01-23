import { z } from "zod";

export const CatSchema = z.object({
    name: z.string()
        .trim()  // Removes Whitespace
        .min(1)
        .max(60, { 
            message: "Name must be 60 characters or less!" 
        })
});

export type CatType = z.infer<typeof CatSchema>;

export const ProdSchema = z.object({
    name: z.string().min(1).max(120, { 
            message: "Name must be 120 characters or less!" 
        }),
    description: z.string().trim(),
    price: z.number(),
    currency: z.string().min(1).max(5).default("USD"),
    quantity: z.number().default(0),
    active: z.boolean().default(true),
    category_id: z.number()
});

export type ProdType = z.infer<typeof ProdSchema>;


