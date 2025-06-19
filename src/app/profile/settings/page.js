import ReadMore from "@/components/ui/ReadMore/ReadMore"
import Button from "@/components/ui/button/Buttons"
import { 
    InfoIcon,
    LockIcon,
    Trash2Icon,
    LogOutIcon
} from "lucide-react"

export default function ProfileSettings() {
    return (
        <div className="w-full flex flex-col gap-6 px-4 py-2">
            <div className="w-full flex flex-col gap-2">
                <h2 className="text-2xl font-m-bold capitalize">Profile Settings</h2>
                <ReadMore 
                    text={"mohon di perhatikan bahwa aplikasi ini masih dalam tahap awal sehingga memungkinkan terjadinya beberapa fitur tidak berjalan optimal."} 
                    amountOfWord={10}
                    textStyle="text-sm font-m-medium text-justify"
                />
            </div>
            <div className="w-full">
                <ul className="w-full flex flex-col gap-6">
                    <li>
                        <Button 
                            link="/profile/settings/public-info" 
                            buttonStyle="w-full py-2"
                            linkStyle="flex items-center gap-2"
                        >
                            <InfoIcon className="w-5 h-5" />
                            <p className="text-base font-m-semibold capitalize">informasi publik</p>
                        </Button>
                    </li>
                    <li>
                        <Button 
                            link="/profile/settings/public-info" 
                            buttonStyle="w-full py-2"
                            linkStyle="flex items-center gap-2"
                        >
                            <LockIcon className="w-5 h-5" />
                            <p className="text-base font-m-semibold capitalize">informasi akun</p>
                        </Button>
                    </li>
                    <li>
                        <Button 
                            link="/profile/settings/public-info" 
                            buttonStyle="w-full py-2"
                            linkStyle="flex items-center gap-2"
                        >
                            <LogOutIcon className="w-5 h-5 text-red-500" />
                            <p className="text-base font-m-semibold capitalize text-red-500">logout akun (keluar dari akun anda)</p>
                        </Button>
                    </li>
                    <li>
                        <Button 
                            link="/profile/settings/public-info" 
                            buttonStyle="w-full py-2"
                            linkStyle="flex items-center gap-2"
                        >
                            <Trash2Icon className="w-5 h-5 text-red-500" />
                            <p className="text-base font-m-semibold capitalize text-red-500">hapus akun (hapus akun anda)</p>
                        </Button>
                    </li>
                </ul>
            </div>
        </div>
    )
}