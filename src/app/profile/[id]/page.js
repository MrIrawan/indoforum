import Image from "next/image"
import indoforumImage from "../../../../public/images/mosaic-indoforum.png"
import fluidImage from "../../../../public/images/fluid.jpg"

export default function UserProfile() {
    return (
        <div className="w-full h-screen flex flex-col">
            <div id="banner-image" className="w-full h-60 shadow-md relative">
                <Image 
                    src={fluidImage}
                    className="w-full h-full object-cover"
                    alt="indoforum"
                />
                <div className="w-[160px] h-[160px] rounded-full overflow-hidden ring-4 ring-white absolute top-1/2 left-5 translate-y-10">
                    <Image 
                        src={indoforumImage}
                        className="w-full h-full object-cover"
                        alt="indoforum"
                    />
                </div>
            </div>
            {/* profile card */}
            <div className="w-full h-full px-5 pt-25">
                {/* profile name and job */}
                <div className="flex items-center justify-between">
                    <div className="flex flex-col items-start">
                        <h2 className="text-2xl font-m-bold capitalize">Farrel Irawan</h2>
                        <p className="text-sm font-m-medium">UI/UX Designer & Frontend Developer</p>
                    </div>
                    <div className="flex justify-between gap-3">
                        <button className="w-8 h-8 ring-2 rounded-full"></button>
                        <button className="w-8 h-8 ring-2 rounded-full"></button>
                    </div>
                </div>
            </div>
        </div>
    )
}