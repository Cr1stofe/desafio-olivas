import Image from 'next/image'

import heroImage from '../../../assets/hero-image.png'
import circle from '../../../assets/circle.png'

export function Hero() {
    return (
        /* Hero Container */
        <div className='bg-gray-100 flex flex-col gap-20 pb-40'>
            {/* Images */}
            <div>
                <Image src={heroImage} alt='' />
                <Image src={circle} alt='' className='absolute right-24 bottom-1/4 md:w-[250px] md:h-[250px]'/>
            </div>

            {/* Title */}
            <div className='flex flex-col items-center justify-center gap-8 p-4 mx-auto my-0'>
                <p className='text-4xl font-bold text-blue-950'> Conteúdos <span className='text-blue-400'> para Você </span> </p>
                <div className='w-24 h-2 bg-blue-400 rounded-full' />
            </div>
        </div>
    )
}