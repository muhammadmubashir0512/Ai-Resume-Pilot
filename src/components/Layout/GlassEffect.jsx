const GlassCard = ({ children, rounded = "rounded-2xl", className = "", padding = "p-5" }) => {
    return (
        <div className={`glass-card ${padding} ${className} ${rounded}`}>
            {children}
        </div>
    )
}

export default GlassCard