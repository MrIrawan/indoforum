import QuestionCard from "@/components/pages/QuestionCard/QuestionCard";
import Avatar from "@/components/ui/Avatar/Avatar";
import Button from "@/components/ui/button/Buttons";

export default function QuestionsPage() {

    const dummyData = {
        userData: {
            user_name: "Farrel Irawan",
            posted_at: "12 Februari 2025"
        },
        questionData: {
            question_title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        topics: ["Topic 1", "Topic 2", "Topic 3"],
        answeredCount: 100
    }

    return (
        <>
            <QuestionCard data={dummyData}/>
        </>
    )
}