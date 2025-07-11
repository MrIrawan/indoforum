import Avatar from "@/components/ui/Avatar/Avatar";
import CustomInput from "@/components/ui/Input/Input";

export default function SearchBar() {
    return (
        <div className="flex items-center justify-between gap-3 w-full px-3 py-2">
            <CustomInput 
                type="search"
                placeholder="Cari sesuatu..."
                required
                classname="ring-2 px-2.5 py-2 flex-1/2 rounded-3xl placeholder:font-m-medium focus:outline-0 focus:ring-secondary-color"
            />
            <Avatar 
                avatarSize="default"
                classname=""
            />
        </div>
    )
}