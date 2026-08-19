import React from 'react'
import GlassCard from '../../components/Layout/GlassEffect'
import { Typography } from '../../styles/Font'
import { Colors } from '../../styles/Color'
import difficulty from "../../assets/difficulty.svg"
import interview from "../../assets/interview.svg"

const AiInterview = ({ data }) => {

    return (
        <GlassCard padding="p-5">

            <div className="flex flex-col gap-8">

                {/* Header */}
                <div className="flex flex-row gap-4 items-center">

                    <div className="flex items-center justify-center bg-[#172A43] rounded-xl w-[50px] h-[50px]">
                        <img
                            src={interview}
                            alt=""
                            className="w-[28px] h-[28px]"
                        />
                    </div>

                    <div className="flex flex-col">

                        <p
                            className={Typography.heading}
                            style={{ color: Colors.textbody }}
                        >
                            AI Interviewer
                        </p>

                        <p
                            className="text-[14px] uppercase tracking-wide"
                            style={{ color: Colors.text }}
                        >
                            ACTIVE SESSION:{" "}
                            <span style={{ color: Colors.light }}>
                                {data.activeSession}
                            </span>
                        </p>

                    </div>

                </div>


                {/* Question Card */}
                <div className="bg-[#222D43] rounded-2xl p-6 flex flex-col gap-5">

                    <div className='flex flex-row items-center gap-2'>
                        <img src={difficulty} alt="" />
                        <p
                            className="text-[16px] font-semibold uppercase tracking-wide"
                            style={{ color: Colors.light }}
                        >
                            DIFFICULTY: {data.difficulty}
                        </p>
                    </div>

                    <p
                        className="text-[20px] md:text-[22px] leading-relaxed italic"
                        style={{ color: Colors.textbody }}
                    >
                        "{data.question}"
                    </p>


                    {/* Answer Quality */}
                    <div className="flex flex-row items-center gap-4">

                        <div className="h-[6px] flex-1 rounded-full bg-[#171F33]">

                            <div
                                className="h-[6px] rounded-full"
                                style={{
                                    width: `${data.answerQualityScore * 10}%`,
                                    backgroundColor: Colors.light
                                }}
                            />

                        </div>

                        <p
                            className="text-[16px] font-bold whitespace-nowrap"
                            style={{ color: Colors.light }}
                        >
                            {data.answerQualityScore} / 10
                        </p>

                    </div>

                    <p
                        className={Typography.small}
                        style={{ color: Colors.text }}
                    >
                        Latest Answer Quality Score
                    </p>

                </div>


                {/* Analysis */}
                <div className="flex flex-col gap-5">

                    <div className="flex flex-row justify-between">
                        <p
                            className={Typography.body}
                            style={{ color: Colors.text }}
                        >
                            Response Clarity
                        </p>

                        <p
                            className={Typography.body}
                            style={{ color: Colors.light }}
                        >
                            {data.responseClarity}
                        </p>
                    </div>


                    <div className="flex flex-row justify-between">
                        <p
                            className={Typography.body}
                            style={{ color: Colors.text }}
                        >
                            Technical Accuracy
                        </p>

                        <p
                            className={Typography.body}
                            style={{ color: Colors.light }}
                        >
                            {data.technicalAccuracy}
                        </p>
                    </div>


                    <div className="flex flex-row justify-between">
                        <p
                            className={Typography.body}
                            style={{ color: Colors.text }}
                        >
                            Sentiment Analysis
                        </p>

                        <p
                            className={Typography.body}
                            style={{ color: Colors.light }}
                        >
                            {data.sentimentAnalysis}
                        </p>
                    </div>

                </div>


                {/* Button */}
                <button
                    className="w-full py-4 rounded-xl font-bold cursor-pointer transition-all duration-300 hover:opacity-90"
                    style={{
                        backgroundColor: Colors.light,
                        color: "#15139A"
                    }}
                >
                    RESUME MOCK INTERVIEW
                </button>

            </div>

        </GlassCard>
    )
}

export default AiInterview
