"use client"

import { useState } from "react"

export default function ReadMore({ text }) {
    const [isReadMore, setIsReadMore] = useState(false);

    return (
        <p>
            {text}
        </p>
    )
}