export default function PostLayout({ children }) {
    return (
        <>
            <header className="w-full">
                <div className="w-full h-16 bg-white">
                    <div className="w-32 h-32 overflow-hidden">
                        <img />
                    </div>
                </div>
            </header>
            { children }
        </>
    )
}