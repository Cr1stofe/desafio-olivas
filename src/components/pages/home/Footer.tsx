import wave from '../../../assets/wave.png'
import halfCircle from '../../../assets/half-circle.png'
import Image from 'next/image'

export function Footer() {
    return (
        /* Container principal */
        <div className='bg-blue-900'>
            {/* Container de textos */}
            <div className="flex flex-col gap-8 md:gap-0 lg:flex-row items-center justify-between p-4 lg:px-56 min-h-20 text-blue-700 text-xs font-bold">
                
                {/* Informações */}
                <div className="flex flex-col items-center md:flex-row gap-2">
                    <p className="md:pr-1 md:border-r-[1px] border-blue-500">
                        Copyright 2022 - Todos os dtireitos reservados
                    </p>
                    <a href="#" className="md:pr-1 md:border-r-[1px] border-blue-500">
                        Política de privacidade
                    </a>
                    <a href="#">
                        Condições Gerais
                    </a>
                </div>

                {/* Dev by */}
                <div>
                    <p className="font-normal">
                        Desenvolvido por: Cristofe Albuquerque
                    </p>
                </div>
            </div>

            {/* Imagens flutuantes */}
            <div className="hidden lg:block">
                <Image src={wave} alt="" className="max-w-sm absolute left-0 top-[3900px]" />
                <Image src={halfCircle} alt="" className="max-w-xs absolute right-0 top-[4240px]" />
            </div>
        </div>
    )
}