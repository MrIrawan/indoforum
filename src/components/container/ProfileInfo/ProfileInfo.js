"use client"

import { useState } from "react"

import {
    MapPinIcon,
    MailIcon,
    BriefcaseBusinessIcon,
    CheckIcon,
    Trash2Icon,
    GraduationCapIcon
} from "lucide-react";
import Button from "@/components/ui/button/Buttons";

export default function UserProfileInfo() {
    // useState to fetch user info and additional info from API
    const [userInfo, setUserInfo] = useState(null);
    const [additionalInfo, setAdditionalInfo] = useState(null);
    return (
        <div className="w-full pt-6">
            <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-2">
                    <MapPinIcon className="w-5 h-5 text-primary-color" />
                    <p className="text-base font-m-semibold">Jakarta, Indonesia</p>
                </li>
                <li className="flex items-center gap-2">
                    <MailIcon className="w-5 h-5 text-primary-color" />
                    <p className="text-base font-m-semibold">irawanssfarrel@mail.com</p>
                </li>
                <li className="flex items-center gap-2">
                    <BriefcaseBusinessIcon className="w-5 h-5 text-primary-color" />
                    <p className="text-base font-m-medium">work at <span className="font-m-semibold">PT. DBS Bank</span></p>
                </li>
                <li className="flex items-center gap-2">
                    <div className="w-full h-[250px] flex flex-col gap-2 justify-between">
                        <div className="w-full h-full bg-white flex flex-col gap-3 justify-between py-3">
                            <div className="flex items-center gap-2">
                                <GraduationCapIcon className="w-6 h-6 text-primary-color"/>
                                <div className="flex flex-col gap-0.5 w-full">
                                    <label htmlFor="education" className="text-sm font-m-semibold">Your Education</label>
                                    <input 
                                        type="text"
                                        placeholder="S1 Teknik Informatika"
                                        className="text-base font-m-semibold ring-2 rounded-sm ring-gray-400 px-3 py-1.5 placeholder:font-m-semibold focus:outline-0"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <GraduationCapIcon className="w-6 h-6 text-primary-color"/>
                                <div className="flex flex-col gap-0.5 w-full">
                                    <label htmlFor="education" className="text-sm font-m-semibold">Your Education</label>
                                    <input 
                                        type="text"
                                        placeholder="S1 Teknik Informatika"
                                        className="text-base font-m-semibold ring-2 rounded-sm ring-gray-400 px-3 py-1.5 placeholder:font-m-semibold focus:outline-0"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <GraduationCapIcon className="w-6 h-6 text-primary-color"/>
                                <div className="flex flex-col gap-0.5 w-full">
                                    <label htmlFor="education" className="text-sm font-m-semibold">Your Education</label>
                                    <input 
                                        type="text"
                                        placeholder="S1 Teknik Informatika"
                                        className="text-base font-m-semibold ring-2 rounded-sm ring-gray-400 px-3 py-1.5 placeholder:font-m-semibold focus:outline-0"
                                    />
                                </div>
                            </div>
                        </div>
                        <hr className="w-full h-1 border border-gray-400" />
                        <div className="w-full h-4/12 bg-white flex items-center gap-3 py-3">
                            <Button
                                buttonStyle="ring-2 w-42 py-1.5 rounded-md flex items-center justify-center gap-2"
                            >
                                <p className="text-base font-m-semibold text-black">save changes</p>
                                <CheckIcon className="w-6 h-6 text-green-500" />
                            </Button>
                            <Button
                                buttonStyle="ring-2 w-46 py-1.5 rounded-md flex items-center justify-center gap-2"
                            >
                                    <p className="text-base font-m-semibold text-black">discard changes</p>
                                    <Trash2Icon className="w-6 h-6 text-red-500" />
                                </Button>
                        </div>
                    </div>
                </li>
                {/* additional info */}
            </ul>
        </div>
    )
}