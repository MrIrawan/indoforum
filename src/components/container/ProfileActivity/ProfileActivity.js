import UserJoinedForums from "@/components/ui/ProfileActivity/JoinedForums";
import UserCreatedForums from "@/components/ui/ProfileActivity/CreatedForums";

export default function UserProfileActivity({
        createdCount = 0,
        joinedCount = 0
    }) {
    return (
        <div className="w-full pt-6 pb-6 flex flex-col justify-between items-center gap-4">
            <UserJoinedForums count={joinedCount} />
            <UserCreatedForums count={createdCount} />
        </div>
    )
}