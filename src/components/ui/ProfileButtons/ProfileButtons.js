import Button from "../button/Buttons";
import {
    UserPlusIcon,
    UserMinusIcon,
    MessageCircleIcon
} from "lucide-react"

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

export default function SettingsButton() {
    return (
        <Button
            link="/profile/settings"
            buttonStyle="ring-2 w-full rounded-md"
            linkStyle="w-full flex items-center justify-center gap-2"
        >
            <SettingsIcon className="w-6 h-6"/>
        </Button>
    )
}