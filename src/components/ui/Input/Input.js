export default function CustomInput({
    type = "text",
    placeholder = "",
    required = false,
    id = "",
    classname
}) {
    return (
        <>
            <input 
                type={type}
                placeholder={placeholder}
                required={required}
                className={`${classname}`}
                id={id}
            />
        </>
    )
}