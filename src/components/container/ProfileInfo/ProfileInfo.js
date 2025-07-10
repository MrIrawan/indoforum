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
        <>
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
            </ul>
        </div>
        </>
    )
}