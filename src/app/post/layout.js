import Image from "next/image"
import indoforumLogo from "../../../public/images/indoforum-logo.svg"
import { Search } from "lucide-react"

export default function PostLayout({ children }) {
    return (
        <>
            <header className="w-full">
                <div className="w-full h-16 bg-white px-3 py-3 flex items-center gap-3 border-b">
                    <div className="w-9 h-9 overflow-hidden">
                        <Image 
                            src={indoforumLogo}
                        />
                    </div>
                    <form className="w-full flex items-center gap-3">
                        <input type="text" placeholder="Cari di indoforum" className="w-full h-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none" />
                        <button type="submit" className="w-10 h-9 flex items-center justify-center ring-2 rounded-lg">
                            <Search className="w-7 h-7" />
                        </button>
                    </form>
                </div>
            </header>
            { children }
        </>
    )
}