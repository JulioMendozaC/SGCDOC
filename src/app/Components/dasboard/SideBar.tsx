"use client";
import Image from 'next/image';



import SideBarList from './SideBarList';

const SideBar = () => {


    
    return (
        <>
            {/* Static sidebar for desktop */}
            <div className="hidden xl:fixed xl:inset-y-0 xl:z-50 xl:flex xl:w-72 xl:flex-col  border-white/5 bg-gray-900 ">
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-black/10 px-6 ring-1 ring-white/5">
                    <div className="flex h-16 shrink-0 items-center">
                        <Image
                            className="h-8 w-auto"
                            src="/next.svg"
                            alt="Your Company"
                            width={300}
                            height={300}
                        />
                    </div>
                    <nav className="flex flex-1 flex-col">
                        <ul role="list" className="flex flex-1 flex-col gap-y-7">
                            <li>
                            <SideBarList />
                            </li>
                            <li>
                                <div className="text-xs font-semibold leading-6 text-gray-400">
                                    Your teams
                                </div>
                                {/* <ul role="list" className="-mx-2 mt-2 space-y-1">
                  {teams.map((team) => (
                    <li key={team.name}>
                      <a
                        href={team.href}
                        className={classNames(
                          team.current
                            ? "bg-gray-800 text-white"
                            : "text-gray-400 hover:text-white hover:bg-gray-800",
                          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                        )}
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                          {team.initial}
                        </span>
                        <span className="truncate">{team.name}</span>
                      </a>
                    </li>
                  ))}
                </ul> */}
                            </li>
                            <li className="-mx-6 mt-auto">
                                <a
                                    href="#"
                                    className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800"
                                >
                                    <Image
                                        className="h-8 w-auto"
                                        src="/next.svg"
                                        alt="Your Company"
                                        width={300}
                                        height={300}
                                    />
                                    <span className="sr-only">Your profile</span>
                                    {/* <span aria-hidden="true">{session?.user.name}</span> */}
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default SideBar
