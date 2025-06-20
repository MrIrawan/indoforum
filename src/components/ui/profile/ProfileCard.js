"use client"

import { useState } from "react"

import Image from "next/image"
import indoforumImage from "../../../../public/images/mosaic-indoforum.png"
import fluidImage from "../../../../public/images/fluid.jpg"
import Button from "../button/Buttons"
import ReadMore from "../ReadMore/ReadMore"
import { 
    MapPin, 
    Mail,
    BriefcaseBusiness,
    ArrowUpRight,
    SettingsIcon,
    UserPlusIcon,
    UserMinusIcon,
    MessageCircle
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

    const [isFollowed, setIsFollowed] = useState(false)

    return (
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col items-start">
                        <h2 className="text-2xl font-m-bold capitalize">Farrel Irawan</h2>
                        <p className="text-sm font-m-medium">UI/UX Designer & Frontend Developer</p>
                    </div>
                    <div className="flex justify-between gap-3">
                        <div className="flex items-center gap-3 w-fit">
                            { isFollowed === true && (
                                <Button
                                    buttonStyle="ring-2 w-36 py-1.5 rounded-md flex items-center justify-center gap-2"
                                >
                                    <p className="text-base font-m-semibold">unfollow</p>
                                    <UserMinusIcon className="w-6 h-6" />
                                </Button>
                            ) }
                            { isFollowed === false && (
                                <Button
                                    buttonStyle="ring-2 w-36 py-1.5 rounded-md flex items-center justify-center gap-2"
                                >
                                    <p className="text-base font-m-semibold">follow</p>
                                    <UserPlusIcon className="w-6 h-6" />
                                </Button>
                            ) }
                            <Button
                                buttonStyle="ring-2 w-36 py-1.5 rounded-md flex items-center justify-center gap-2"
                            >
                                <p className="text-base font-m-semibold">message</p>
                                <MessageCircle className="w-6 h-6" />
                            </Button>
                        </div>
                        <Button
                            link="/profile/settings"
                            buttonStyle="ring-2 w-full rounded-md"
                            linkStyle="w-full flex items-center justify-center gap-2"
                        >
                            <SettingsIcon className="w-6 h-6" />
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
            <div className="flex flex-col gap-3">
                <h2 className="text-2xl font-m-bold">{ name }'s About</h2>
                <ReadMore text={ text } textStyle="text-base font-m-medium text-justify" />
            </div>
        </div>
    )
}

function ProfileActivity() {
    return (
                <div className="w-full pt-6 pb-6 flex flex-col justify-between items-center gap-4">
                    <div className="flex flex-col justify-between gap-2 w-full h-40 p-3 ring-2 ring-gray-400 rounded-lg">
                        <h2 className="text-2xl font-m-bold m-0 capitalize">joined forums</h2>
                        <p className="text-4xl font-m-semibold">0</p>
                        <Button
                            link="/profile/activity/joined-forums"
                            buttonStyle="w-full"
                            linkStyle="w-full flex items-center gap-2"
                        >
                            <p className="text-base font-m-medium">lihat daftar forum buatanmu</p>
                            <ArrowUpRight className="w-5 h-5" />
                        </Button>
                    </div>
                    <div className="flex flex-col justify-between gap-2 w-full h-40 p-3 ring-2 ring-gray-400 rounded-lg">
                        <h2 className="text-2xl font-m-bold m-0 capitalize">forums created</h2>
                        <p className="text-4xl font-m-semibold">0</p>
                        <Button
                            link="/profile/activity/forums-created"
                            buttonStyle="w-full"
                            linkStyle="w-full flex items-center gap-2"
                        >
                            <p className="text-base font-m-medium">lihat daftar forum yang kamu ikuti</p>
                            <ArrowUpRight className="w-5 h-5" />
                        </Button>
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
ProfileCard.ProfileDescription = ProfileDescription;