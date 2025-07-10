"use client"

import { useState } from "react"

import MessageButton from "../ui/ProfileButtons/MessageButton"
import FollowButton from "../ui/ProfileButtons/FollowButton"
import UnfollowButton from "../ui/ProfileButtons/UnfollowButton"

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
            </div>
            <MessageButton />
        </div>
    )
}