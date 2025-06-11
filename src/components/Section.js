export default function SectionSite({ children, classname, containerClass }) {
    return (
        <section className={`${classname}`}>
        <div className={`w-full container mx-auto ${containerClass}`}>
                { children }
            </div>
        </section>
    )
}