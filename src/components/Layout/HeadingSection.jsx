// components/common/HeroHeading.jsx
import { Colors } from '../../styles/Color'
import { Typography } from '../../styles/Font'
import GlassCard from '../Layout/GlassEffect'

const HeroHeading = ({
    tag,
    headingParts,
    description
}) => {
    return (
        <div className='w-full flex flex-col items-center gap-[14px] lg:gap-[23px] md:px-[140px]'>

            {/* Tag */}
            {tag && (
                <div>
                    <GlassCard
                        className="rounded-full w-[200px] md:w-[225px] lg:w-[246px] text-center text-white"
                        padding="p-2"
                    >
                        <p className="text-[12px] md:text-[16px]" style={{ color: Colors.light }}>
                            {tag}
                        </p>
                    </GlassCard>
                </div>
            )}

            {/* Main Heading */}
            <p className={`text-white flex-wrap text-center animate-fade-in lg:leading-15 ${Typography.mainHeading}`}>
                {headingParts.map((part, index) => (
                    <span key={index}>
                        {part.gradient ? (
                            <span
                                className='text-[#4CD7F6]/80'
                            // style={{
                            //     backgroundImage: Colors.linearGradient,
                            //     WebkitBackgroundClip: "text",
                            //     WebkitTextFillColor: "transparent",
                            //     backgroundClip: "text",
                            // }}
                            >
                                {part.text}
                            </span>
                        ) : (
                            part.text
                        )}
                        {part.break && <br />}
                        {!part.break && index < headingParts.length - 1 && " "}
                    </span>
                ))}
            </p>

            {/* Description */}
            {description && (
                <p
                    className={`text-white flex-wrap text-center max-w-[575px] w-full ${Typography.body}`}
                    style={{ color: Colors.text }}
                >
                    {description}
                </p>
            )}
        </div>
    )
}

export default HeroHeading