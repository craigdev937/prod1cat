import { z } from "zod";

export const ProdSchema = z.object({
    name: z.string().min(1).max(120, { 
            message: "Name must be 120 characters or less!" 
        }),
    description: z.string().trim(),
    image: z.string(),
    price: z.string(),
    currency: z.string().min(1).max(5),
    quantity: z.number(),
    active: z.boolean(),
    category: z.object({
        id: z.number(),
        name: z.string()
    })
});

export type ProdType = z.infer<typeof ProdSchema>;


