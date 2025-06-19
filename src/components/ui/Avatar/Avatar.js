import Image from "next/image"

export default function Avatar({ src, alt, classname = "" }) {
    return (
        <div className={`w-[160px] h-[160px] rounded-full overflow-hidden ring-4 ring-white ${classname}`}>
            <Image 
                src={src}
                className={`w-full h-full object-cover ${classname}`}
                alt={alt}
            />
        </div>
    )
} 