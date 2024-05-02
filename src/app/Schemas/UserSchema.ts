import { optional, z } from 'zod'

export const createUserSchema = z.object({
    name: z.string().min(3, {
        message: 'El nombre deben tener almenos 3 caracteres'
    }).max(255),
    lastname: z.string().min(3, {
        message: 'Los apellidos  deben tener almenos 3 caracteres'
    }).max(255),
    email: z.string().email({
        message: 'Correo no valido'
    }),
    password: z.string().min(5, {
        message: 'La contraseña deben tener almenos 5 caracteres'
    }).max(255),
    role: z.string().optional(),
    empresa: z.number().optional()
})
