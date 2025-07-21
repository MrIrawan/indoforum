import Avatar from "@/components/ui/Avatar/Avatar";
import Button from "@/components/ui/button/Buttons";

export default function QuestionsPage() {
    return (
        <>
            <div className="flex flex-col bg-white ring-2 shadow-xl ring-gray-200 px-3 py-4 min-h-24">
                {/* profile section question */}
                <div className="flex items-center gap-2.5 w-fit bg-white">
                    <Avatar avatarSize="default" />
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                            <h3 className="text-base font-m-semibold">Question By</h3>
                            <hr className="w-2 h-2 bg-blue-500 border-none rounded-full"/>
                            <h3 className="text-base font-m-semibold">Indoforum</h3>
                        </div>
                        <p className="text-sm font-m-semibold text-gray-500">12 Februari 2025</p>
                    </div>
                </div>
                {/* question content */}
                <div className="bg-white w-full my-5">
                    <h2 className="text-xl font-m-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                </div>
                {/* related topics content */}
                <div className="flex flex-col gap-3">
                    <h3 className="text-base font-m-semibold">Related Topics</h3>
                    <div className="flex flex-wrap gap-2.5">
                        <Button
                            buttonStyle="ring-2 px-3 py-0.5 rounded-full"
                        >
                            <p className="text-sm font-m-semibold">Topic 1</p>
                        </Button>
                        <Button
                            buttonStyle="ring-2 px-3 py-0.5 rounded-full"
                        >
                            <p className="text-sm font-m-semibold">Topic 2</p>
                        </Button>
                        <Button
                            buttonStyle="ring-2 px-3 py-0.5 rounded-full"
                        >
                            <p className="text-sm font-m-semibold">Topic 3</p>
                        </Button>
                        <Button
                            buttonStyle="ring-2 px-3 py-0.5 rounded-full"
                        >
                            <p className="text-sm font-m-semibold">Topic 4</p>
                        </Button>
                    </div>
                </div>
                {/* answer content */}
                <div className="w-full bg-white flex items-center justify-between mt-6">
                    <Button
                        buttonStyle="flex items-center gap-2"
                    >
                        <p className="text-sm font-m-semibold">Answered By</p>
                        <hr className="w-2 h-2 bg-blue-500 border-none rounded-full"/>
                        <p className="text-sm font-m-semibold">32 User's</p>
                    </Button>
                    <Button
                        buttonStyle="flex items-center gap-2 ring-2 px-3 py-0.5 rounded-full"
                    >
                        <p className="text-sm font-m-semibold">Answer This</p>
                    </Button>
                </div>
            </div>
        </>
    )
}