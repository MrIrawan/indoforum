import SectionSite from "@/components/layout/Section";

export default function QuestionsPageLayout({ children }) {
    return (
        <>
            <SectionSite
            containerClass="container lg:w-full lg:mx-auto"
            >
                { children }
            </SectionSite>
        </>
    )
}