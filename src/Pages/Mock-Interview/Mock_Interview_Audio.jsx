import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Colors } from '../../styles/Color'
import { Mic, X, MessageSquareText, Briefcase, Code2, Gauge, Globe } from 'lucide-react'

const SESSION_LENGTH = 8 * 60

const InterviewLive = () => {
    const navigate = useNavigate()

    const [secondsLeft, setSecondsLeft] = useState(462)
    const [aiSpeaking, setAiSpeaking] = useState(false)
    const [listening, setListening] = useState(true)
    const [transcriptOpen, setTranscriptOpen] = useState(false)

    const question = "Can you describe a time when you had to resolve a technical conflict within your team?"
    const questionIndex = 3
    const totalQuestions = 8

    const meta = {
        role: "Senior Software Engineer",
        type: "Technical",
        difficulty: "Medium",
        language: "English",
    }

    useEffect(() => {
        if (secondsLeft <= 0) return
        const timer = setInterval(() => setSecondsLeft((s) => s - 1), 1000)
        return () => clearInterval(timer)
    }, [secondsLeft])

    const minutes = String(Math.floor(secondsLeft / 60)).padStart(2, '0')
    const seconds = String(secondsLeft % 60).padStart(2, '0')
    const isLowTime = secondsLeft <= 30

    const handleMicToggle = () => {
        setListening((prev) => !prev)
    }

    return (
        <div
            className="min-h-screen w-full flex flex-col"
            style={{ backgroundColor: '#060B16' }}
        >

            <div
                className="flex flex-row items-center justify-between px-4 sm:px-8 py-4 sm:py-5 border-b"
                style={{ borderColor: '#ffffff0F' }}
            >
                <div className="flex flex-row items-center gap-2.5">
                    <span
                        className="w-2 h-2 rounded-full animate-pulse"
                        style={{ backgroundColor: Colors.progressCircle }}
                    />
                    <p className="text-[14px] sm:text-[15px] font-semibold" style={{ color: Colors.textbody }}>
                        Live Interview
                    </p>
                </div>

                <div
                    className="hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-full border"
                    style={{
                        backgroundColor: isLowTime ? '#FFB78310' : '#ffffff05',
                        borderColor: isLowTime ? '#FFB78340' : '#ffffff1A',
                    }}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={isLowTime ? '#FFB783' : Colors.progressCircle} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <p className="text-[13px] font-semibold tabular-nums" style={{ color: isLowTime ? '#FFB783' : Colors.textbody }}>
                        {minutes}:{seconds} remaining
                    </p>
                </div>

                <button
                    onClick={() => navigate('/mock-interview')}
                    className="flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full border cursor-pointer transition-all duration-200 hover:opacity-80"
                    style={{
                        backgroundColor: '#FFAAA810',
                        borderColor: '#FFAAA830',
                    }}
                >
                    <p className="text-[12px] sm:text-[13px] font-semibold" style={{ color: '#FFAAA8' }}>
                        End Interview
                    </p>
                </button>
            </div>

            <div className="sm:hidden flex items-center justify-center gap-2 px-4 py-2.5 border-b" style={{ borderColor: '#ffffff0F' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={isLowTime ? '#FFB783' : Colors.progressCircle} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                </svg>
                <p className="text-[12px] font-semibold tabular-nums" style={{ color: isLowTime ? '#FFB783' : Colors.textbody }}>
                    {minutes}:{seconds} remaining
                </p>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8 py-8 sm:py-10 relative">

                <button
                    onClick={() => setTranscriptOpen(true)}
                    className="absolute top-4 right-4 sm:top-6 sm:right-8 flex items-center gap-1.5 px-3 py-1.5 rounded-full border cursor-pointer transition-all duration-200 hover:opacity-80"
                    style={{ backgroundColor: '#ffffff05', borderColor: '#ffffff1A' }}
                >
                    <MessageSquareText size={13} color={Colors.text} />
                    <p className="text-[11px] font-medium hidden sm:inline" style={{ color: Colors.text }}>
                        Transcript
                    </p>
                </button>

                <p
                    className="text-[11px] font-semibold tracking-[0.15em] mb-8 sm:mb-10"
                    style={{ color: Colors.text }}
                >
                    AI INTERVIEWER
                </p>

                <div className="relative flex items-center justify-center w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] mb-8 sm:mb-10">
                    <div
                        className="absolute inset-0 rounded-full blur-2xl"
                        style={{
                            backgroundColor: listening ? '#4CD7F6' : Colors.progressCircle,
                            opacity: 0.12,
                        }}
                    />
                    <div
                        className="absolute w-[70%] h-[70%] rounded-full blur-xl transition-all duration-500"
                        style={{
                            backgroundColor: listening ? '#4CD7F6' : Colors.progressCircle,
                            opacity: 0.18,
                        }}
                    />
                    <div
                        className="relative w-[45%] h-[45%] rounded-full border transition-all duration-500"
                        style={{
                            borderColor: `${listening ? '#4CD7F6' : Colors.progressCircle}50`,
                        }}
                    />
                </div>

                <div className="max-w-[680px] w-full text-center mb-8 sm:mb-10">
                    <p
                        className="text-[19px] sm:text-[26px] leading-snug italic"
                        style={{ color: Colors.textbody }}
                    >
                        "{question}"
                    </p>
                </div>

                <button
                    onClick={handleMicToggle}
                    className="flex flex-col items-center gap-3 cursor-pointer group"
                >
                    <div className="relative flex items-center justify-center">
                        {listening && (
                            <span
                                className="absolute w-[76px] h-[76px] sm:w-[84px] sm:h-[84px] rounded-full animate-ping"
                                style={{ backgroundColor: '#4CD7F640' }}
                            />
                        )}
                        <div
                            className="relative w-[64px] h-[64px] sm:w-[72px] sm:h-[72px] rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-105"
                            style={{
                                backgroundColor: listening ? '#4CD7F6' : '#ffffff10',
                                border: listening ? 'none' : '1px solid #ffffff20',
                            }}
                        >
                            <Mic size={26} color={listening ? '#060B16' : Colors.textbody} strokeWidth={2.2} />
                        </div>
                    </div>

                    <p
                        className="text-[13px] font-semibold"
                        style={{ color: listening ? '#4CD7F6' : Colors.text }}
                    >
                        {listening ? 'Listening...' : 'Tap to speak'}
                    </p>
                </button>

            </div>

            <div
                className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0 px-4 sm:px-8 py-4 sm:py-5 border-t"
                style={{ borderColor: '#ffffff0F' }}
            >
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-6">
                    <div className="flex items-center gap-1.5">
                        <Briefcase size={14} color={Colors.text} />
                        <p className="text-[12px] sm:text-[13px]" style={{ color: Colors.text }}>{meta.role}</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Code2 size={14} color={Colors.text} />
                        <p className="text-[12px] sm:text-[13px]" style={{ color: Colors.text }}>{meta.type}</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Gauge size={14} color={Colors.text} />
                        <p className="text-[12px] sm:text-[13px]" style={{ color: Colors.text }}>{meta.difficulty}</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Globe size={14} color={Colors.text} />
                        <p className="text-[12px] sm:text-[13px]" style={{ color: Colors.text }}>{meta.language}</p>
                    </div>
                </div>

                <p className="text-[12px] sm:text-[13px] font-medium" style={{ color: Colors.textbody }}>
                    Question {questionIndex} of {totalQuestions}
                </p>
            </div>

            {transcriptOpen && (
                <div className="fixed inset-0 z-50 flex justify-end">
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={() => setTranscriptOpen(false)}
                    />

                    <div
                        className="relative w-full sm:w-[380px] h-full flex flex-col border-l"
                        style={{ backgroundColor: '#0B1326', borderColor: '#ffffff1A' }}
                    >
                        <div
                            className="flex items-center justify-between px-5 py-5 border-b"
                            style={{ borderColor: '#ffffff0F' }}
                        >
                            <p className="text-[15px] font-semibold" style={{ color: Colors.textbody }}>
                                Transcript
                            </p>
                            <button
                                onClick={() => setTranscriptOpen(false)}
                                className="cursor-pointer transition-opacity duration-200 hover:opacity-70"
                            >
                                <X size={18} color={Colors.text} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto px-5 py-5 flex flex-col gap-5">
                            <div className="flex flex-col gap-1.5">
                                <p className="text-[11px] font-semibold" style={{ color: Colors.progressCircle }}>AI INTERVIEWER</p>
                                <p className="text-[13px] leading-relaxed" style={{ color: Colors.text }}>
                                    Tell me about a challenging project you worked on recently.
                                </p>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <p className="text-[11px] font-semibold" style={{ color: Colors.textbody }}>YOU</p>
                                <p className="text-[13px] leading-relaxed" style={{ color: Colors.text }}>
                                    I led the migration of our backend from a monolith to a set of REST APIs, coordinating closely with two other engineers.
                                </p>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <p className="text-[11px] font-semibold" style={{ color: Colors.progressCircle }}>AI INTERVIEWER</p>
                                <p className="text-[13px] leading-relaxed" style={{ color: Colors.text }}>
                                    "{question}"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default InterviewLive