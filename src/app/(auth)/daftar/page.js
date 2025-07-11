import AuthLayout from "@/components/layout/AuthLayout/AuthLayout";
import InputGroupLayout from "@/components/layout/InputGroupLayout/InputGroupLayout";
import InputAndLabel from "@/components/container/InputAndLabel/InputAndLabel";
import Button from "@/components/ui/button/Buttons";
import Link from "next/link";

export default function RegisterUser() {
    return (
        <AuthLayout
            title="Register"
            slug="Welcome! berikan informasi diri kamu."
        >
            <form className="w-full">
                <InputGroupLayout>
                    <InputAndLabel 
                        labelText="Nama Lengkap"
                        labelStyle="text-base font-m-semibold text-black"
                        inputId="name_user"
                        htmlFor="nama_user"
                        inputType="text"
                        inputPlaceholder="Jhon Doe"
                        required
                        inputStyle="ring-2 ring-gray-400 py-2.5 px-2 font-m-reguler text-base text-black focus:outline-0 focus:ring-primary-color placeholder:font-m-medium"
                    />
                    <InputAndLabel 
                        labelText="Email Kamu"
                        labelStyle="text-base font-m-semibold text-black"
                        inputId="email_user"
                        htmlFor="email_user"
                        inputType="email"
                        inputPlaceholder="example@mail.com"
                        required
                        inputStyle="ring-2 ring-gray-400 py-2.5 px-2 font-m-reguler text-base text-black focus:outline-0 focus:ring-primary-color placeholder:font-m-medium"
                    />
                    <InputAndLabel 
                        labelText="Password Email"
                        labelStyle="text-base font-m-semibold text-black"
                        inputId="password_email"
                        htmlFor="password_email"
                        inputType="password"
                        inputPlaceholder="******"
                        required
                        inputStyle="ring-2 ring-gray-400 py-2.5 px-2 font-m-reguler text-base text-black focus:outline-0 focus:ring-primary-color placeholder:font-m-medium"
                    />
                    <Button
                        buttonStyle="ring-2 w-full mt-4 py-1.5 rounded-md flex items-center justify-center gap-2 bg-secondary-color"
                    >
                        <p className="text-base font-m-semibold text-white">daftar akun</p>
                    </Button>
                </InputGroupLayout>
                <p className="text-base font-m-semibold mt-4 text-center">Sudah punya akun? <Link href="/masuk" className="text-secondary-color">masuk disini.</Link></p>
            </form>
        </AuthLayout>
    )
}