import Link from "next/link"
import { ArrowLeftIcon } from "lucide-react"

export default function ProfileSettingsLayout({ children }) {
    return (
        <>
            <header className="w-full h-15 p-4 flex items-center">
                <div className="container w-full mx-auto">
                    <Link className="flex items-center gap-2" href="/profile/123">
                        <ArrowLeftIcon className="w-6 h-6" />
                        <p className="text-base font-m-semibold">kembali ke halaman profile</p>
                    </Link>
                </div>
            </header>
            {children}
        </>
    )
}