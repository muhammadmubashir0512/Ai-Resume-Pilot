import { Colors } from "../styles/Color"

const variantStyles = {
    primary: {
        backgroundColor: Colors.primary,
        color: "#fff",
        border: "none",
    },
    secondary: {
        backgroundColor: Colors.secondary,
        color: "#fff",
        border: "none",
    },
    danger: {
        backgroundColor: Colors.danger,
        color: "#fff",
        border: "none",
    },
    success: {
        backgroundColor: Colors.success,
        color: "#fff",
        border: "none",
    },
    outline: {
        backgroundColor: "transparent",
        color: Colors.primary,
        border: `1.5px solid ${Colors.primary}`,
    },
    light: {
        backgroundColor: Colors.light,
        color: "#1000A9"
    },
    glass: {
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        color: "#fff",
        border: "1px solid rgba(255, 255, 255, 0.15)",
    },
}

const sizeStyles = {
    sm: "py-1 px-2 text-sm",
    md: "py-1.5 px-3 text-base",
    normal: "py-3 px-6 text-base",
    lg: "py-2.5 px-5 text-lg",
    responsive: "py-1.5 px-3 text-base lg:py-2.5 lg:px-5 lg:text-lg",
}

const Button = (props) => {
    const {
        children,
        onClick,
        variant = "primary",
        size = "md",
        disabled = false,
        className = "",
        rounded = "rounded-lg",
        type = "button",
    } = props

    const style = variantStyles[variant]
    const sizeClass = sizeStyles[size] || sizeStyles.md

    return (
        <button
            type={type}
            disabled={disabled}
            style={style}
            onClick={onClick}
            className={`
                flex items-center gap-2 font-medium
                transition-transform duration-300 ease-out
                hover:scale-[1.01]
                active:scale-[0.995]
                disabled:opacity-50 disabled:cursor-not-allowed
                ${rounded}
                ${sizeClass}
                ${className}
            `}
        >
            {children}
        </button>
    )
}

export default Button