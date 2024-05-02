'use client'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createLoginSchema } from '@/app/Schemas/AuthSchema'
import { signIn } from 'next-auth/react'
import { useRouter } from "next/navigation";


import { Button, Input, Label } from "@/app/Components/ui"

const FormLogin = () => {

    const [error, setErros] = useState('')
    const router = useRouter();


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(createLoginSchema)
    })


    const onSubmit = handleSubmit(async (data) => {
        const result = await signIn('credentials', {
            email: data.email,
            password: data.password,
            redirect: false
        })
        console.log(result)

        if (!result?.ok) {
            setErros(result.error)
            return null
        }
        router.push("/dashboard");
        router.refresh();
    })

    useEffect(() => {
        setTimeout(() => {
            setErros('')
        }, 4000);
    }, [errors])


    return (
        <form
            onSubmit={onSubmit}
        >
            {
                error && (
                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
                        role='alert'
                    >{error}</div>
                )
            }
            <div className="mt-4">
                <Label>Correo</Label>
                <Input
                    placeholder="Ingresa correo"
                    {...register('email')}
                />
                {
                    errors?.name && (
                        <p className='text-red-500'>
                            {errors.name?.message as string}
                        </p>
                    )
                }
            </div>
            <div className="mt-4">
                <Label>Contraseña</Label>
                <Input
                    placeholder="***********"
                    type='password'
                    {...register('password')}
                />
                {
                    errors?.password && (
                        <p className='text-red-500'>
                            {errors.name?.message as string}
                        </p>
                    )
                }
            </div>
            <div className="m-8">
                <Button type='submit' className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600 mb-7">Iniciar Sesion</Button>
            </div>
        </form>
    )
}

export default FormLogin