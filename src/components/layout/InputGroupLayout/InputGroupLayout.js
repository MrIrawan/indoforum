import InputAndLabel from "@/components/container/InputAndLabel/InputAndLabel";

export default function InputGroupLayout({ children }) {
    return (
        <div className="flex flex-col gap-4">
            { children }
        </div>
    )
}