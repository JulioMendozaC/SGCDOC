'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createCompanySchema } from '@/app/Schemas/CompanySchema'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import axios from 'axios'
import { Input, Label } from '../ui'
import { useState } from 'react'


export default function FormCompany() {

    const router = useRouter()
    
    const [messgeError, setMessgeError] = useState('')

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(createCompanySchema)
    })

    const onSubmit = handleSubmit(async data => {

        try {
            const res = await axios.post('http://localhost:3000/api/company', data)

            if (res.status == 200) {
                toast.success('Empresa creada')
                router.refresh()
            }
        } catch (error) {
            console.log(error)
        }

    })

    return (
        <>
            <form
                onSubmit={onSubmit}>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="first-name">Nombre</Label>
                        <Input
                            placeholder="Ingresa el nombre"
                            {...register('name')}
                        />
                        {
                            errors?.name && (
                                <p className='text-red-500'>
                                    {errors.name?.message as string}
                                </p>
                            )
                        }
                    </div>
                   
                    <div className="flex justify-end items-end">
                        <button type="submit" className=" w-50 mb-6">
                            Guardar
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}