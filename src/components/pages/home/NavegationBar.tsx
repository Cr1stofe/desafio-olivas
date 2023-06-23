import { AiOutlineMail } from 'react-icons/ai'
import { CgSearch } from 'react-icons/cg'

interface NavegationProps {
    direction: string
    gap: string
    color: string
    borderColor: string
}

export function NavegationBar({ direction, gap, color, borderColor }: NavegationProps) {
    return (
        /* Container Principal */
        <div className={`flex flex-${direction} items-center justify-evenly gap-${gap} font-medium text-${color} lg:text-sm lg:justify-center lg:gap-6`}>
            {/* Opção Quem somos */}
            <a href='https://www.olivas.digital/'>
                <p className={`border-b ${borderColor} transition hover:border-green-300`}>
                    Quem somos
                </p>
            </a>
            {/* Opção Metodologia */}
            <a href='https://www.olivas.digital/'>
                <p className={`border-b ${borderColor} transition hover:border-green-300`}>
                    Metodologia
                </p>
            </a>
            {/* Opção Nossas soluções */}
            <a href='https://www.olivas.digital/'>
                <p className={`border-b ${borderColor} transition hover:border-green-300`}>
                    Nossas soluções
                </p>
            </a>
            {/* Opção Conteúdos para você */}
            <a href='https://www.olivas.digital/'>
                <p className={`border-b ${borderColor} transition hover:border-green-300`}>
                    Conteúdos para você
                </p>
            </a>
            {/* Opção Canais de comunicação */}
            <a href='https://www.olivas.digital/'>
                <p className={`border-b ${borderColor} transition hover:border-green-300`}>
                    Canais de comunicação
                </p>
            </a>

            { /* Contact Button */}
            <button className='flex items-center justify-center gap-2 py-2 px-6 bg-gradient-to-r from-green-500 to-green-300 rounded-full text-gray-100'>
                <AiOutlineMail className='h-4 w-4 cursor-pointer' />
                <p className='text-sm'> Fale com especialista </p>
            </button>

            {/* Search */}
            <div className='p-3 bg-gray-400 rounded-full flex items-center justify-center cursor-pointer'>
                <CgSearch className='w-4 h-4 text-blue-600' />
            </div>
        </div>
    )
}