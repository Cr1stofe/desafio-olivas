import { CardNotice } from "./CardNotice"
import { format } from 'date-fns';

import personImage from '../../../assets/person.png'
import wave from '../../../assets/wave.png'
import semicirculo from '../../../assets/semicirculo.png'

import Image from "next/image"

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
    const notices: Notice[] = await fetch('https://www.olivas.digital/wp-json/wp/v2/posts?categories=373')
        .then(response => response.json())

    const text = notices[0].content.rendered;
    const sentences = text.split('.').map(sentence => sentence.trim());
    // Filtrar as frases vazias resultantes da divisão
    const nonEmptySentences = sentences.filter(sentence => sentence.length > 0);
    // Pegar apenas as três primeiras frases
    const firstThreeSentences = nonEmptySentences.slice(0, 3);
    // Juntar as três frases em uma única string separada por '. '
    const formattedContent = firstThreeSentences.join('. ') + '.';

    const fiveNotices = notices.slice(1, 6)

    return (
        <div className="pb-28 overflow-hidden">
            <div className="grid grid-cols-2 gap-24 mx-auto my-0 p-8 max-w-7xl">
                <div className="flex flex-col bg-gray-300 gap-8 max-w-2xl p-8">
                    <Image src={personImage} alt="" />

                    <div className="flex flex-col items-start gap-4">
                        <div className="flex items-center justify-center px-12 py-1 text-lg font-bold text-gray-50 bg-rose-400 rounded-3xl">
                            BLOG
                        </div>

                        <p className="text-base text-rose-300">
                            {format(new Date(notices[0].date), 'dd/MM/yyyy')}
                        </p>

                        <p className="text-4xl font-semibold text-gray-700">
                            {notices[0].title.rendered}
                        </p>

                        {formattedContent.slice(3)}
                    </div>
                </div>


                <div className="flex flex-col items-start justify-between max-w-md">
                    <div className="flex flex-col gap-4">
                        <p className="text-rose-300 text-lg font-semibold">
                            Outras postagens:
                        </p>
                        <div className="flex flex-col gap-4">
                            {fiveNotices.map((notice) => {
                                return (
                                    <CardNotice key={notice.id} notice={notice}/>
                                )
                            })}
                        </div>
                    </div>

                    <button className="flex items-center justify-center px-16 py-2 bg-transparent border-[1px] rounded-full border-rose-300 text-rose-300 font-semibold">
                        Ver mais
                    </button>
                </div>
            </div>

            <div className="">
                <Image src={semicirculo} alt="" className="max-w-sm absolute left-[calc(270px*-1)] top-[1600px]" />
                <Image src={wave} alt="" className="max-w-sm absolute right-0 top-[1800px]"/>
            </div>
        </div>
    )

}