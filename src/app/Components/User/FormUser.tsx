'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createUserSchema } from '@/app/Schemas/UserSchema'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import axios from 'axios'
import { Input, Label } from '../ui'
import Select from 'react-select'
import { roles } from '@/routes/sidebarRoutes'



interface Props {
    id: string;
    name: string
}

export default function FormUser({ companys = [], sesion }: any) {
    const router = useRouter()



    const option = companys.map((company: Props) => ({
        value: company.id,
        label: company.name
    }));





    const { register, handleSubmit, setValue, formState: { errors }, watch } = useForm({
        resolver: zodResolver(createUserSchema)
    })

    const onSubmit = handleSubmit(async data => {
        try {
            const res = await axios.post('http://localhost:3000/api/users', data)

            if (res.status == 200) {
                toast.success('Event has been created')
                router.refresh()
            }
        } catch (error) {
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
                    <div className="grid gap-2">
                        <Label htmlFor="last-name">Apellidos</Label>
                        <Input
                            placeholder="Ingresa el nombre apellido"
                            {...register('lastname')}
                        />
                        {
                            errors?.lastname && (
                                <p className='text-red-500'>
                                    {errors.lastname?.message as string}
                                </p>
                            )
                        }
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="first-name">Correo</Label>
                        <Input
                            placeholder="Ingresa el nombre"
                            {...register('email')}
                        />
                        {
                            errors?.email && (
                                <p className='text-red-500'>
                                    {errors.email?.message as string}
                                </p>
                            )
                        }
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="last-name">Contraseña</Label>
                        <Input
                            type='password'
                            placeholder="**************"
                            {...register('password')}
                        />
                        {
                            errors?.password && (
                                <p className='text-red-500'>
                                    {errors.password?.message as string}
                                </p>
                            )
                        }
                    </div>

                    {sesion.user.role != 'admin_company' ?
                        <div className="">
                            < div className="grid gap-2">
                                <Label htmlFor="last-name">Compañia</Label>
                                <Select
                                    options={option}
                                    onChange={(value) => {
                                        setValue('empresa', value.value)


                                    }}


                                />
                                {
                                    errors?.empresas && (
                                        <p className='text-red-500'>
                                            {errors.empresas?.message as string}
                                        </p>
                                    )
                                }
                            </div>
                            <div className="grid gap-2">
                                <Label>Rol</Label>
                                <Select
                                    options={roles}
                                    onChange={(value) => {
                                        setValue('role', value.value)


                                    }}


                                />
                                {
                                    errors?.rol && (
                                        <p className='text-red-500'>
                                            {errors.rol?.message as string}
                                        </p>
                                    )
                                }
                            </div>
                        </div>
                        :
                        null
                    }



                    <div className="flex justify-end items-end">
                        <button type="submit" className=" w-50 mb-6">
                            Guardar
                        </button>
                    </div>
                </div>
            </form >
        </>
    )
}
