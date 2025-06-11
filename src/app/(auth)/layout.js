import SectionSite from "@/components/Section"

export default function AuthLayout({ children }) {
    return (
        <>
            <SectionSite 
                classname={'w-full h-screen flex items-center justify-center'}
                containerClass={'h-[800px]'}
            >
                <div className="flex justify-between h-full lg:shadow-lg">
                    { children }
                </div>
            </SectionSite>
        </>
    )
}