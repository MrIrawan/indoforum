"use client"

import Image from "next/image"
import inndofoumLogo from "../../../public/images/indoforum-logo.svg"

export default function PostPage() {
    return (
        <>
            <article className="w-full flex flex-col">
                {/* card header (whos post and date) */}
                <div className="w-full flex">
                    <div className="w-fit flex flex-col gap-3">
                        <div className="flex items-center h-12 gap-3">
                            <Image 
                                src={inndofoumLogo}
                                alt="indoforum-logo"
                                width={35}
                                height={35}
                                className="w-11 h-11 rounded-full"
                            />
                            <div className="flex flex-col">
                                <p className="text-base font-m-semibold">Farrel Irawan</p>
                                <p className="text-sm font-m-semibold text-gray-400">12 Februari 2025</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}