"use client"

import UserProfilePage from "@/components/pages/UserProfilePage"

export default function UserProfile() {

    const userData = {
        username: "Farrel Irawan",
        userjob: "Software Engineer | UI/UX Mastery",
        UserProfileInfo: {
            currentLocation: "Kota Bekasi, Indonesia",
            email: "irawanssfarrel@gmail.com",
            jobPlace: "Indoforum"
        },
        UserProfileActivity: {
            joinedForums: 0,
            createdForums: 0
        }
    }

    return (
        <UserProfilePage data={userData}/>
    )
}