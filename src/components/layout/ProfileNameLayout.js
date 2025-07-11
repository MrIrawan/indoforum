import UserProfileNameAndJob from "../container/ProfileNameAndJob/ProfileNameAndJob";
import UserProfileButtons from "../container/ProfileButtons/ProfileButtons";

export default function ProfileNameLayout({
    userName = "",
    userJob = ""
}) {
    return (
        <div className="flex flex-col gap-6">
            <UserProfileNameAndJob
                userName={userName}
                userJob={userJob}
            />
            <UserProfileButtons />
        </div>
    )
}