"use client"

import UserProfileName from "@/components/ui/ProfileName/ProfileName"
import UserProfileJob from "@/components/ui/ProfileJob/ProfileJob"

export default function UserProfileNameAndJob() {
    return (
        <div className="flex flex-col items-start">
            <UserProfileName />
            <UserProfileJob />
        </div>
    )
}