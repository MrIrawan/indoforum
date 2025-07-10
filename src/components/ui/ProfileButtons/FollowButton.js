import Button from "../button/Buttons";
import { UserPlusIcon } from "lucide-react";

export default function FollowButton() {
    return (
        <Button
            buttonStyle="ring-2 w-36 py-1.5 rounded-md flex items-center justify-center gap-2"
        >
            <p className="text-base font-m-semibold">follow</p>
            <UserPlusIcon className="w-6 h-6"/>
        </Button>
    )
}
