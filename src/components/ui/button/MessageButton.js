import { MessageCircle } from "lucide-react";

export default function MessageButton() {
    return (
        <button className="w-36 ring-2 py-1.5 rounded-md flex items-center justify-center gap-2">
            <p className="text-base font-m-semibold">message</p>
            <MessageCircle className="w-5 h-5" />
        </button>
    )
}