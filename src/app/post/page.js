"use client"

import Button from "@/components/ui/button/Buttons"
import Image from "next/image"
import inndofoumLogo from "../../../public/images/indoforum-logo.svg"
import {
    MessageCircleMoreIcon,
    ThumbsUpIcon,
    Share2Icon
} from "lucide-react"

export default function PostPage() {
    return (
        <>
            <article className="w-full flex flex-col bg-text-color max-h-56 px-2 shadow-lg">
                <div className="flex gap-3 py-2">
                    <div className="w-11 h-11 overflow-hidden rounded-full">
                        <Image 
                            src={inndofoumLogo}
                            alt="indoforum-logo"
                            width={50}
                            height={50}
                        />
                    </div>
                    <div className="flex flex-col justify-between gap-0">
                        <h2 className="text-base font-m-semibold">Indoforum Media</h2>
                        <div className="flex items-center gap-2">
                            <h3 className="text-sm font-m-semibold">Farrel Irawan</h3>
                            <hr className="h-2 w-2 bg-primary-color border-none rounded-full"/>
                            <h3 className="text-sm font-m-semibold text-gray-500">2 Juni 2025</h3>
                        </div>
                    </div>
                </div>
                {/* postcard parent */}
                <div className="flex flex-col h-full overflow-auto w-full bg-text-color py-1 border-y border-y-gray-300">
                    {/* postcard item */}
                    <p className="text-base font-m-medium">hallo dunia, dari indoforum.</p>
                    <p className="text-base font-m-medium">hallo dunia, dari indoforum.</p>
                    <p className="text-base font-m-medium">hallo dunia, dari indoforum.</p>
                </div>
                <div className="w-full py-2">
                    <ul className="w-full flex items-center justify-around gap-3">
                        <li>
                            <Button
                                link="/post"
                                buttonStyle="w-full"
                                linkStyle="flex items-center gap-2"
                            >
                                <ThumbsUpIcon className="w-6 h-6" />
                                <p className="text-sm font-m-semibold capitalize">like</p>
                            </Button>
                        </li>
                        <li>
                            <Button
                                link="/post"
                                buttonStyle="w-full"
                                linkStyle="flex items-center gap-2"
                            >
                                <MessageCircleMoreIcon className="w-6 h-6" />
                                <p className="text-sm font-m-semibold capitalize">comments</p>
                            </Button>
                        </li>
                        <li>
                            <Button
                                link="/post"
                                buttonStyle="w-full"
                                linkStyle="flex items-center gap-2"
                            >
                                <Share2Icon className="w-6 h-6" />
                                <p className="text-sm font-m-semibold capitalize">share</p>
                            </Button>
                        </li>
                    </ul>
                </div>
            </article>
        </>
    )
}