import { format } from 'date-fns';

import topNewsImage from '../../../assets/top-news-image.png'

import Image from "next/image"
import { CardNoticeTopNews } from "./CardNoticeTopNews";

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

export async function TopNews() {
    const notices: Notice[] = await fetch('https://www.olivas.digital/wp-json/wp/v2/posts?categories=373')
        .then(response => response.json())

    const text = notices[0].content.rendered;
    const sentences = text.split('.').map(sentence => sentence.trim());
    // Filtrar as frases vazias resultantes da divisão
    const nonEmptySentences = sentences.filter(sentence => sentence.length > 0);
    // Pegar apenas as três primeiras frases
    const firstThreeSentences = nonEmptySentences.slice(0, 1);
    // Juntar as três frases em uma única string separada por '. '
    const formattedContent = firstThreeSentences.join('. ') + '.';

    const threeNotices = notices.slice(1, 4)

    return (
        <div className="bg-green-300 py-12">
            <div className="flex flex-col gap-4 mx-auto my-0 p-8 max-w-7xl">
                <p className="text-gray-50 text-3xl font-semibold">
                    Principais notícias
                </p>
                <div className='w-24 h-2 bg-gray-50 rounded-full' />
            </div>

            <div className="grid grid-cols-2 gap-24 mx-auto items-start my-0 p-8 max-w-7xl">
                <div className="flex flex-col items-start justify-between max-w-sm">

                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-4">
                            {threeNotices.map((notice) => {
                                return (
                                    <CardNoticeTopNews key={notice.id} notice={notice} />
                                )
                            })}
                        </div>
                    </div>

                    <button className="flex items-center justify-center px-16 py-2 mt-24 bg-transparent border-[1px] rounded-full border-gray-50 text-gray-50 font-semibold">
                        Ver mais
                    </button>
                </div>

                <div className="flex flex-col bg-gray-300 gap-8 max-w-2xl p-8 rounded-ss-[80px]">
                    <div className=" overflow-hidden">
                        <Image src={topNewsImage} alt="" className="object-cover" />
                    </div>

                    <div className="flex flex-col items-start gap-4">
                        <div className="flex items-center justify-center px-12 py-1 text-lg font-bold text-gray-50 bg-rose-400 rounded-3xl">
                            BLOG
                        </div>

                        <p className="text-base text-rose-300">
                            {format(new Date(notices[0].date), 'dd/MM/yyyy')}
                        </p>

                        <p className="text-2xl font-semibold text-gray-700">
                            {notices[0].title.rendered}
                        </p>

                        {formattedContent.slice(3)}
                    </div>
                </div>
            </div>
        </div>
    )

}