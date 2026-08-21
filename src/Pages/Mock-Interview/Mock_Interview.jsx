import { Typography } from '../../styles/Font'
import { Colors } from '../../styles/Color'
import PageWrapper from '../../components/Layout/PageWrapper'
import DashboardNavbar from '../Dashboard/DashboardNavbar'
import GlassCard from '../../components/Layout/GlassEffect'
import { interviewQuestions } from "./Mock_interew_Data"
import { useState } from 'react'
import Button from '../../components/Button'
import { toast, Toaster } from 'react-hot-toast'
import context from "../../assets/context.svg"
import { useNavigate } from 'react-router-dom'


const Mock_Interview = () => {

    const navigate = useNavigate()

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answer, setAnswer] = useState("")

    const handleNext = () => {
        if (!answer.trim()) {
            toast.error("Please add an answer before submitting")
            return
        }

        if (currentQuestion < interviewQuestions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
            setAnswer("")
        } else {
            console.log("Interview completed")
            setAnswer("")
            toast.success("Interview completed successfully")
            setTimeout(() => {
                navigate("/Mock-Interview/result")
            }, 1000);
        }
    }

    return (
        <PageWrapper>
            <Toaster />
            <DashboardNavbar />


            {/* Title */}
            <div className='flex flex-col gap-2'>
                <p className={`${Typography.responsiveHeading}`} style={{ color: Colors.textbody }}>Mock Interview Practice</p>
                <p className={`${Typography.small} md:${Typography.body}`} style={{ color: Colors.text }}>Practice role-based questions and get high-fidelity AI feedback on your communication
                    style and technical depth.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10'>

                {/* Interview Questions */}
                <GlassCard>

                    <div className='flex flex-col gap-6'>

                        {/* Tag active questions */}
                        <div className="flex flex-col md:flex-row gap-5 items-center w-full">

                            {/* Tag */}
                            <div
                                className={`${Typography.small} border-2 rounded-full py-1 px-3 whitespace-nowrap`}
                                style={{
                                    color: Colors.progressCircle,
                                    backgroundColor: `${Colors.progressCircle}20`,
                                    borderColor: `${Colors.progressCircle}30`
                                }}
                            >
                                Active Question
                            </div>

                            {/* Progress Bar */}
                            <div className="flex flex-col gap-1 w-full">

                                <div className="flex justify-end">
                                    <p
                                        className={`${Typography.small}`}
                                        style={{ color: Colors.progressCircle }}
                                    >
                                        {currentQuestion + 1}/{interviewQuestions.length}
                                    </p>
                                </div>

                                <div className="w-full h-1 rounded-full bg-white/5 overflow-hidden">
                                    <div
                                        className="h-1 rounded-full transition-all duration-500 ease-out"
                                        style={{
                                            backgroundColor: Colors.progressCircle,
                                            width: `${((currentQuestion + 1) / interviewQuestions.length) * 100}%`
                                        }}
                                    />
                                </div>

                            </div>

                        </div>

                        {/* Interview Questions */}
                        <p className={`${Typography.body}`} style={{ color: Colors.textbody }}>
                            "{interviewQuestions[currentQuestion].question}"
                        </p>

                        {/* Your response */}
                        <div className='flex flex-col gap-4'>

                            <p className={`${Typography.body}`} style={{ color: Colors.textbody }}>YOUR RESPONSE</p>

                            {/* Answer section */}
                            <textarea
                                value={answer}
                                onChange={(e) => setAnswer(e.target.value)}
                                placeholder='Structure your answer using the STAR method (Situation, Task, Action, Result)...'
                                className='bg-[#060E20]
                                    p-6
                                    text-[#C7C4D7]/50
                                    h-[390px]
                                    rounded-xl
                                    border border-[#fff]/10
                                '
                            />

                        </div>

                        {/* Next Button */}
                        <div className='flex justify-end'>
                            <Button variant="secondary" size="normal" className="cursor-pointer" onClick={() => handleNext()}>
                                {currentQuestion === interviewQuestions.length - 1
                                    ? "Finish Interview"
                                    : "Submit Answer"
                                }
                            </Button>
                        </div>

                    </div>

                </GlassCard>

                {/* Ai Feedback */}
                <GlassCard padding="p-0">

                    <div className="flex flex-col">

                        {/* Feedback Header */}
                        <div className="flex flex-row justify-between items-center gap-4 p-5 sm:p-6 bg-[#14283D] rounded-t-2xl">

                            <div className="flex flex-col">
                                <p
                                    className="text-[20px] sm:text-[22px]"
                                    style={{ color: Colors.textbody }}
                                >
                                    AI Feedback
                                </p>

                                <p
                                    className="text-[14px] sm:text-[16px]"
                                    style={{ color: Colors.text }}
                                >
                                    Real-time analysis powered by
                                    <br />
                                    PilotAI
                                </p>
                            </div>

                            <div className="flex flex-col items-center">

                                <div className="flex items-end">
                                    <span
                                        className="text-[40px] leading-none"
                                        style={{ color: Colors.progressCircle }}
                                    >
                                        {currentQuestion + 1}
                                    </span>

                                    <span
                                        className="text-[16px] mb-1"
                                        style={{ color: Colors.progressCircle }}
                                    >
                                        /{interviewQuestions.length}
                                    </span>
                                </div>

                                <p
                                    className="text-[12px]"
                                    style={{ color: Colors.progressCircle }}
                                >
                                    SCORE
                                </p>

                            </div>

                        </div>

                        {/* Feedback Body */}
                        <div className="flex flex-col gap-8 p-5 sm:p-6">

                            {/* Strengths */}
                            <div className="flex flex-col gap-4">

                                <p
                                    className="text-[18px] sm:text-[20px] tracking-widest"
                                    style={{ color: Colors.light }}
                                >
                                    ◉ STRENGTHS
                                </p>

                                <div className="flex flex-col gap-4">

                                    <div className="flex gap-3">
                                        <div
                                            className="w-[3px] rounded-full"
                                            style={{ backgroundColor: Colors.light }}
                                        />

                                        <p
                                            className={`${Typography.body}`}
                                            style={{ color: Colors.text }}
                                        >
                                            Clear structure and logical flow in describing
                                            the problem-solving process.
                                        </p>
                                    </div>

                                    <div className="flex gap-3">
                                        <div
                                            className="w-[3px] rounded-full"
                                            style={{ backgroundColor: Colors.light }}
                                        />

                                        <p
                                            className={`${Typography.body}`}
                                            style={{ color: Colors.text }}
                                        >
                                            Maintained a professional and objective tone
                                            throughout the explanation.
                                        </p>
                                    </div>

                                </div>

                            </div>

                            {/* Growth Areas */}
                            <div className="flex flex-col gap-4">

                                <p
                                    className="text-[18px] sm:text-[20px] tracking-widest"
                                    style={{ color: "#E99A5A" }}
                                >
                                    ♧ GROWTH AREAS
                                </p>

                                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 sm:p-5">

                                    <p
                                        className={`${Typography.body}`}
                                        style={{ color: Colors.text }}
                                    >
                                        "Consider mentioning specific conflict
                                        resolution frameworks like{" "}
                                        <span
                                            className="underline"
                                            style={{ color: "#E99A5A" }}
                                        >
                                            Thomas-Kilmann
                                        </span>{" "}
                                        to demonstrate formal methodology."
                                    </p>

                                    <button
                                        type="button"
                                        className="mt-4 text-sm cursor-pointer transition-opacity duration-200 hover:opacity-80"
                                        style={{ color: "#E99A5A" }}
                                    >
                                        Learn this framework ↗
                                    </button>

                                </div>

                            </div>

                            {/* Analyzing */}
                            <div className="border-t border-white/10 pt-6">

                                <div className="flex justify-center items-center gap-3">

                                    <div
                                        className="w-2 h-2 rounded-full animate-pulse"
                                        style={{
                                            backgroundColor: Colors.progressCircle,
                                            boxShadow: `0 0 10px ${Colors.progressCircle}`
                                        }}
                                    />

                                    <p
                                        className="text-[16px] sm:text-[18px]"
                                        style={{ color: Colors.progressCircle }}
                                    >
                                        AI is analyzing your tone...
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </GlassCard>

            </div>

            {/* Recommended + Target Context */}
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">

                {/* Recommended For You */}
                <GlassCard>

                    <div className="flex flex-col gap-6">

                        <p
                            className={`${Typography.subheading}tracking-widest`}
                            style={{ color: Colors.textbody }}
                        >
                            RECOMMENDED FOR YOU
                        </p>

                        <div className="flex flex-col md:flex-row gap-8 md:gap-20">

                            {/* Recommendation 1 */}
                            <div className="flex items-center gap-5">

                                <div className="
                        w-[48px] h-[48px]
                        shrink-0
                        rounded-lg
                        flex items-center justify-center
                        bg-[#C0C1FF]/15
                    ">
                                    <span className="text-[32px]" style={{ color: Colors.light }}>
                                        ♧
                                    </span>
                                </div>

                                <div className="flex flex-col gap-1">

                                    <p
                                        className={`${Typography.body}`}
                                        style={{ color: Colors.textbody }}
                                    >
                                        STAR Method Guide
                                    </p>

                                    <p
                                        className={`${Typography.small}`}
                                        style={{ color: Colors.text }}
                                    >
                                        5 min read • Article
                                    </p>

                                </div>

                            </div>

                            {/* Recommendation 2 */}
                            <div className="flex items-center gap-5">

                                <div className="
                        w-[48px] h-[48px]
                        shrink-0
                        rounded-lg
                        flex items-center justify-center
                        bg-[#C0C1FF]/15
                    ">
                                    <span
                                        className="text-[28px]"
                                        style={{ color: Colors.progressCircle }}
                                    >
                                        ▷
                                    </span>
                                </div>

                                <div className="flex flex-col gap-1">

                                    <p
                                        className={`${Typography.body}`}
                                        style={{ color: Colors.textbody }}
                                    >
                                        Handling Conflict
                                    </p>

                                    <p
                                        className={`${Typography.small}`}
                                        style={{ color: Colors.text }}
                                    >
                                        12 min • Video Case Study
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </GlassCard>


                {/* Target Context */}
                <GlassCard>

                    <div className="
            flex flex-col
            sm:flex-row
            items-start sm:items-center
            gap-6
        ">

                        {/* Icon */}
                        <img src={context} alt="" className='w-[48px] h-[48px]' />

                        {/* Context */}
                        <div className="flex flex-col gap-2">

                            <p
                                className={`${Typography.body}`}
                                style={{ color: Colors.text }}
                            >
                                TARGET CONTEXT
                            </p>

                            <p
                                className={`${Typography.subheading}`}
                                style={{ color: Colors.textbody }}
                            >
                                Senior Software Engineer
                            </p>

                            <div className="flex items-center gap-3">

                                <div className="w-3 h-3 rounded-full bg-[#FFAAA8]" />

                                <p
                                    className={`${Typography.body}`}
                                    style={{ color: "#FFAAA8" }}
                                >
                                    Hard Difficulty
                                </p>

                            </div>

                        </div>

                    </div>

                </GlassCard>

            </div>

        </PageWrapper>
    )
}

export default Mock_Interview
