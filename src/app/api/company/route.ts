import prisma from "@/libs/prisma"
import { NextResponse } from "next/server"


export const POST = async (request: Request) => {
    const data = await request.json()


    await prisma.empresas.create({
        data: {
            name: data.name,
        }
    })
    return NextResponse.json('Empresa creada')
}

