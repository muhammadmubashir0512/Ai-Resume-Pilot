import { Colors } from "../../styles/Color"

const PageWrapper = ({ children, className = "" }) => {
    return (
        <div
            className={`min-h-screen w-full p-[24px] box-border ${className}`}
            style={{ backgroundColor: Colors.primary }}
        >
            <div className="w-full space-y-9 md:space-y-12">
                {children}
            </div>
        </div>
    )
}

export default PageWrapper
