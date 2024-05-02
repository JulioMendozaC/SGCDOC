import prisma from "@/libs/prisma"
import { NextResponse } from "next/server"
import bcrypt from 'bcrypt'
import { getServerSession } from "next-auth"
import { authOptions } from "@/libs/authOptions"





export const POST = async (request: Request) => {
    const data = await request.json()

    data.password = await bcrypt.hash(data.password, 10)

    const sesion = await getServerSession(authOptions)
    if (!sesion) NextResponse.json({ error: 'Unauthorization' }, { status: 401 })


    if (sesion?.user.role == 'admin') {
        await prisma.users.create({
            data: {
                name: data.name,
                lastname: data.lastname,
                email: data.email,
                password: data.password,
                role: data.role,
                empresaId: data.empresa
            }
        })
    }
    if (sesion?.user.role == 'admin_company') {
        await prisma.users.create({
            data: {
                name: data.name,
                lastname: data.lastname,
                email: data.email,
                password: data.password,
                empresaId: sesion.user.empresa
            }
        })
    }
    return NextResponse.json('Usuario Creado')



}

