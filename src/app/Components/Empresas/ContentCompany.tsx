import prisma from '@/libs/prisma'
import { columns } from './colums'

import Table from '@/app/Components/ui/table'
import FormCompany from './FormCompany'



const ContentCompany = async () => {

    const getData: any = async () => {
        try {
            const data = await prisma.empresas.findMany()
            return data.reverse()
        } catch (error) {
            console.log(error)
        }
    }


    const Tabledata = await getData()


    return (
        <div>
            <Table Tabledata={Tabledata} columns={columns}>
                <FormCompany />
            </Table>
        </div>
    )
}

export default ContentCompany