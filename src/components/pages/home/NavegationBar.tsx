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
            <a href='#'>
                <p className={`border-b ${borderColor} transition hover:border-orange-300`}>
                    Quem somos
                </p>
            </a>
            {/* Opção Metodologia */}
            <a href='#'>
                <p className={`border-b ${borderColor} transition hover:border-orange-300`}>
                    Metodologia
                </p>
            </a>
            {/* Opção Nossas soluções */}
            <a href='#'>
                <p className={`border-b ${borderColor} transition hover:border-orange-300`}>
                    Nossas soluções
                </p>
            </a>
            {/* Opção Conteúdos para você */}
            <a href='#'>
                <p className={`border-b ${borderColor} transition hover:border-orange-300`}>
                    Conteúdos para você
                </p>
            </a>
            {/* Opção Canais de comunicação */}
            <a href='#'>
                <p className={`border-b ${borderColor} transition hover:border-orange-300`}>
                    Canais de comunicação
                </p>
            </a>
        </div>
    )
}