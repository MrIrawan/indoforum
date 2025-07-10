import Button from "../Button";
import { MessageCircleIcon } from "lucide-react";

export default function MessageButton() {
    return (
        <Button
            buttonStyle="ring-2 w-36 py-1.5 rounded-md flex items-center justify-center gap-2"
        >
            <p className="text-base font-m-semibold">message</p>
            <MessageCircleIcon className="w-6 h-6"/>
        </Button>
    )
}