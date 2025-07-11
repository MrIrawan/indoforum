import BannerImage from "@/components/ui/BannerImage/BannerImage";
import Avatar from "@/components/ui/Avatar/Avatar";

export default function BannerImageWithAvatar({
    bannerImage = "",
    avatarImage = ""
}) {
    return(
        <div 
            id="banner-image-with-avatar"
            className="w-full h-60 shadow-md relative"
        >
            <BannerImage bannerImg={bannerImage} />
            <Avatar
                avatarImg={avatarImage}
                avatarSize="xl"
                classname="absolute top-1/2 left-5 translate-y-10"
                ringColor="white"
            />
        </div>
    )
}