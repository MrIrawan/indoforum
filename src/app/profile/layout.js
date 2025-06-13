import SectionSite from "@/components/layout/Section"
import PostButton from "@/components/ui/button/PostButton"
import SettingsButton from "@/components/ui/button/SettingsButton"
import HomeButton from "@/components/ui/button/HomeButton"
import LogoutButton from "@/components/ui/button/LogoutButton"

export default function UserProfileLayout({ children }) {
    return (
        <SectionSite containerClass={'lg:mx-auto lg:container'}>
            { children }
            <footer className="w-full bg-white h-16 fixed bottom-0 flex items-center justify-around border-t border-t-gray-300">
                <HomeButton />
                <PostButton />
                <SettingsButton />
                <LogoutButton />
            </footer>
        </SectionSite>
    )
}