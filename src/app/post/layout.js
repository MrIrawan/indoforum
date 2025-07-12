"use client"

import Image from "next/image"
import indoforumLogo from "../../../public/images/indoforum-logo.svg"
import Button from "@/components/ui/button/Buttons"
import {
    SearchIcon,
    HomeIcon,
    MessageSquareTextIcon,
    UsersRoundIcon,
    MessageCircleQuestionIcon
} from "lucide-react"
import SearchBar from "@/components/container/SearchBar/SearchBar"
import IconList from "@/components/container/IconList/IconList"

export default function PostLayout({ children }) {
    return (
        <>
        <div className="w-full h-10 bg-white flex items-center gap-2 px-3 py-2">
            <Image
                src={indoforumLogo}
                alt="indoforum-logo"
                width={30}
                height={30}
            />
            <h4 className="text-base font-m-bold">Indoforum | discuss and share.</h4>
        </div>
            <div className="w-full h-16 bg-gray-200">
                <IconList 
                    listStyle="w-full flex items-center justify-around gap-2 py-1.5 h-full"
                />
            </div>
            {children}
        </>
    )
}