import {
    HomeIcon,
    LogOutIcon,
    SettingsIcon,
    UserRoundIcon,
    UsersRoundIcon,
    MessageSquareTextIcon
} from "lucide-react";
import Link from "next/link";

export default function Button({ children, ringColor = "black", link = "", classname = "" }) {

    return (
        <>
            {link === "" && (
                <button className={`ring-2 rounded-lg p-1 ring-${ringColor} ${classname}`}>
                    {children}
                </button>
            )}
            {link !== "" && (
                    <button className={`ring-2 rounded-lg p-1 ring-${ringColor} ${classname}`}>
                        <Link href={link}>{children}</Link>
                    </button>
            )}
        </>
    )

}

Button.home = ({ bgColor = "black" }) => <HomeIcon className={`w-6 h-6 text-${bgColor}`} />;
Button.logout = ({ bgColor = "black" }) => <LogOutIcon className={`w-6 h-6 text-${bgColor}`} />;
Button.settings = ({ bgColor = "black" }) => <SettingsIcon className={`w-6 h-6 text-${bgColor}`} />;
Button.forums = ({ bgColor = "black" }) => <MessageSquareTextIcon className={`w-6 h-6 text-${bgColor}`} />;
Button.profile = ({ bgColor = "black" }) => <UserRoundIcon className={`w-6 h-6 text-${bgColor}`} />;
Button.users = ({ bgColor = "black" }) => <UsersRoundIcon className={`w-6 h-6 text-${bgColor}`} />;