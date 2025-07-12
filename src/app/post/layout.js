import Image from "next/image"
import indoforumLogo from "../../../public/images/indoforum-logo.svg"
import Button from "@/components/ui/button/Buttons";
import {
    HomeIcon,
    MessageSquareTextIcon,
    UsersRoundIcon,
    MessageCircleQuestionIcon
} from "lucide-react";

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
                <ul className="w-full h-full flex items-center justify-around">
                    <li>
                        <Button
                            link="/post"
                        >
                            <HomeIcon className="w-6 h-6" />
                        </Button>
                    </li>
                    <li>
                        <Button
                            link="/post"
                        >
                            <MessageSquareTextIcon className="w-6 h-6" />
                        </Button>
                    </li>
                    <li>
                        <Button
                            link="/post"
                        >
                            <UsersRoundIcon className="w-6 h-6" />
                        </Button>
                    </li>
                    <li>
                        <Button
                            link="/post"
                        >
                            <MessageCircleQuestionIcon className="w-6 h-6" />
                        </Button>
                    </li>
                </ul>
            </div>
            {children}
        </>
    )
}