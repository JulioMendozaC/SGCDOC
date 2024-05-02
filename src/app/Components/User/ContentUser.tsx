import prisma from '@/libs/prisma'

import FormUser from "./FormUser"
import Table from '@/app/Components/ui/table'

import { columns } from './colums'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/libs/authOptions'


const ContentUser = async () => {

    const sesion = await getServerSession(authOptions)
    console.log(sesion?.user)

    const getData: any = async () => {
        try {
            if (sesion?.user.role == 'admin') {
                const data = await prisma.users.findMany()
                return data.reverse()
            }
            if (sesion?.user.role != 'admin') {
                const data = await prisma.users.findMany({
                    where: {
                        empresaId: sesion?.user.empresa
                    }
                })
                return data.reverse()
            }
        } catch (error) {
            console.log(error)
        }
    }

    const getCompanys: any = async () => {
        const companys = await prisma.empresas.findMany()
        return companys
    }



    const Tabledata = await getData()
    const companys = await getCompanys()

    return (
        <div>
            <Table Tabledata={Tabledata} columns={columns}>
                <FormUser companys={companys} sesion={sesion} />
            </Table>
        </div>
    )
}

export default ContentUser