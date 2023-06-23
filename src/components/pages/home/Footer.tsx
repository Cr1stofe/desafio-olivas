import wave from '../../../assets/wave.png'
import halfCircle from '../../../assets/half-circle.png'
import Image from 'next/image'

export function Footer() {
    return (
        <div className='bg-blue-800'>
            <div className="flex items-center justify-between px-56 h-20 text-blue-500 text-xs font-bold">
                <div className="flex gap-2">
                    <p className="pr-2 border-r-2 border-blue-500">
                        Copyright 2022 - Todos os dtireitos reservados
                    </p>
                    <a href="#" className="pr-2 border-r-2 border-blue-500">
                        Política de privacidade
                    </a>
                    <a href="#">
                        Condições Gerais
                    </a>
                </div>
                <div>
                    <p className="font-normal">
                        Desenvolvido por: Cristofe Albuqeurque
                    </p>
                </div>
            </div>


            <div className="">
                <Image src={wave} alt="" className="max-w-sm absolute left-0 top-[3900px]" />
                <Image src={halfCircle} alt="" className="max-w-xs absolute right-0 top-[4200px]" />
            </div>
        </div>
    )
}