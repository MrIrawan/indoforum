export default function QuestionContent({ questionData }) {
    return (
        <div className="bg-white w-full my-5">
            <h2 className="text-xl font-m-bold">{ questionData.question_title ? questionData.question_title : "Lorem Ipsum Dolor Sit Amet." }</h2>
        </div>
    )
}