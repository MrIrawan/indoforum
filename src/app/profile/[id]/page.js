import ProfileCard from "@/components/ui/profile/ProfileCard"

export default function UserProfile() {
    return (
        <ProfileCard>
            <ProfileCard.NameAndJob />
            <ProfileCard.ProfileInfo />
            <ProfileCard.ProfileActivity />
        </ProfileCard>
    )
}