export default function QuestionFooter({ answeredCount = 0 }) {
    return (
        <div className="bg-white w-full flex items-center justify-between mt-6">
            <div className="flex items-center gap-2">
                <p className="text-sm font-m-semibold">Answered By</p>
                <hr className="w-2 h-2 bg-blue-500 border-none rounded-full"/>
                <p className="text-sm font-m-semibold">{answeredCount} User's</p>
            </div>
            <div className="px-3 py-0.5 ring-2 rounded-full">
                <p className="text-sm font-m-semibold">Answer</p>
            </div>
        </div>
    )
}