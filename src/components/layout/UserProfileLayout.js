import BannerImageWithAvatar from "../container/BannerImageWithAvatar/BannerImageWithAvatar";

export default function UserProfileLayout({
    children,
    bannerImage = "",
    avatarImage = ""
}) {
    return (
        <div className="w-full h-screen flex flex-col">
            <BannerImageWithAvatar
                bannerImage={bannerImage}
                avatarImage={avatarImage}
            />
            <div className="w-full h-full px-5 pt-25">
                { children }
            </div>
        </div>
    )
}