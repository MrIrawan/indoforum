"use client"

import { useState } from "react"

export default function UserProfileJob() {
    const [isJob, isNotJob] = useState(null);

    return (
        <p className="text-sm font-m-medium text-black">{isJob ? isJob : "User did not write job"}</p>
    )
}