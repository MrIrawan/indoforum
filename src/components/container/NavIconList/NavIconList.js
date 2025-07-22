import Button from "@/components/ui/button/Buttons";
import { 
    HomeIcon,
    MessageSquareTextIcon,
    UsersRoundIcon,
    MessageCircleQuestionIcon
} from "lucide-react";

export default function NavIconList() {
    return (
        <div className="bg-gray-300 w-full h-11">
            <ul className="w-full h-full flex items-center justify-around">
                <li className="flex items-center justify-center">
                    <Button
                        link="/post"
                    >
                        <HomeIcon className="w-7 h-7"/>
                    </Button>
                </li>
                <li className="flex items-center justify-center">
                    <Button
                        link="/post"
                    >
                        <MessageSquareTextIcon className="w-7 h-7"/>
                    </Button>
                </li>
                <li className="flex items-center justify-center">
                    <Button
                        link="/post"
                    >
                        <UsersRoundIcon className="w-7 h-7"/>
                    </Button>
                </li>
                <li className="flex items-center justify-center">
                    <Button
                        link="/post"
                    >
                        <MessageCircleQuestionIcon className="w-7 h-7"/>
                    </Button>
                </li>
            </ul>
        </div>
    )
}