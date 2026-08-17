import { forwardRef } from "react"
import { Colors } from "../styles/Color"

const Input = forwardRef(({ label, type = "text", placeholder, error, className = "", ...rest }, ref) => {
    return (
        <div className="mb-4">
            {label && <label className="block text-sm font-medium mb-1" style={Colors.text}>{label}</label>}
            <input
                type={type}
                ref={ref}
                placeholder={placeholder}
                className={`w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f46e5] border border-[#fff]/5 ${error ? 'border-red-500' : 'border-gray-300'} ${className}`} style={{ backgroundColor: Colors.inputs }} {...rest}
            />
            {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
        </div>
    )
})

export default Input
