import Image from "next/image"
import indoforumLogo from "../../../public/images/indoforum-logo.svg"
import HomeButton from "@/components/ui/button/HomeButton"
import ForumsButton from "@/components/ui/button/ForumsButton"
import { Search, MessageSquareTextIcon } from "lucide-react"

export default function PostLayout({ children }) {
    return (
        <>
            <header className="w-full">
                <div className="w-full h-16 bg-white px-3 py-3 flex items-center gap-3 border-b">
                    <div className="w-9 h-9 overflow-hidden">
                        <Image 
                            src={indoforumLogo}
                            alt="indoforum-logo"
                        />
                    </div>
                    <form className="w-full flex items-center gap-3">
                        <input type="text" placeholder="Cari di indoforum" className="w-full h-full ring-2 ring-gray-400 font-m-medium rounded-md px-3 py-2 focus:outline-none placeholder:font-m-medium" />
                        <button type="submit" className="w-10 h-9 flex items-center justify-center ring-2 rounded-lg">
                            <Search className="w-7 h-7" />
                        </button>
                    </form>
                </div>
                <nav className="w-full h-15 bg-secondary-foreground px-3">
                    <ul className="w-full h-full flex items-center gap-3 justify-around">
                        <li>
                            <a href="/post">
                                <HomeButton />
                            </a>
                        </li>
                        <li>
                            <a href="/forums">
                                <ForumsButton />
                            </a>
                        </li>
                        <li>
                            <a href="/post">
                                <HomeButton />
                            </a>
                        </li>
                        <li>
                            <a href="/profile/123">
                                <HomeButton />
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            { children }
        </>
    )
}