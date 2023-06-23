import Image from "next/image"
import { Notice } from "./ForYou"
import { Slider } from "./Slider"
import shape from '../../../assets/Shape.png'

export async function Cases() {
    const notices: Notice[] = await fetch('https://www.olivas.digital/wp-json/wp/v2/posts?categories=373')
        .then(response => response.json())


    return (
        <div className="p-24">
            <Image src={shape} alt="" className="absolute left-0 top-[2750px]"/>
            <div className='flex flex-col items-center justify-center gap-8 px-4 pb-40 mx-auto my-0'>
                <p className='text-4xl font-bold text-blue-950'> Cases </p>
                <div className='w-24 h-2 bg-blue-400 rounded-full' />
            </div>

            <div className="flex flex-col items-center gap-16">
                <Slider notices={notices} />
                <button className="flex items-center justify-center px-16 py-2 bg-transparent border-[1px] rounded-full border-rose-300 text-rose-300 font-semibold">
                    Ver mais
                </button>
            </div>
        </div>
    )
} 