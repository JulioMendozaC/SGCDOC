import Image from "next/image"
import FormLogin from './FormLogin';

const ContentLogin = () => {
    return (
        <div className="flex items-center justify-center h-screen w-ful bg-slate-200 " >
            <div className="flex bg-gray-200 rounded-lg overflow-hidden mx-auto max-w-sm w-full lg:max-w-4xl justify-center shadow-2xl">
                <div className=" contenedorImagen hidden lg:block lg:w-1/2 bg-cover relative brightness-50">
                    <Image
                        src="/Fondo.avif"
                        layout="fill"
                        objectFit="cover"

                        alt="Picture of the author"
                    />
                </div>
                <div className="w-full p-8 lg:w-1/2">
                    <p className="text-xl text-gray-600 text-center m-6">¡Bienvenido!</p>
                    <div className="px-4 py-3 flex justify-center m-5">
                        <Image
                            src="/next.svg"
                            width={100}
                            height={100}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                        <a href="#" className="text-xs text-center text-gray-500 uppercase">Ingrese su datos</a>
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                    </div>
                    <FormLogin />
                </div>
            </div>
        </div>
    )
}

export default ContentLogin
