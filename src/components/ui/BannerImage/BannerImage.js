import Image from "next/image";
import fluidBackground from "../../../../public/images/fluid.jpg"

export default function BannerImage(
    { 
        bannerImg = "", 
        altImage = "user banner image" 
    }
) {

    if (bannerImg === "") {
        bannerImg = fluidBackground;
    }

    return (
        <Image 
            src={bannerImg}
            className="w-full h-full object-cover"
            alt={altImage}
        />
    )

}