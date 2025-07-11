import CustomInput from "@/components/ui/Input/Input";
import CustomLabel from "@/components/ui/Label/Label";

export default function InputAndLabel({
    labelText = "",
    htmlFor = "",
    inputId = "",
    labelStyle = "",
    inputType = "",
    inputStyle = "",
    required = false,
    inputPlaceholder = ""
}) {
    return (
        <div className="flex flex-col gap-1.5 px-3">
            <CustomLabel
                htmlFor={htmlFor}
                classname={labelStyle}
            >
                { labelText }
            </CustomLabel>
            <CustomInput 
                type={inputType}
                id={inputId}
                classname={inputStyle}
                placeholder={inputPlaceholder}
                required={required}
            />
        </div>
    )
}