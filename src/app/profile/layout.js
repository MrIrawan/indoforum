import SectionSite from "@/components/Section"
import { HomeIcon, SettingsIcon, LogOutIcon } from "lucide-react"

export default function UserProfileLayout({ children }) {
    return (
        <SectionSite containerClass={'lg:mx-auto lg:container'}>
            { children }
            <footer className="w-full bg-white h-16 fixed bottom-0 flex items-center justify-around border-t border-t-gray-300">
                <span className="w-fit">
                    <HomeIcon className="w-6 h-6" />
                </span>
                <span className="w-fit">
                    <SettingsIcon className="w-6 h-6" />
                </span>
                <span className="w-fit">
                    <LogOutIcon className="w-6 h-6" />
                </span>
            </footer>
        </SectionSite>
    )
}