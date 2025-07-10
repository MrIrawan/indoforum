import Button from "../button/Buttons"
import { UserMinusIcon } from "lucide-react"

export default function UnfollowButton() {
    return (
        <Button
            buttonStyle="ring-2 w-36 py-1.5 rounded-md flex items-center justify-center gap-2"
        >
            <p className="text-base font-m-semibold">unfollow</p>
            <UserMinusIcon className="w-6 h-6"/>
        </Button>
    )
}