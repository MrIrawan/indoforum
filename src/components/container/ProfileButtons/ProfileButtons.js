"use client"

import { useState } from "react"

import FollowButton from "@/components/ui/ProfileButtons/FollowButton"
import UnfollowButton from "@/components/ui/ProfileButtons/UnfollowButton"
import MessageButton from "@/components/ui/ProfileButtons/MessageButton"
import SettingsButton from "@/components/ui/ProfileButtons/SettingsButton"

export default function UserProfileButtons() {
    // useState for fetching data from API
    const [isFollowed, setIsFollowed] = useState(false)

    return (
        <div className="flex justify-between gap-3">
            <div className="flex items-center gap-3 w-fit">
                {
                    isFollowed === true && (
                        <UnfollowButton />
                    )
                } {
                    isFollowed === false && (
                        <FollowButton />
                    )
                }
                <MessageButton />
            </div>
            <SettingsButton />
        </div>
    )
}