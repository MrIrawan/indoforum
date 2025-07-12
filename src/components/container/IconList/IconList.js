import Button from "@/components/ui/button/Buttons";
import {
    HomeIcon,
    MessageSquareTextIcon,
    UsersRoundIcon,
    MessageCircleQuestionIcon
} from "lucide-react";

export default function IconList({ 
    listStyle,
    itemStyle,
}) {
    return (
                <ul className={`${listStyle}`}>
                    <li className={`${itemStyle}`}>
                        <Button
                            link="/post"
                            buttonStyle="flex items-center gap-2"
                        >
                            <HomeIcon className="w-6 h-6"/>
                        </Button>
                    </li>
                    <li className={`${itemStyle}`}>
                        <Button
                            link="/forums"
                            buttonStyle="flex items-center gap-2"
                        >
                            <MessageSquareTextIcon className="w-6 h-6"/>
                        </Button>
                    </li>
                    <li className={`${itemStyle}`}>
                        <Button
                            link="/following"
                            buttonStyle="flex items-center gap-2"
                        >
                            <UsersRoundIcon className="w-6 h-6"/>
                        </Button>
                    </li>
                    <li className={`${itemStyle}`}>
                        <Button
                            link="/questions"
                            buttonStyle="flex items-center gap-2"
                        >
                            <MessageCircleQuestionIcon className="w-6 h-6"/>
                        </Button>
                    </li>
                </ul>
    )
}