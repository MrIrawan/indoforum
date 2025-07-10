"use client"

import { useState } from "react"

import UserProfileLayout from "../layout/UserProfileLayout";
import ProfileNameLayout from "../layout/ProfileNameLayout";
import UserProfileInfo from "../container/ProfileInfo/ProfileInfo";

export default function UserProfilePage() {
    return (
        <UserProfileLayout>
            <ProfileNameLayout />
            <UserProfileInfo />
        </UserProfileLayout>
    )
}