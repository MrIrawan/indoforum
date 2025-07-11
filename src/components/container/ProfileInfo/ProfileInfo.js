import {
    MapPinIcon,
    MailIcon,
    BriefcaseBusinessIcon,
    CheckIcon,
    Trash2Icon,
    GraduationCapIcon
} from "lucide-react";

export default function UserProfileInfo({
    currentLocation = "",
    email = "",
    jobPlace = ""
}) {
    return (
        <>
        <div className="w-full pt-6">
            <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-2">
                    <MapPinIcon className="w-5 h-5 text-primary-color" />
                    <p className="text-base font-m-semibold">{ currentLocation ? currentLocation : "Unknown Location." }</p>
                </li>
                <li className="flex items-center gap-2">
                    <MailIcon className="w-5 h-5 text-primary-color" />
                    <p className="text-base font-m-semibold">{ email ? email : "Unknown Email." }</p>
                </li>
                <li className="flex items-center gap-2">
                    <BriefcaseBusinessIcon className="w-5 h-5 text-primary-color" />
                    <p className="text-base font-m-medium">
                        { jobPlace === "" && (
                            <span className="font-m-semibold">Unknown Job Place.</span>
                        ) }
                        { jobPlace !== "" && (
                            <span className="font-m-semibold">{ jobPlace }</span>
                        )}
                    </p>
                </li>
            </ul>
        </div>
        </>
    )
}