export default function SectionSite({ children, classname }) {
    return (
        <section className={`${classname}`}>
            <div className={`w-full mx-auto${classname}`}>
                { children }
            </div>
        </section>
    )
}