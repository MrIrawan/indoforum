"use client"

import CardContent from "@/components/container/CardContent/CardContent"
import CardFooter from "@/components/container/CardFooter/CardFooter"
import CardHrader from "@/components/container/CardHeader/CardHeader"
import SearchBar from "@/components/container/SearchBar/SearchBar"

export default function PostPage() {
    return (
        <div className="h-screen mt-2">
            <SearchBar />
            <div className="h-full bg-green-400 mt-2">
                <CardHrader />
                <CardContent />
                <CardFooter />
            </div>
        </div>
    )
}