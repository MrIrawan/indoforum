import QuestionCardLayout from "@/components/layout/QuestionCardLayout/QuestionCardLayout";

import QuestionByUser from "@/components/container/QuestionByUser/QuestionByUser";
import QuestionContent from "@/components/container/QuestionContent/QuestionContent";
import QuestionTopics from "@/components/container/QuestionTopics/QuestionTopics";
import QuestionFooter from "@/components/container/QuestionFooter/QuestionFooter";

export default function QuestionCard({
    data = {}
}) {
    return (
        <QuestionCardLayout>
            <QuestionByUser userData={data.userData}/>
            <QuestionContent questionData={data.questionData}/>
            <QuestionTopics topics={data.topics}/>
            <QuestionFooter answeredCount={data.answeredCount}/>
        </QuestionCardLayout>
    )
}