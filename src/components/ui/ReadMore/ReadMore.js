"use client"

import { useState } from "react";

export default function ReadMore({ text, amountOfWord = 15, textStyle = "" }) {
    const [isReadMore, setIsReadMore] = useState(false);

    const splittedText = text.split(" ");
    const itCanOverflow = splittedText.length > amountOfWord;
    const beginText = itCanOverflow
        ? splittedText.slice(0, amountOfWord - 1).join(" ")
        : text;
    const endText = splittedText.slice(amountOfWord - 1).join(" ");

    return (
        <p className={`${textStyle}`}>
            {beginText}
            {itCanOverflow && (
                <>
                    {!isReadMore && <span>... </span>}
                    <span className={`${!isReadMore && 'hidden'}`}>
                        {endText}
                    </span>
                    <span 
                        className="text-primary-color ml-2 cursor-pointer"
                        onClick={() => setIsReadMore(!isReadMore)}
                    >
                        {isReadMore ? "read less" : "read more"}
                    </span>
                </>
            )}
        </p>
    )
}