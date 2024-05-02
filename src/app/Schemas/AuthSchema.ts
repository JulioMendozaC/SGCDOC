import { z } from 'zod'
export const createLoginSchema = z.object({
  
    email: z.string().email({
        message: 'Correo no valido'
    }),
    password: z.string().min(5, {
        message: 'La contraseña deben tener almenos 5 caracteres'
    }).max(255),
})
