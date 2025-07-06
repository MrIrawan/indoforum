"use client"

import { useState } from "react"

export default function UserProfileName() {
    const [isName, isNotName] = useState(null);

    return (
        <h2 className="text-2xl font-m-bold capitalize">{isName ? isName : "Farrel Irawan"}</h2>
    )
}