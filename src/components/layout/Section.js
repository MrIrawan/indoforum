export default function SectionSite({ children, classname, containerClass }) {
    return (
        <section className={`${classname}`}>
            <div className={`${containerClass}`}>
                { children }
            </div>
        </section>
    )
}