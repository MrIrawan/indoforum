import UserProfileNameAndJob from "../container/ProfileNameAndJob/ProfileNameAndJob";
import UserProfileButtons from "../container/ProfileButtons/ProfileButtons";

export default function ProfileNameLayout() {
    return (
        <div className="flex flex-col gap-6">
            <UserProfileNameAndJob />
            <UserProfileButtons />
        </div>
    )
}