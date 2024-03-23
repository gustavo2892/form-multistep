import * as z from "zod";

export const schema = z
  .object({
    name: z
      .string()
      .min(1)
      .max(50, "O máximo de caracteres é 50, por favor corrigir"),
    age: z.string().min(1),

    street: z.string().min(1),
    streetNumber: z.string().min(1),
    city: z.string().min(1),

    mobileNumber: z.string().min(1),
    telNumber: z.string().min(1),
  })
  .required();