"use client"

import ReadMore from "@/components/ui/ReadMore/ReadMore"

export default function CardContent({ data }) {
    return (
        <div className="bg-white py-2 px-3 border-y border-y-gray-300">
            {/* question content */}
            <h2 className="text-xl font-m-bold mb-3">What is Indoforum?</h2>
            {/* answer content */}
            <ReadMore 
                text={`Indoforum adalah bla bla bla...`}
                amountOfWord={30}
                textStyle="text-base font-m-reguler text-black"
            />
        </div>
    )
}