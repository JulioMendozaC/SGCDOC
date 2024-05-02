import { z } from 'zod'

export const createCompanySchema = z.object({
    name: z.string().min(3, {
        message: 'El nombre deben tener almenos 3 caracteres'
    }).max(255),

})
