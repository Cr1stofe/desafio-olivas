import { format } from "date-fns";
import { Notice } from "./ForYou"

interface NoticeProps {
    notice: Notice
}

export function CardNotice({ notice }: NoticeProps) {
    return (
        /* Container Principal */
        <div className="flex flex-col items-start pb-4 gap-2 border-b-[1px] border-gray-500 cursor-pointer">
            {/* Tag Blog */}
            <div className="flex items-center justify-center px-8 py-1 text-xs font-bold text-gray-50 bg-gradient-to-r from-rose-500 to-rose-300 rounded-3xl">
                BLOG
            </div>
            {/* Titulo noticia */}
            <p className="text-xl font-semibold text-gray-900">
                {notice.title.rendered}
            </p>
            {/* Data noticia */}
            <p className="text-xs text-rose-300">
                {format(new Date(notice.date), 'dd/MM/yyyy')}
            </p>
        </div>
    )
}