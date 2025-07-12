import Avatar from "@/components/ui/Avatar/Avatar";

export default function CardHrader() {
    return (
        <div className="flex items-center gap-3 h-16 bg-white px-3">
            <Avatar avatarSize="default" />
            <div className="flex flex-col">
                <h4 className="text-lg font-m-semibold">Indoforum</h4>
                <p className="text-base font-m-medium text-gray-400">12 Februari 2025</p>
            </div>
        </div>
    )
}