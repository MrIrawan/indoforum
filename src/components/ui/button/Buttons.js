import {
    HomeIcon,
    LogOutIcon,
    SettingsIcon,
    UserRoundIcon,
    UsersRoundIcon,
    MessageSquareTextIcon
} from "lucide-react";
import Link from "next/link";

export default function Button({ children, ringColor = "black", link = "" }) {

    return (
        <button className={`ring-2 rounded-lg p-1 ring-${ringColor}`}>
            { link === "" ? children : <Link href={link}>{children}</Link> }
        </button>
    )

}

Button.home = ({ bgColor = "black" }) => <HomeIcon className={`w-5 h-5 text-${bgColor}`} />;
Button.logout = ({ bgColor = "black" }) => <LogOutIcon className={`w-5 h-5 text-${bgColor}`} />;
Button.settings = ({ bgColor = "black" }) => <SettingsIcon className={`w-5 h-5 text-${bgColor}`} />;
Button.forums = ({ bgColor = "black" }) => <MessageSquareTextIcon className={`w-5 h-5 text-${bgColor}`} />;
Button.profile = ({ bgColor = "black" }) => <UserRoundIcon className={`w-5 h-5 text-${bgColor}`} />;
Button.users = ({ bgColor = "black" }) => <UsersRoundIcon className={`w-5 h-5 text-${bgColor}`} />;