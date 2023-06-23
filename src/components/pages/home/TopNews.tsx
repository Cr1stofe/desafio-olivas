import { format } from 'date-fns';

import topNewsImage from '../../../assets/top-news-image.png'

import Image from "next/image"
import { CardNoticeTopNews } from "./CardNoticeTopNews";
import { Notice } from './ForYou';

export async function TopNews() {
    /* Pegando dados */
    const notices: Notice[] = await fetch('https://www.olivas.digital/wp-json/wp/v2/posts?categories=373')
        .then(response => response.json())


    /* Pegando o texto da primeira notícia */
    const text = notices[0].content.rendered;

    /* Conteúdo da descrição muito grande, então usarei apenas a primeira sentença. */
    const sentences = text.split('.').map(sentence => sentence.trim());
    /* Filtrar as frases vazias resultantes da divisão */
    const nonEmptySentences = sentences.filter(sentence => sentence.length > 0);
    /* Pegar apenas a primeira frase */
    const firstThreeSentences = nonEmptySentences.slice(0, 1);
    /* Juntar em uma única string separada por '. ' */
    const formattedContent = firstThreeSentences.join('. ') + '.';

    /* Pegando as três notícias que serão listadas, a partir da segunda. */
    const threeNotices = notices.slice(1, 4)

    return (
        /* Container principal */
        <div className="bg-green-300 py-12">
            {/* Título e decoração */}
            <div className="flex flex-col gap-4 mx-auto my-0 p-8 max-w-7xl">
                {/* Titulo */}
                <p className="text-gray-50 text-3xl font-semibold">
                    Principais notícias
                </p>
                {/* Decoração */}
                <div className='w-24 h-2 bg-gray-50 rounded-full' />
            </div>

            {/* Container para alinhar duas colunas no desktop */}
            <div className="flex flex-col gap-16 md:grid md:grid-cols-2 md:gap-24 mx-auto items-start my-0 p-8 md:max-w-7xl">

                {/* Container com as três notícias e botão ver mais */}
                <div className="flex flex-col items-center md:justify-between md:max-w-sm">

                    {/* Map das notícias */}
                    <div className="flex flex-col gap-4">
                        {threeNotices.map((notice) => {
                            return (
                                <CardNoticeTopNews key={notice.id} notice={notice} />
                            )
                        })}
                    </div>

                    {/* Botão ver mais */}
                    <button className="flex items-center justify-center px-16 py-2 mt-24 bg-transparent border-[1px] rounded-full border-gray-50 text-gray-50 font-semibold">
                        Ver mais
                    </button>
                </div>

                {/* Container notícia em destaque, sendo esta a primeira do array*/}
                <div className="flex flex-col bg-gray-200 gap-8 max-w-2xl p-8 rounded-ss-[80px]">

                    {/* Div com imagem */}
                    <div className="overflow-hidden">
                        <Image src={topNewsImage} alt="" className="object-cover" />
                    </div>

                    {/* Container com textos */}
                    <div className="flex flex-col items-start gap-4">

                        {/* Tag blog */}
                        <div className="flex items-center justify-center px-12 py-1 text-sm md:text-lg font-bold text-gray-50 bg-gradient-to-r from-rose-500 to-rose-300 rounded-3xl">
                            BLOG
                        </div>

                        {/* Data da notícia */}
                        <p className="text-base text-gray-700">
                            {format(new Date(notices[0].date), 'dd/MM/yyyy')}
                        </p>

                        {/* Título da notícia */}
                        <p className="text-2xl font-semibold text-gray-700">
                            {notices[0].title.rendered}
                        </p>

                        {/* Descrição da notícia */}
                        <p className='text-gray-300'>
                            {formattedContent.slice(3)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )

}