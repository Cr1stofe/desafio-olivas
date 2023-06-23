import { CardNotice } from "./CardNotice"
import { format } from 'date-fns';

import personImage from '../../../assets/person.png'
import wave from '../../../assets/wave.png'
import semicirculo from '../../../assets/semicirculo.png'

import Image from "next/image"

/* Interface modelo de notícia */
export interface Notice {
    id: number
    tag: string
    title: {
        rendered: string
    }
    content: {
        rendered: string
    }
    excerpt: {
        rendered: string
    }
    date: string
    template: string
}

export async function ForYou() {
    /* Pegando dados */
    const notices: Notice[] = await fetch('https://www.olivas.digital/wp-json/wp/v2/posts?categories=373')
        .then(response => response.json())

    /* Pegando o texto da primeira notícia */
    const text = notices[0].content.rendered;

    /* Conteúdo da descrição muito grande, então usarei as 3 primeiras sentenças. */
    const sentences = text.split('.').map(sentence => sentence.trim());
    /* Filtrar as frases vazias resultantes da divisão */
    const nonEmptySentences = sentences.filter(sentence => sentence.length > 0);
    /* Pegar apenas as três primeiras frases */
    const firstThreeSentences = nonEmptySentences.slice(0, 3);
    /* Juntar as três frases em uma única string separada por '. ' */
    const formattedContent = firstThreeSentences.join('. ') + '.';

    /* Array das 5 notícias que são listadas, mas a partir da segunda, pois a primeira fica em destaque. */
    const fiveNotices = notices.slice(1, 6)

    return (
        /* Container principal */
        <div className="pb-12 md:pb-28">

            {/* Container para alinhas as duas colunas no desktop */}
            <div className="flex flex-col gap-12 md:grid md:grid-cols-2 md:gap-24 mx-auto my-0 p-8 md:max-w-7xl">
                {/* Container noticia em destaque */}
                <div className="flex flex-col bg-gray-200 gap-8 max-w-2xl p-4 md:p-8">
                    {/* Imagem principal */}
                    <Image src={personImage} alt="" />

                    {/* Div com os textos */}
                    <div className="flex flex-col items-start gap-4">
                        {/* Tag blog */}
                        <div className="flex items-center justify-center px-12 py-1 text-sm md:text-lg font-bold text-gray-50 bg-gradient-to-r from-rose-500 to-rose-300 rounded-3xl">
                            BLOG
                        </div>

                        {/* Data do post */}
                        <p className="text-base text-rose-300">
                            {format(new Date(notices[0].date), 'dd/MM/yyyy')}
                        </p>

                        {/* Titulo do post */}
                        <p className="text-2xl md:text-4xl font-semibold text-gray-700">
                            {notices[0].title.rendered}
                        </p>

                        {/* Primeiras três sentenças do conteúdo do post, Slice é para tirar <p/> do começo do texto */}
                        <p className="text-gray-300"> 
                            {formattedContent.slice(3)} 
                        </p>
                    </div>
                </div>

                {/* Container de outras postagens e botão*/}
                <div className="flex flex-col items-start justify-between gap-12 md:gap-0 md:max-w-md">
                    
                    {/* Outras postagens */}
                    <div className="flex flex-col gap-4">
                        {/* Titulo */}
                        <p className="text-rose-300 text-lg font-semibold">
                            Outras postagens:
                        </p>
                        {/* Map de notícias */}
                        <div className="flex flex-col gap-4">
                            {fiveNotices.map((notice) => {
                                return (
                                    <CardNotice key={notice.id} notice={notice}/>
                                )
                            })}
                        </div>
                    </div>

                    {/* Botão de ver mais */}
                    <button className="mx-auto flex items-center justify-center px-16 py-2 bg-transparent border-[1px] rounded-full border-rose-300 text-rose-300 font-semibold md:mx-0">
                        Ver mais
                    </button>
                </div>
            </div>

            {/* Container de imagens flutuantes */}
            <div className="hidden lg:block">
                <Image src={semicirculo} alt="" className="max-w-xs xl:max-w-sm absolute left-[calc(270px*-1)] top-[1600px]" />
                <Image src={wave} alt="" className="max-w-sm absolute right-0 top-[1800px]"/>
            </div>
        </div>
    )

}