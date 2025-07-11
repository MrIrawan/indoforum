import InputAndLabel from "@/components/container/InputAndLabel/InputAndLabel";

export default function InputGroupLayout() {
    return (
        <div className="flex flex-col gap-4">
            <InputAndLabel 
                labelText="Nama Kamu"
                htmlFor="nama_user"
                inputId="nama_user"
                inputType="text"
                inputPlaceholder="Jhon Doe"
                inputStyle="ring-2 ring-gray-400 py-2.5 px-2 font-m-medium text-base transition-all duration-300 ease-in-out placeholder:font-m-medium focus:outline-0 focus:ring-secondary-color"
                labelStyle="text-base font-m-semibold text-black"
            />
            <InputAndLabel 
                labelText="Email Kamu"
                htmlFor="email_user"
                inputId="email_user"
                inputType="text"
                inputPlaceholder="Jhon Doe"
                inputStyle="ring-2 ring-gray-400 py-2.5 px-2 font-m-medium text-base transition-all duration-300 ease-in-out placeholder:font-m-medium focus:outline-0 focus:ring-secondary-color"
                labelStyle="text-base font-m-semibold text-black"
            />
            <InputAndLabel 
                labelText="Password Kamu"
                htmlFor="password_email"
                inputId="password_email"
                inputType="text"
                inputPlaceholder="Jhon Doe"
                inputStyle="ring-2 ring-gray-400 py-2.5 px-2 font-m-medium text-base transition-all duration-300 ease-in-out placeholder:font-m-medium focus:outline-0 focus:ring-secondary-color"
                labelStyle="text-base font-m-semibold text-black"
            />
        </div>
    )
}