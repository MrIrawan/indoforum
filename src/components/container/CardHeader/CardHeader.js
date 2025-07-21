import Avatar from "@/components/ui/Avatar/Avatar";

export default function CardHeader({ user_created_name, created_at }) {
    return (
        <div className="flex items-center gap-3 h-16 bg-white px-3">
            <Avatar avatarSize="default" />
            <div className="flex flex-col">
                <h4 className="text-lg font-m-semibold">{user_created_name ? user_created_name : "Indoforum"}</h4>
                <p className="text-base font-m-medium text-gray-400">{created_at ? created_at : "12 Februari 2025"}</p>
            </div>
        </div>
    )
}