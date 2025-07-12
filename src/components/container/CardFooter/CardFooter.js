import IconList from "../IconList/IconList";

export default function CardFooter() {
    return (
        <div className="h-20 bg-white flex flex-col gap-1 px-3 py-1.5">
            <h3 className="text-base font-m-semibold">Is this post related? share it!</h3>
            <hr className="border-gray-400"/>
            <IconList 
                direction="row"
                listStyle="w-full flex items-center justify-around gap-2 py-1.5 h-full"
            />
        </div>
    )
}