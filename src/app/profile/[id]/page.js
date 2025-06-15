import ProfileCard from "@/components/ui/profile/ProfileCard"

export default function UserProfile() {
    return (
        <ProfileCard>
            <ProfileCard.NameAndJob />
            <ProfileCard.ProfileInfo />
            <ProfileCard.ProfileDescription name="Farrel" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula consectetur tempus. Phasellus in egestas libero. Praesent at ligula eget lectus commodo facilisis. Sed molestie sodales ipsum. Phasellus bibendum volutpat scelerisque. Nulla faucibus quam sit amet."/>
            <ProfileCard.ProfileActivity />
        </ProfileCard>
    )
}