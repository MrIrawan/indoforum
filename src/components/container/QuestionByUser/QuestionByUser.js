import Avatar from "@/components/ui/Avatar/Avatar";

export default function QuestionByUser({ userData }) {
    return (
        <div className="flex items-center gap-2.5">
            <Avatar avatarSize="default" />
            <div className="flex flex-col">
                <div className="flex items-center gap-2">
                    <h3 className="text-base font-m-semibold">Question By</h3>
                    <hr className="w-2 h-2 bg-blue-500 border-none rounded-full"/>
                    <h3 className="text-base font-m-semibold">{ userData.user_name ? userData.user_name : "Indoforum User" }</h3>
                </div>
                <p className="text-sm font-m-semibold text-gray-500">{userData.posted_at}</p>
            </div>
        </div>
    )
}