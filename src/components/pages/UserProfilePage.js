"use client"

import { useState } from "react"

import UserProfileLayout from "../layout/UserProfileLayout";
import ProfileNameLayout from "../layout/ProfileNameLayout";
import UserProfileInfo from "../container/ProfileInfo/ProfileInfo";
import UserProfileActivity from "../container/ProfileActivity/ProfileActivity";

export default function UserProfilePage({
    data
}) {
    return (
        <UserProfileLayout>
            <ProfileNameLayout 
                userName={data.username}
                userJob={data.userjob}
            />
            <UserProfileInfo 
                currentLocation={data.UserProfileInfo.currentLocation}
                email={data.UserProfileInfo.email}
                jobPlace={data.UserProfileInfo.jobPlace}
            />
            <UserProfileActivity 
                createdCount={data.UserProfileActivity.createdForums}
                joinedCount={data.UserProfileActivity.joinedForums}
            />
        </UserProfileLayout>
    )
}