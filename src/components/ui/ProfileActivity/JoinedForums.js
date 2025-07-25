import Button from "../button/Buttons"
import { ArrowUpRight } from "lucide-react"

export default function UserJoinedForums({ count = 0 }) {
    return (
        <div className="flex flex-col bg-white justify-between gap-2 w-full h-40 p-3 ring-2 ring-gray-400 rounded-lg">
            <h2 className="text-2xl font-m-bold m-0 capitalize">joined forums</h2>
            <p className="text-4xl font-m-semibold">{ count }</p>
            <Button
                link="/profile/activity/joined-forums"
                buttonStyle="w-full"
                linkStyle="w-full flex items-center gap-2"
            >
                <p className="text-base font-m-medium">lihat daftar forum yang kamu ikuti</p>
                <ArrowUpRight className="w-5 h-5" />
            </Button>
        </div>
    )
}