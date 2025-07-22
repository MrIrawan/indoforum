import SectionSite from "@/components/layout/Section";
import PostNavigationBar from "@/components/pages/PostNavigationBar/PostNavigationBar";

export default function QuestionsPageLayout({ children }) {
    return (
        <>
            <PostNavigationBar />
            <SectionSite
            containerClass="container lg:w-full lg:mx-auto"
            classname="py-3 px-3"
            >
                { children }
            </SectionSite>
        </>
    )
}