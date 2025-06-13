import { UserPlusIcon, UserMinusIcon } from "lucide-react"

export default function FollowButton({ state = true }) {
    return (
        <>
            { state === true && (
                <button className="w-36 ring-2 py-1.5 rounded-md flex items-center justify-center gap-2">
                    <p className="text-base font-m-semibold">follow</p>
                    <UserPlusIcon className="w-5 h-5" />
                </button>
            ) }

            { state === false && (
                <button className="w-36 ring-2 py-1.5 rounded-md flex items-center justify-center gap-2">
                    <p className="text-base font-m-semibold">unfollow</p>
                    <UserMinusIcon className="w-5 h-5" />
                </button>
            ) }
        </>
    )
}