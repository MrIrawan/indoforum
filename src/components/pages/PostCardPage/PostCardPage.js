import PostCardLayout from "@/components/layout/PostCardLayout/PostCardLayout";

import CardContent from "@/components/container/CardContent/CardContent";
import CardFooter from "@/components/container/CardFooter/CardFooter";
import CardHeader from "@/components/container/CardHeader/CardHeader";

export default function PostCardPage() {
    return (
        <PostCardLayout>
            <CardHeader />
            <CardContent />
            <CardFooter />
        </PostCardLayout>
    )
}