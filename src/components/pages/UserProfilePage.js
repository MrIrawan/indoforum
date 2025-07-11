"use client"

import { useState } from "react"

import UserProfileLayout from "../layout/UserProfileLayout";
import ProfileNameLayout from "../layout/ProfileNameLayout";
import UserProfileInfo from "../container/ProfileInfo/ProfileInfo";
import UserProfileActivity from "../container/ProfileActivity/ProfileActivity";

export default function UserProfilePage() {
    return (
        <UserProfileLayout>
            <ProfileNameLayout 
                userName="Farrel Irawan"
                userJob="Software Engineer | UI/UX Mastery"
            />
            <UserProfileInfo 
                currentLocation="Jakarta, Indonesia"
                email="budiwicaksono@mail.com"
                jobPlace="Indoforum"
            />
            <UserProfileActivity />
        </UserProfileLayout>
    )
}