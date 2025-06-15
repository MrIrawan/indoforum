import Image from "next/image"
import indoforumImage from "../../../../public/images/mosaic-indoforum.png"
import fluidImage from "../../../../public/images/fluid.jpg"
import FollowButton from "../button/FollowButton"
import MessageButton from "../button/MessageButton"
import Button from "../button/Buttons"
import { 
    MapPin, 
    Mail,
    BriefcaseBusiness,
    ArrowUpRight
} from "lucide-react"

export default function ProfileCard({ children }) {
    return (
        <div className="w-full h-screen flex flex-col">
            <BannerImageAndProfileImage />
            <div className="w-full h-full px-5 pt-25">
                { children }
            </div>
        </div>
    )
}

function ProfileNameAndJob() {
    return (
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col items-start">
                        <h2 className="text-2xl font-m-bold capitalize">Farrel Irawan</h2>
                        <p className="text-sm font-m-medium">UI/UX Designer & Frontend Developer</p>
                    </div>
                    <div className="flex justify-between gap-3">
                        <div className="flex items-center gap-3 w-fit">
                            <FollowButton />
                            <MessageButton />
                        </div>
                        <Button 
                            classname="w-full flex items-center justify-center"
                            link="/profile/settings"
                        >
                            <Button.settings />
                        </Button>
                    </div>
                </div>
    )
}

function ProfileInfo() {
    return (
                <div className="w-full pt-6">
                    <ul className="flex flex-col gap-3">
                        <li className="flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-primary-color" />
                            <p className="text-base font-m-semibold">Jakarta, Indonesia</p>
                        </li>
                        <li className="flex items-center gap-2">
                            <Mail className="w-5 h-5 text-primary-color" />
                            <p className="text-base font-m-semibold">irawanssfarrel@mail.com</p>
                        </li>
                        <li className="flex items-center gap-2">
                            <BriefcaseBusiness className="w-5 h-5 text-primary-color" />
                            <p className="text-base font-m-medium">work at <span className="font-m-semibold">PT. DBS Bank</span></p>
                        </li>
                        {/* additional info */}
                    </ul>
                </div>
    )
}

function ProfileDescription({ name = "", text = "" }) {
    return (
        <div className="w-full pt-6">
            <div className="flex flex-col">
                <h2 className="text-2xl font-m-bold">{ name }</h2>
                <p className="text-base font-m-medium">{ text }</p>
            </div>
        </div>
    )
}

function ProfileActivity() {
    return (
                <div className="w-full pt-6 pb-25 flex flex-col justify-between items-center gap-4">
                    <div className="flex flex-col justify-between gap-2 w-full h-40 p-3 ring-2 ring-gray-400 rounded-lg">
                        <h2 className="text-2xl font-m-bold m-0 capitalize">joined forums</h2>
                        <p className="text-4xl font-m-semibold">0</p>
                        <a href="#" className="w-full flex items-center gap-2">
                            <p className="text-base font-m-medium">lihat daftar forum yang kamu ikuti</p>
                            <ArrowUpRight className="w-5 h-5" />
                        </a>
                    </div>
                    <div className="flex flex-col justify-between gap-2 w-full h-40 p-3 ring-2 ring-gray-400 rounded-lg">
                        <h2 className="text-2xl font-m-bold m-0 capitalize">forums created</h2>
                        <p className="text-4xl font-m-semibold">0</p>
                        <a href="#" className="w-full flex items-center gap-2">
                            <p className="text-base font-m-medium">lihat daftar forum buatanmu</p>
                            <ArrowUpRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
    )
}

function BannerImageAndProfileImage() {
    return (
                    <div id="banner-image" className="w-full h-60 shadow-md relative">
                        <Image 
                            src={fluidImage}
                            className="w-full h-full object-cover"
                            alt="indoforum"
                        />
                        <div className="w-[160px] h-[160px] rounded-full overflow-hidden ring-4 ring-white absolute top-1/2 left-5 translate-y-10">
                            <Image 
                                src={indoforumImage}
                                className="w-full h-full object-cover"
                                alt="indoforum"
                            />
                        </div>
                    </div>
    )
}


ProfileCard.NameAndJob = ProfileNameAndJob;
ProfileCard.ProfileInfo = ProfileInfo;
ProfileCard.ProfileActivity = ProfileActivity;