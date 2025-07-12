"use client"

import { useState } from "react";

import Button from "@/components/ui/button/Buttons";
import { 
    ThumbsUpIcon,
    ThumbsDownIcon,
    MessageCircleIcon,
    ShareIcon
} from "lucide-react";

export default function CardFooter() {

    const [like, setLike] = useState(false);

    return (
        <div className="h-12 bg-white flex flex-col gap-1 px-3 py-1.5">
            <ul className="w-full h-full flex items-center justify-between">
                <li className="flex items-center">
                    <div className="w-full flex items-center">
                        <Button
                            buttonStyle="bg-white ring-2 py-1 px-1 rounded-l-full flex ietms-center justify-around gap-2"
                        >
                            <span 
                                className="w-full flex items-center px-2 gap-2"
                                onClick={() => setLike(!like)}
                            >
                                <ThumbsUpIcon className={`w-5 h-5 transition-colors duration-100 ease-in-out ${like && "text-primary-color"}`} />
                                <p className="text-sm font-m-medium">Like Post</p>
                                <span className="w-1.5 h-1.5 bg-primary-color rounded-full"></span>
                                <p className="text-base font-m-medium">0</p>
                            </span>
                        </Button>
                        <Button
                            buttonStyle="bg-white ring-2 py-1.5 px-2 rounded-r-full flex ietms-center justify-around gap-2"
                        >
                            <ThumbsDownIcon className="w-5 h-5" />
                        </Button>
                    </div>
                </li>
                <li className="flex items-center">
                    <div className="w-full flex items-center">
                        <Button
                            buttonStyle="bg-white py-1 px-1 rounded-l-full flex ietms-center justify-around gap-2"
                        >
                            <span className="w-full flex items-center px-2 gap-2">
                                <MessageCircleIcon className="w-5 h-5" />
                                <span className="w-1.5 h-1.5 bg-primary-color rounded-full"></span>
                                <p className="text-base font-m-medium">0</p>
                            </span>
                        </Button>
                        <Button
                            buttonStyle="bg-white py-1.5 px-2 rounded-r-full flex ietms-center justify-around gap-2"
                        >
                            <ShareIcon className="w-5 h-5" />
                        </Button>
                    </div>
                </li>
            </ul>
        </div>
    )
}