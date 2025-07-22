"use client"

import LogoAndSlug from "@/components/container/LogoAndSlug/LogoAndSlug";
import NavIconList from "@/components/container/NavIconList/NavIconList";
import SearchBar from "@/components/container/SearchBar/SearchBar";
import QuestionCard from "@/components/pages/QuestionCard/QuestionCard";

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
            <LogoAndSlug />
            <SearchBar />
            <NavIconList />
            <div className="flex flex-col gap-6 px-3 py-3">
                <QuestionCard data={dummyData}/>
                <QuestionCard data={dummyData}/>
                <QuestionCard data={dummyData}/>
            </div>
        </>
    )
}
