import SectionSite from "@/components/layout/Section"

export default function UserProfileLayout({ children }) {
    return (
        <SectionSite containerClass={'lg:mx-auto lg:container'}>
            { children }
        </SectionSite>
    )
}