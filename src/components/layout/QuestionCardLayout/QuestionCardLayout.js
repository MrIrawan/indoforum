export default function QuestionCardLayout({ children }) {
    return (
        <div className="min-h-24 ring-2 ring-gray-200 shadow-xl bg-white flex flex-col px-3 py-4">
            { children }
        </div>
    )
}