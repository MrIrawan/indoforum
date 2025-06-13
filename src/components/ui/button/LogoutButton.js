import { LogOutIcon } from "lucide-react";

export default function LogoutButton() {
    return (
        <button className="ring-2 rounded-lg p-1">
            <LogOutIcon className="w-5 h-5" />
        </button>
    );
}