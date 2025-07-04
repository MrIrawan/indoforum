"use client"

import Image from "next/image"
import fluidImage from "../../../public/images/fluid.jpg"
import Button from "@/components/ui/button/Buttons"
import {
    SearchIcon,
    HomeIcon,
    MessageSquareTextIcon,
    UsersRoundIcon,
    MessageCircleQuestionIcon
} from "lucide-react"

export default function PostLayout({ children }) {
    return (
        <>
            <header className="w-full h-16">
                <nav className="lg:container lg:mx-auto h-full flex justify-between items-center p-4">
                    {/* search bar */}
                    <div className="w-[85%] flex items-center">
                        <form className="w-full flex items-center relative">
                            <input 
                                type="search" 
                                name="search-col" 
                                id="search-col" 
                                className="ring-2 rounded-3xl py-1.5 w-full px-3 font-m-medium overflow-hidden placeholder:font-m-medium"
                                placeholder="Cari sesuatu..."
                            />
                            <Button
                                buttonStyle="absolute right-2.5 top-1/2 -translate-y-1/2"
                            >
                                <SearchIcon className="w-6 h-6"/>
                            </Button>
                        </form>
                    </div>
                    {/* users profile icon */}
                    <div className="w-10 h-10 ring-2 rounded-full overflow-hidden">
                        <Button
                            link="/profile/123"
                            buttonStyle="w-full h-full"
                        >
                            <Image 
                                src={fluidImage}
                                className="w-full h-full object-cover"
                                alt="user profile icon"
                            />
                        </Button>
                    </div>
                </nav>
            </header>
            <div className="w-full h-10 bg-gray-200">
                <ul className="w-full flex items-center justify-between px-10 gap-4 h-full">
                    <li>
                        <Button
                            link="/post"
                            buttonStyle="flex items-center gap-2"
                        >
                            <HomeIcon className="w-6 h-6"/>
                        </Button>
                    </li>
                    <li>
                        <Button
                            link="/forums"
                            buttonStyle="flex items-center gap-2"
                        >
                            <MessageSquareTextIcon className="w-6 h-6"/>
                        </Button>
                    </li>
                    <li>
                        <Button
                            link="/following"
                            buttonStyle="flex items-center gap-2"
                        >
                            <UsersRoundIcon className="w-6 h-6"/>
                        </Button>
                    </li>
                    <li>
                        <Button
                            link="/questions"
                            buttonStyle="flex items-center gap-2"
                        >
                            <MessageCircleQuestionIcon className="w-6 h-6"/>
                        </Button>
                    </li>
                </ul>
            </div>
            {children}
        </>
    )
}