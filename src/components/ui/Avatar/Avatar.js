import Image from "next/image";
import defaultUserLogo from "../../../../public/images/default.jpeg"

export default function Avatar(
    {
        avatarImg = "",
        altImg = "avatar image alt",
        avatarSize = "default",
        ring = true,
        ringColor = "black",
        classname=""
    }
) {

    const avatarSizeOptions = [
        {
            size: "default",
            heightAndWith: {
                height: "12",
                width: "12"
            }
        },
        {
            size: "xl",
            heightAndWith: {
                height: "[160px]",
                width: "[160px]"
            }
        },
    ]

    if (avatarImg === "") {
        avatarImg = defaultUserLogo;
    }

    return (
        <>
            {avatarSize === "default" && (
                <div 
                    className={`w-12 h-12 overflow-hidden ${ring === true ? "ring-3" : "ring-0"} ring-${ringColor} rounded-full ${classname}`}
                >
                    <Image 
                        src={avatarImg}
                        alt={altImg}
                        className="w-full h-full object-cover"
                    />
                </div>
            )}
            {avatarSize === "xl" && (
                <div 
                    className={`w-${avatarSizeOptions[1].heightAndWith.width} h-${avatarSizeOptions[1].heightAndWith.height} overflow-hidden ${ring === true ? "ring-4" : "ring-0"} ring-${ringColor} rounded-full ${classname}`}
                >
                    <Image 
                        src={avatarImg}
                        alt={altImg}
                        className="w-full h-full object-cover"
                    />
                </div>
            )}
        </>
    )
}