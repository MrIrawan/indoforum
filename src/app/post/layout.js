import Image from "next/image"
import indoforumLogo from "../../../public/images/indoforum-logo.svg"
import Button from "@/components/ui/button/Buttons"
import { Search } from "lucide-react"

export default function PostLayout({ children }) {
    return (
        <>
            <header className="w-full h-16">
                <nav className="lg:container lg:mx-auto h-full flex items-center gap-3 p-4">
                    <div className="w-fit">
                        <Image 
                            src={indoforumLogo}
                            alt="indoforum-logo"
                            width={50}
                            height={50}
                        />
                    </div>
                    <div className="w-full flex items-center">
                        <form className="w-full flex items-center relative">
                            <input 
                                type="search" 
                                name="search-col" 
                                id="search-col" 
                                className="ring-2 rounded-3xl py-1.5 w-full px-2 font-m-medium overflow-hidden placeholder:font-m-medium"
                                placeholder="Cari sesuatu..."
                            />
                            <Button
                                buttonStyle="absolute right-2.5 top-1/2 -translate-y-1/2"
                            >
                                <Search className="w-6 h-6"/>
                            </Button>
                        </form>
                    </div>
                </nav>
            </header>
            <div className="w-full h-10 bg-gray-200">
                <ul className="w-full flex items-center justify-evenly gap-4 h-full">
                    <li>
                        <Button>
                            <p className="text-base font-m-semibold">semua</p>
                        </Button>
                    </li>
                    <li>
                        <Button>
                            <p className="text-base font-m-semibold">semua</p>
                        </Button>
                    </li>
                    <li>
                        <Button>
                            <p className="text-base font-m-semibold">semua</p>
                        </Button>
                    </li>
                    <li>
                        <Button>
                            <p className="text-base font-m-semibold">semua</p>
                        </Button>
                    </li>
                </ul>
            </div>
            {children}
        </>
    )
}