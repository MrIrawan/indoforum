import InputAndLabel from "@/components/container/InputAndLabel/InputAndLabel";
import AuthLayout from "@/components/layout/AuthLayout/AuthLayout";
import InputGroupLayout from "@/components/layout/InputGroupLayout/InputGroupLayout";
import Button from "@/components/ui/button/Buttons";

export default function LoginUser() {
    return (
        <AuthLayout
            title="Login"
            slug="Welcome Back! ayo masuk ke akun kamu."
            variant="masuk"
        >
            <form className="w-full">
                <InputGroupLayout>
                    <InputAndLabel 
                        labelText="Email Kamu"
                        labelStyle="text-base text-black font-m-semibold"
                        htmlFor="email_user"
                        inputId="email_user"
                        inputType="email"
                        inputPlaceholder="example@mail.com"
                        required
                        inputStyle="ring-2 ring-gray-400 py-2.5 px-2 font-m-reguler text-base text-black focus:outline-0 focus:ring-primary-color placeholder:font-m-medium"
                    />
                    <InputAndLabel 
                        labelText="Password Email"
                        labelStyle="text-base text-black font-m-semibold"
                        htmlFor="password_user"
                        inputId="password_user"
                        inputType="email"
                        inputPlaceholder="******"
                        required
                        inputStyle="ring-2 ring-gray-400 py-2.5 px-2 font-m-reguler text-base text-black focus:outline-0 focus:ring-primary-color placeholder:font-m-medium"
                    />
                    <Button
                        buttonStyle="ring-2 w-full py-1.5 mt-4 bg-secondary-color rounded-md flex items-center justify-center gap-2"
                    >
                        <p className="text-base font-m-semibold text-text-color">masuk akun</p>
                    </Button>
                </InputGroupLayout>
            </form>
        </AuthLayout>
    )
}