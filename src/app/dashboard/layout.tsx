"use client";

import '../globals.css'
import NavBar from '../Components/dasboard/NavBar';
import SideBar from '../Components/dasboard/SideBar';
import { useSession } from "next-auth/react";
import { redirect } from 'next/navigation';



const layout = ({ children, }: { children: React.ReactNode }) => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: session, status } = useSession();


  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (!session) {
    return redirect('/auth/login')
  }


  return (
    <div>

      <SideBar />

      <div className="xl:pl-72">
        <NavBar />

        <main>
          {children}
        </main>
      </div>
    </div>
  )
}

export default layout