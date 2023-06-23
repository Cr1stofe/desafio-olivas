import Image from "next/image"
import { Notice } from "./ForYou"
import { Slider } from "./Slider"
import shape from '../../../assets/Shape.png'

export async function Cases() {
    /* Pegando dados */
    const notices: Notice[] = await fetch('https://www.olivas.digital/wp-json/wp/v2/posts?categories=373')
        .then(response => response.json())

    return (
        /* Container principal */
        <div className="p-16 md:p-24">
            {/* Imagem flutuante */}
            <Image src={shape} alt="" className="hidden md:absolute md:left-0 md:top-[2750px] lg:block" />

            {/* Título e decoração */}
            <div className='flex flex-col items-center justify-center gap-8 px-4 pb-16 md:pb-40 mx-auto my-0'>
                {/* Título */}
                <p className='text-4xl font-bold text-blue-950'> Cases </p>
                {/* Decoração */}
                <div className='w-24 h-2 bg-blue-400 rounded-full' />
            </div>

            {/* Slider e botão ver mais */}
            <div className="flex flex-col items-center gap-36">
                {/* Componente slider */}
                <Slider notices={notices} />
                {/* Botão ver mais */}
                <button className="mx-auto flex items-center justify-center px-16 py-2 bg-transparent border-[1px] rounded-full border-rose-300 text-rose-300 font-semibold md:mx-0">
                    Ver mais
                </button>
            </div>
        </div>
    )
} 