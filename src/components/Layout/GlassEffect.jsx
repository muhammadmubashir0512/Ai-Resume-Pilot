const GlassCard = ({ children, className = "", padding = "p-5" }) => {
    return (
        <div className={`glass-card ${padding} ${className}`}>
            {children}
        </div>
    )
}

export default GlassCard