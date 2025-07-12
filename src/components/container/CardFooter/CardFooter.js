import Button from "@/components/ui/button/Buttons";
import { ThumbsUpIcon } from "lucide-react";

export default function CardFooter() {
    return (
        <div className="h-12 bg-white flex flex-col gap-1 px-3 py-1.5">
            <ul className="w-full h-full flex items-center">
                <li>
                    <Button
                        buttonStyle="bg-white ring-2 py-1 px-1 rounded-full flex ietms-center justify-around gap-2"
                    >
                        <span className="w-full flex items-center px-2 gap-2">
                            <ThumbsUpIcon className="w-5 h-5" />
                            <p className="text-sm font-m-medium">Like Post</p>
                            <span className="w-1.5 h-1.5 bg-primary-color rounded-full"></span>
                            <p className="text-base font-m-medium">0</p>
                        </span>
                    </Button>
                </li>
            </ul>
        </div>
    )
}