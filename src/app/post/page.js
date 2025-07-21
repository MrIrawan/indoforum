"use client"

import PostCardPage from "@/components/pages/PostCardPage/PostCardPage"
import SearchBar from "@/components/container/SearchBar/SearchBar"

export default function PostPage() {
    return (
        <div className="h-screen mt-2">
            <SearchBar />
            <div className="h-full bg-green-400 mt-2">
                <PostCardPage />
            </div>
        </div>
    )
}