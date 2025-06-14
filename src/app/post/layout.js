import Image from "next/image"
import indoforumLogo from "../../../public/images/indoforum-logo.svg"
import Button from "@/components/ui/button/Buttons"
import { Search } from "lucide-react"

export default function PostLayout({ children }) {
    return (
        <>
            <header className="w-full">
                <div className="w-full h-16 bg-white px-3 py-3 flex items-center gap-3">
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
                <nav className="w-full h-12 bg-primary-color px-3">
                    <ul className="w-full h-full flex items-center gap-3 justify-around">
                        <li>
                            <Button 
                                link="/post"
                                ringColor="white"
                            >
                                <Button.home bgColor="white"/>
                            </Button>
                        </li>
                        <li>
                            <Button 
                                link="/forums"
                                ringColor="white"
                            >
                                <Button.forums bgColor="white"/>
                            </Button>
                        </li>
                        <li>
                            <Button 
                                link="/friends"
                                ringColor="white"
                            >
                                <Button.users bgColor="white"/>
                            </Button>
                        </li>
                        <li>
                            <Button 
                                link="/profile/123"
                                ringColor="white"
                            >
                                <Button.profile bgColor="white"/>
                            </Button>
                        </li>
                    </ul>
                </nav>
            </header>
            { children }
        </>
    )
}