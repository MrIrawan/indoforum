import SectionSite from "@/components/layout/Section"
import PostButton from "@/components/ui/button/PostButton"
import SettingsButton from "@/components/ui/button/SettingsButton"
import HomeButton from "@/components/ui/button/HomeButton"
import LogoutButton from "@/components/ui/button/LogoutButton"

export default function UserProfileLayout({ children }) {
    return (
        <SectionSite containerClass={'lg:mx-auto lg:container'}>
            { children }
        </SectionSite>
    )
}