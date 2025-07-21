import Button from "@/components/ui/button/Buttons"

export default function QuestionTopics({ topics = [] }) {
    return (
        <div className="flex flex-col gap-3">
            <h3 className="text-base font-m-semibold">Related Topics</h3>
            <div className="flex flex-wrap gap-2.5">
                {topics.map((topic, index) => (
                    <Button
                        key={index}
                        buttonStyle="ring-2 px-3 py-0.5 rounded-full"
                    >
                        <p className="text-sm font-m-semibold">{topic}</p>
                    </Button>
                ))}
            </div>
        </div>
    )
}