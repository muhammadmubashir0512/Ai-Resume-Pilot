import GlassCard from '../../components/Layout/GlassEffect'
import { Typography } from '../../styles/Font'
import { Colors } from '../../styles/Color'
import checked from "../../assets/Checked.svg"
import listening from "../../assets/Listening.png"

const data = [
    { id: 1, body: "Industry-specific behavioral questions" },
    { id: 2, body: "Visual and audio sentiment analysis" },
    { id: 3, body: "Personalized follow-up strategy" }
]

const RealMoackInterview = () => {
    return (
        <div className="w-full px-5 sm:px-6 lg:px-10">

            <div className="w-full lg:px-[40px] lg:px-[68px]">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:px-8">

                    {/* Interview Messages */}
                    <div className="w-full lg:pr-10 order-2 lg:order-1">
                        <GlassCard className="h-full space-y-6">

                            <div className="flex flex-row gap-2 items-center">
                                <img
                                    src={listening}
                                    alt=""
                                    className="h-10 w-10 sm:h-12 sm:w-12 shrink-0"
                                />

                                <div>
                                    <p
                                        className={Typography.subheading}
                                        style={{ color: Colors.textbody }}
                                    >
                                        AI Interviewer
                                    </p>

                                    <div className="flex flex-row items-center gap-1">
                                        <div className="rounded-full h-[10px] w-[10px] bg-[#4CD7F6]" />
                                        <p className="text-[#4CD7F6]">
                                            Listening...
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full flex flex-col gap-4">
                                <div className="w-full flex justify-start">
                                    <div
                                        className="rounded-r-2xl rounded-b-2xl p-3 sm:p-4 max-w-[90%] sm:max-w-[320px]"
                                        style={{ backgroundColor: Colors.inputs }}
                                    >
                                        <p
                                            className={Typography.body}
                                            style={{ color: Colors.textbody }}
                                        >
                                            "That's a great experience. How do you
                                            specifically handle conflict within a high-
                                            stakes team project?"
                                        </p>
                                    </div>
                                </div>

                                <div className="w-full flex justify-end">
                                    <div
                                        className="rounded-l-2xl rounded-b-2xl p-3 sm:p-4 max-w-[90%] sm:max-w-[320px]"
                                        style={{
                                            backgroundColor: `${Colors.light}20`,
                                            border: `1px solid ${Colors.light}20`
                                        }}
                                    >
                                        <p
                                            className={Typography.body}
                                            style={{ color: Colors.textbody }}
                                        >
                                            "I usually start by identifying the root
                                            cause through one-on-one
                                            communication..."
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-4 border-t border-white/10">

                                <div className="flex flex-col gap-1 p-2 rounded-lg items-center justify-center bg-[#2D3449]">
                                    <p
                                        className={Typography.small}
                                        style={{ color: Colors.text }}
                                    >
                                        Intonation
                                    </p>

                                    <p
                                        className={Typography.subheading}
                                        style={{ color: Colors.progressCircle }}
                                    >
                                        Excellent
                                    </p>
                                </div>

                                <div className="flex flex-col gap-1 p-2 rounded-lg items-center justify-center bg-[#2D3449]">
                                    <p
                                        className={Typography.small}
                                        style={{ color: Colors.text }}
                                    >
                                        Answer Detail
                                    </p>

                                    <p
                                        className={Typography.subheading}
                                        style={{ color: Colors.progressCircle }}
                                    >
                                        8/10
                                    </p>
                                </div>

                            </div>

                        </GlassCard>
                    </div>

                    {/* Heading and subheading */}
                    <div className="flex flex-col justify-center gap-8 text-center lg:text-left order-1 lg:order-2">

                        <div className="flex flex-col gap-3.5">
                            <p
                                className={Typography.responsiveHeading}
                                style={{ color: Colors.textbody }}
                            >
                                Real-Time Mock Interviews
                            </p>

                            <p
                                className={`${Typography.body} max-w-[446px] mx-auto lg:mx-0`}
                                style={{ color: Colors.text }}
                            >
                                Conquer interview anxiety with our empathetic AI
                                coach. Get real-time feedback on your speech
                                patterns, confidence, and answer depth.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 items-center lg:items-start">

                            {data.map((line) => (
                                <div
                                    key={line.id}
                                    className="flex flex-row gap-3 items-center text-white text-left"
                                >
                                    <img
                                        src={checked}
                                        alt=""
                                        className="shrink-0"
                                    />

                                    <p>{line.body}</p>
                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default RealMoackInterview