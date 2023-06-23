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
    const [sliderRef, instanceRef] = useKeenSlider({
        slides: {
            perView: 1,
            spacing: 80,
        },
        breakpoints: {
            '(min-width: 500px)': {
                slides: {
                    perView: 2,
                }
            },
            '(min-width: 700px)': {
                slides: {
                    perView: 3,
                }
            },
            '(min-width: 1024px)': {
                slides: {
                    perView: 4,
                }
            },
            '(min-width: 1440px)': {
                slides: {
                    perView: 3,
                    spacing: 96,
                }
            },
        },
    })

    return (
        <div className="flex items-center justify-center">
            <IoIosArrowBack className="w-12 h-12 text-blue-300 absolute left-16 cursor-pointer" onClick={() => instanceRef.current?.prev()} />

            <div ref={sliderRef} className="keen-slider max-w-6xl mx-auto my-0">
                {notices.map((notice) => {
                    const description = getText({
                        content: notice.content,
                        quantity: 1,
                        initial: 0,
                    });

                    return (
                        <div key={notice.id} className="keen-slider__slide flex flex-col items-start justify-between gap-4">
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center justify-center bg-gray-500 text-2xl h-80 w-80 rounded-ss-[80px]">
                                    Imagem
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-lg text-gray-700 font-semibold">
                                        {notice.title.rendered}
                                    </p>
                                    <p className="text-gray-600">
                                        {`${description}.`}
                                    </p>
                                </div>
                            </div>

                            <button className="flex items-center justify-end px-12 py-2 font-bold bg-rose-300 text-gray-50 border-[1px] rounded-full">
                                Saiba mais
                            </button>
                        </div>
                    )
                })}
            </div>

            <IoIosArrowForward className="w-12 h-12 text-blue-300 absolute right-16 cursor-pointer" onClick={() => instanceRef.current?.next()} />
        </div>
    )
}