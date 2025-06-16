import ReadMore from "@/components/ui/ReadMore"

export default function ProfileSettings() {
    return (
        <div className="w-full flex flex-col gap-3">
            <div className="w-full flex flex-col gap-2 p-3">
                <h2 className="text-2xl font-m-bold capitalize">Profile Settings</h2>
                <ReadMore 
                    text={"mohon di perhatikan bahwa aplikasi ini masih dalam tahap awal sehingga memungkinkan terjadinya beberapa fungsi berjalan kurang optimal."} 
                    amountOfWord={13}
                    textStyle="text-sm font-m-medium"
                />
            </div>
        </div>
    )
}