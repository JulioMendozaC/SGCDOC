import ContentCompany from "@/app/Components/Empresas/ContentCompany"
import { getServerSession } from 'next-auth';

import { authOptions } from '@/libs/authOptions';
import { redirect } from 'next/navigation';

const EmpresasPage = async() => {
  const sesion = await getServerSession(authOptions)

  if (!sesion?.user.role.includes('admin' || 'admin_company')) {
    redirect('/dashboard/Inicio')
  }
  return (
    <div>
      <ContentCompany />
    </div>
  )
}

export default EmpresasPage
