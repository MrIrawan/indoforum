import Button from "../button/Buttons"
import { SettingsIcon } from "lucide-react"

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