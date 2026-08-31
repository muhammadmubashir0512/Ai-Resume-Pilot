import React, { useState } from 'react'
import GlassCard from '../../components/Layout/GlassEffect'
import { Typography } from '../../styles/Font'
import { Colors } from '../../styles/Color'
import difficulty from "../../assets/difficulty.svg"
import interview from "../../assets/interview.svg"
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'

const AiInterview = () => {

    const [interviewData, setInterviewData] = useState(null)
    const navigate = useNavigate()

    return (
        <GlassCard padding="p-5">

            {
                interviewData ? (
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
                                        {interviewData.activeSession}
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
                                    DIFFICULTY: {interviewData.difficulty}
                                </p>
                            </div>

                            <p
                                className="text-[20px] md:text-[22px] leading-relaxed italic"
                                style={{ color: Colors.textbody }}
                            >
                                "{interviewData.question}"
                            </p>


                            {/* Answer Quality */}
                            <div className="flex flex-row items-center gap-4">

                                <div className="h-[6px] flex-1 rounded-full bg-[#171F33]">

                                    <div
                                        className="h-[6px] rounded-full"
                                        style={{
                                            width: `${interviewData.answerQualityScore * 10}%`,
                                            backgroundColor: Colors.light
                                        }}
                                    />

                                </div>

                                <p
                                    className="text-[16px] font-bold whitespace-nowrap"
                                    style={{ color: Colors.light }}
                                >
                                    {interviewData.answerQualityScore} / 10
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
                                    {interviewData.responseClarity}
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
                                    {interviewData.technicalAccuracy}
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
                                    {interviewData.sentimentAnalysis}
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
                ) : (
                    <div className="flex flex-col items-center justify-center text-center gap-4 min-h-[280px]">

                        <img
                            src={interview}
                            alt=""
                            className="w-10 h-10 opacity-70"
                        />

                        <div className="flex flex-col gap-2">
                            <p
                                className={Typography.heading}
                                style={{ color: Colors.textbody }}
                            >
                                No Mock Interview Yet
                            </p>

                            <p
                                className="text-[13px] leading-6 max-w-md"
                                style={{ color: Colors.text }}
                            >
                                Start a mock interview based on your resume and target job to get
                                AI-driven feedback, performance scoring, and tips to improve.
                            </p>
                        </div>

                        <Button
                            variant="secondary"
                            size="normal"
                            className="cursor-pointer"
                            disabled="true"
                            onClick={() => navigate("/resume-Analyzer")}
                        >
                            Start Mock Interview
                        </Button>

                    </div>
                )
            }

        </GlassCard>
    )
}

export default AiInterview
