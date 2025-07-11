import Image from "next/image";
import indoforumLogo from "../../../../public/images/indoforum-logo.svg"

export default function AuthLayout({
    title,
    slug,
    children
}) {
    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-fit flex flex-col justify-between gap-2">
                <div className="flex flex-col justify-between">
                    <span className="w-fit flex items-center justify-center gap-2 mb-3">
                        <Image 
                            src={ indoforumLogo }
                            alt="indoforum-logo"
                            width={30}
                            height={30}
                        />
                        <h3 className="text-2xl text-black font-m-semibold">Indoforum</h3>
                    </span>
                    <h2 className="text-5xl mb-6 font-m-bold">{ title }</h2>
                    <p className="text-black font-m-medium">{ slug }</p>
                </div>
                { children }
            </div>
        </div>
    )
}