import { format } from "date-fns";
import { Notice } from "./ForYou"

interface NoticeProps {
    notice: Notice
}

export function CardNoticeTopNews({ notice }: NoticeProps) {
    return (
        /* Container Principal */
        <div className="flex flex-col items-start pt-4 gap-2 border-t-[1px] border-gray-50 cursor-pointer">
            <p className="text-base text-gray-50">
                {format(new Date(notice.date), 'dd/MM/yyyy')}
            </p>
            <div className="flex items-center justify-center px-8 py-1 text-xs font-bold text-gray-50 bg-gradient-to-r from-blue-300 to-blue-500 rounded-3xl">
                BLOG
            </div>
            <p className="text-lg font-semibold text-gray-50">
                {notice.title.rendered}
            </p>
        </div>
    )
}