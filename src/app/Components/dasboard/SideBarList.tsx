import Link from "next/link";
import { classNames } from "@/libs/classNames";
import { Button } from "@/app/Components/ui";
import { dashboardRoutes } from "@/routes/sidebarRoutes";

import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

const SideBarList = () => {

    const pathname = usePathname();
    const { data: session } = useSession();

    return (
        <ul role="list" className="-mx-2 space-y-1">
            {dashboardRoutes.map(
                (item) =>
                    item.roles.includes(session!.user.role) && (
                        <li key={item.text}>
                            <Link
                                href={item.href}
                                className={classNames(
                                    pathname === item.href
                                        ? "bg-gray-800 text-white"
                                        : "text-gray-400 hover:text-white hover:bg-gray-800",
                                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                )}
                            >
                                <item.icon
                                    className="h-6 w-6 shrink-0"
                                    aria-hidden="true"
                                />
                                {item.text}
                            </Link>
                        </li>
                    )
            )}

            <li>
                <Button onClick={() => signOut()}>Cerrar sesión</Button>
            </li>
        </ul>
    )
}

export default SideBarList
