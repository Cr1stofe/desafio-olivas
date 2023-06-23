"use client"

import { useKeenSlider } from "keen-slider/react"
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

import 'keen-slider/keen-slider.min.css'
import { Notice } from "./ForYou"
import { getText } from "@/utils/getText"

interface NoticeProps {
    notices: Notice[]
}

export function Slider({ notices }: NoticeProps) {
    /* Slider com biblioteca keen slider */
    const [sliderRef, instanceRef] = useKeenSlider({
        slides: {
            perView: 1,
            spacing: 0,
        },
        breakpoints: {
            '(min-width: 930px)': {
                slides: {
                    perView: 2,
                    spacing: 0,
                }
            },
            '(min-width: 1280px)': {
                slides: {
                    perView: 3,
                    spacing: 96,
                }
            },
        },
    })

    return (
        /* Container principal */
        <div className="flex items-center justify-center">
            {/* Seta esquerda */}
            <IoIosArrowBack className="w-12 h-12 text-blue-300 relative top-[350px] left-32 lg:top-14 lg:mr-8 lg:left-0 cursor-pointer" onClick={() => instanceRef.current?.prev()} />

            {/* Container Slider */}
            <div ref={sliderRef} className="keen-slider max-w-xs md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto my-0">

                {/* Map de notícias */}
                {notices.map((notice) => {
                    /* Pegando o conteúdo da notícia e formatando corretamente */
                    const description = getText({
                        content: notice.content,
                        quantity: 1,
                        initial: 0,
                    });

                    return (
                        /* Container de cada notícia */
                        <div key={notice.id} className="keen-slider__slide flex flex-col items-center lg:items-start justify-between gap-4 p-4">
                            
                            {/* 'Imagem' e textos */}
                            <div className="flex flex-col gap-4 pb-6 md:pb-0">
                                
                                {/* Lugar para imagem */}
                                <div className="flex items-center justify-center bg-gray-200 text-2xl h-80 w-80 rounded-ss-[80px]">
                                    Imagem
                                </div>

                                {/* Titulo e descrição */}
                                <div className="flex flex-col gap-2 max-w-[300px]">
                                    {/* Titulo */}
                                    <p className="text-lg text-gray-700 font-semibold">
                                        {notice.title.rendered}
                                    </p>
                                    {/* Descrição */}
                                    <p className="text-gray-600">
                                        {`${description}.`}
                                    </p>
                                </div>
                            </div>

                            {/* Botão ver mais */}
                            <button className="flex items-center justify-end px-12 py-2 font-bold bg-rose-300 text-gray-50 border-[1px] rounded-full">
                                Saiba mais
                            </button>
                        </div>
                    )
                })}
            </div>

            {/* Seta direita */}
            <IoIosArrowForward className="w-12 h-12 text-blue-300 relative top-[350px] right-32 lg:top-14 lg:mr-8 lg:right-0 cursor-pointer" onClick={() => instanceRef.current?.next()} />
        </div>
    )
}