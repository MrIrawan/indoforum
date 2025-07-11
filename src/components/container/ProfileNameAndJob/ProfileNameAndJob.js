"use client"

import UserProfileName from "@/components/ui/ProfileName/ProfileName"
import UserProfileJob from "@/components/ui/ProfileJob/ProfileJob"

export default function UserProfileNameAndJob({
    userName = "",
    userJob = ""
}) {
    return (
        <div className="flex flex-col items-start">
            <UserProfileName userName={userName}/>
            <UserProfileJob userJob={userJob}/>
        </div>
    )
}