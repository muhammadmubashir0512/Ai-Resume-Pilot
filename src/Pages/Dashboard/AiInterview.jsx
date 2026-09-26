import { useState, useEffect } from 'react'
import GlassCard from '../../components/Layout/GlassEffect'
import { Typography } from '../../styles/Font'
import { Colors } from '../../styles/Color'
import difficulty from "../../assets/difficulty.svg"
import interview from "../../assets/interview.svg"
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { get } from '../../services/api'

const AiInterview = () => {

    const [interviewData, setInterviewData] = useState(null)
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)

                const response = await get("/interview/latest")

                setInterviewData(response.data.Result)

            } catch (error) {
                console.log("Error", error)
                toast.error(error.message || "Something went wrong")
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    if (loading) {
        return (
            <GlassCard padding="p-5">
                <div className="flex justify-center items-center py-10">
                    <div className="w-8 h-8 rounded-full border-4 border-white/10 border-t-[#4CD7F6] animate-spin" />
                </div>
            </GlassCard>
        )
    }

    const finalEvaluation = interviewData?.finalEvaluation

    return (
        <GlassCard padding="p-6">

            {
                interviewData ? (
                    <div className="flex flex-col gap-8">

                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">

                            <div className="flex items-center gap-4">

                                <div className="flex items-center justify-center bg-[#172A43] rounded-2xl w-[58px] h-[58px] shrink-0">
                                    <img
                                        src={interview}
                                        alt=""
                                        className="w-[30px] h-[30px]"
                                    />
                                </div>

                                <div className="flex flex-col gap-1">

                                    <p
                                        className={Typography.heading}
                                        style={{ color: Colors.textbody }}
                                    >
                                        AI Interviewer
                                    </p>

                                    <p
                                        className="text-[13px] uppercase tracking-wide"
                                        style={{ color: Colors.text }}
                                    >
                                        Job Title:
                                        <span
                                            className="ml-1"
                                            style={{ color: Colors.light }}
                                        >
                                            {interviewData.jobTitle}
                                        </span>
                                    </p>

                                </div>

                            </div>

                            <div className="flex flex-row items-center gap-8">

                                <div>

                                    <p
                                        className="text-[12px] uppercase tracking-wide"
                                        style={{ color: Colors.text }}
                                    >
                                        Difficulty
                                    </p>

                                    <div className="flex items-center gap-2 mt-1">

                                        <img
                                            src={difficulty}
                                            alt=""
                                            className="w-[20px] h-[20px]"
                                        />

                                        <p
                                            className="text-[14px] font-semibold uppercase"
                                            style={{ color: Colors.light }}
                                        >
                                            {interviewData.difficulty}
                                        </p>

                                    </div>

                                </div>

                                <div>

                                    <p
                                        className="text-[12px] uppercase tracking-wide"
                                        style={{ color: Colors.text }}
                                    >
                                        Overall Score
                                    </p>

                                    <p
                                        className="text-[32px] font-bold leading-tight"
                                        style={{ color: Colors.light }}
                                    >
                                        {finalEvaluation?.overallScore ?? 0}
                                        <span className="text-[14px] font-medium">
                                            {" "} / 100
                                        </span>
                                    </p>

                                </div>

                            </div>

                        </div>

                        {
                            finalEvaluation && (
                                <>
                                    <GlassCard>

                                        <div className="flex flex-col gap-6">

                                            <div>
                                                <p
                                                    className={Typography.body}
                                                    style={{ color: Colors.textbody }}
                                                >
                                                    Performance Breakdown
                                                </p>

                                                <p
                                                    className="text-[12px] mt-1"
                                                    style={{ color: Colors.text }}
                                                >
                                                    Your performance across different interview areas
                                                </p>
                                            </div>

                                            <div className="grid grid-cols-1 gap-x-8 gap-y-12">

                                                {[
                                                    {
                                                        label: "Technical Knowledge",
                                                        score: finalEvaluation.technicalKnowledge
                                                    },
                                                    {
                                                        label: "Communication",
                                                        score: finalEvaluation.communication
                                                    },
                                                    {
                                                        label: "Problem Solving",
                                                        score: finalEvaluation.problemSolving
                                                    },
                                                    {
                                                        label: "Relevance",
                                                        score: finalEvaluation.relevance
                                                    }
                                                ].map((item) => (

                                                    <div
                                                        key={item.label}
                                                        className="flex flex-col gap-2"
                                                    >

                                                        <div className="flex justify-between items-center">

                                                            <p
                                                                className="text-[13px]"
                                                                style={{ color: Colors.text }}
                                                            >
                                                                {item.label}
                                                            </p>

                                                            <p
                                                                className="text-[13px] font-semibold"
                                                                style={{ color: Colors.light }}
                                                            >
                                                                {item.score ?? 0} / 100
                                                            </p>

                                                        </div>

                                                        <div className="h-[7px] rounded-full bg-[#171F33] overflow-hidden">

                                                            <div
                                                                className="h-full rounded-full transition-all duration-500"
                                                                style={{
                                                                    width: `${item.score ?? 0}%`,
                                                                    backgroundColor: Colors.light
                                                                }}
                                                            />

                                                        </div>

                                                    </div>

                                                ))}

                                            </div>

                                        </div>

                                    </GlassCard>

                                </>
                            )
                        }

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
                            onClick={() => navigate("/Mock-Interview/inprogress")}
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