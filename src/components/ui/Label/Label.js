export default function CustomLabel({
    htmlFor = "",
    children,
    classname
}) {
    return (
        <label 
            htmlFor={htmlFor}
            className={`${classname}`}
        >
            {children}
        </label>
    )
}