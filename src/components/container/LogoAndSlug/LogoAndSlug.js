import Image from "next/image";
import IndoforumLogo from "../../../../public/images/indoforum-logo.svg"

export default function LogoAndSlug() {
    return (
        <div className="w-full bg-gray-100 px-3 h-13 flex items-center gap-2">
            <Image 
                src={IndoforumLogo}
                alt="indoforum logo"
                width={30}
                height={30}
            />
            <h4 className="text-base font-m-semibold">Indoforum | Disscuss and Share.</h4>
        </div>
    )
}