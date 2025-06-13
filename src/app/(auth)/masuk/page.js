import SectionSite from "@/components/layout/Section";

export default function LoginUser() {
    return (
        <>
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <div className="w-fit flex flex-col">
                        <div className="flex flex-col justify-between mb-8">
                            <h2 className="text-2xl mb-3 text-black font-m-semibold">Indoforum</h2>
                            <h3 className="text-5xl mb-6 font-m-bold ">Login</h3>
                            <p className="text-black font-m-medium">welcome back! berikan informasi diri kamu.</p>
                        </div>
                        <form className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-base font-m-semibold text-black">Email</label>
                                <input 
                                    type="email" 
                                    id="email_user" 
                                    name="email_user" 
                                    placeholder="budiwicaksono@mail.com" 
                                    className="border py-2.5 px-2 font-m-reguler text-base text-black focus:outline-0 focus:ring focus:ring-secondary-color"
                                />
                            </div>
                            <div className="flex flex-col gap-2 mb-4">
                                <label className="text-base font-m-bold text-black">Password</label>
                                <input 
                                    type="password" 
                                    id="password_user" 
                                    name="password_user" 
                                    placeholder="********" 
                                    className="border py-2.5 px-2 font-m-reguler text-base text-black focus:outline-0 focus:ring focus:ring-secondary-color"
                                />
                            </div>
                            <button className="bg-secondary-color py-2.5 px-3">
                                <p className="text-lg font-m-medium text-white">Masuk</p>
                            </button>
                        </form>
                        <p className="text-base font-m-medium leading-relaxed mt-10">belum mendaftar di indoforum? <a href="/daftar" className="text-primary-color">daftar di sini.</a></p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 hidden lg:block">
                    <div className="w-full h-full overflow-hidden">
                        <img 
                            src="/images/mosaic-indoforum.png" 
                            className="w-full h-full object-cover object-bottom"
                        />
                    </div>
                </div>
        </>
    )
}