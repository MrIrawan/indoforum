export default function QuestionContent({ questionData = "Lorem Ipsum Dolor Sit Amet." }) {
    return (
        <div className="bg-white w-full my-5">
            <h2 className="text-xl font-m-bold">{ questionData }</h2>
        </div>
    )
}