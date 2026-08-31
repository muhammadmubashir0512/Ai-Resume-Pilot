import { Typography } from '../../styles/Font'
import { Colors } from '../../styles/Color'
import Button from '../../components/Button'
import interview from "../../assets/interview.svg"
import upload from "../../assets/upload.svg"
import danger from "../../assets/danger.svg"
import Text from "../../assets/Text.svg"
import CV from "../../assets/CV.svg"
import speak from "../../assets/Speak.svg"
import GlassCard from '../../components/Layout/GlassEffect'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { get } from '../../services/api'

const Stats = () => {
    const navigate = useNavigate()

    const [userName, setUserName] = useState("")
    const [resumeScore, setResumeScore] = useState(0)
    const [totalResume, setTotalResume] = useState(0)
    const [skillGap, setSkillGap] = useState(0)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)

                const [userRes, scoreRes] = await Promise.all([
                    get("/user/me"),
                    get("/user/avgscore"),
                ])

                setUserName(userRes.data.fullName)
                setResumeScore(scoreRes.data[0].averageAtsScore ?? 0)
                setSkillGap(scoreRes.data[0].skillGapPercent ?? 0)
                setTotalResume(scoreRes.data[0].totalResumes ?? 0)

            } catch (error) {
                console.log("Error", error)
                toast.error(error.message || "Something went wrong")
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    const statsCard = [
        { id: 1, icon: CV, label: "RESUME SCORE", points: `${resumeScore}%`, body: `Total Uploaded Resume: ${totalResume}` },
        { id: 2, icon: speak, label: "INTERVIEW READINESS", points: `0%` },
        { id: 3, icon: Text, label: "MOCK INTERVIEWS", points: `0`, body: "No interviews yet" },
        { id: 4, icon: danger, label: "SKILL GAPS FOUND", points: `${skillGap}%`, body: "Skills Missing" },
    ]

    if (loading) {
        return (
            <div className="min-h-[70vh] flex flex-col justify-center items-center gap-5">

                <div className="relative flex items-center justify-center">
                    <div
                        className="w-14 h-14 rounded-full border-4 border-white/10 border-t-[#4CD7F6] animate-spin"
                    />

                    <div
                        className="absolute w-8 h-8 rounded-full"
                        style={{
                            backgroundColor: `${Colors.progressCircle}10`
                        }}
                    />
                </div>

                <div className="flex flex-col items-center gap-1 text-center">
                    <p
                        className="text-[18px] font-semibold"
                        style={{ color: Colors.textbody }}
                    >
                        Loading Dashboard
                    </p>

                    <p
                        className="text-[14px]"
                        style={{ color: Colors.text }}
                    >
                        Fetching your resumePilot activity...
                    </p>
                </div>

            </div>
        )
    }


    return (
        <div className='flex flex-col gap-6 md:gap-12'>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center justify-between'>
                {/* Welcome Note */}
                <div className='flex flex-col gap-2'>
                    <p className={`${Typography.responsiveHeading}`} style={{ color: Colors.textbody }}>Welcome, {userName}</p>
                    <p className={`${Typography.small} md:${Typography.body}`} style={{ color: Colors.text }}>Track your progress, sharpen your resume, and prepare for your next
                        big opportunity — all in one place.</p>
                </div>

                {/* Resume and Interview Buttons */}
                <div className='flex flex-row gap-[16px] flex-wrap justify-center md:justify-end'>
                    <div>
                        <Button variant="secondary" size="normal" className="cursor-pointer" onClick={() => navigate("/resume-Analyzer")}> <img src={upload} alt="" className='h-[16px] w-[16px]' /> Upload Resume</Button>
                    </div>
                    <Button variant="glass" rounded="rounded-lg" size="normal" className="text-white font-normal cursor-pointer " onClick={() => navigate("/Mock-Interview/inprogress")}><img src={interview} alt="" className='h-[16px] w-[16px]' /> Start Mock Interview</Button>
                </div>
            </div>

            {/* Stats Card */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    statsCard.map((stats) => {
                        return (
                            <GlassCard key={stats.id}>
                                <div className='flex flex-col'>
                                    <div className='flex flex-row justify-between items-center pb-4'>
                                        <p className={`${Typography.subheading}`} style={{ color: Colors.textbody }}>{stats.label}</p>
                                        <img src={stats.icon} alt="" className='w-[20px] h-[20px]' />
                                    </div>

                                    <div className='flex flex-col gap-2'>
                                        <p className={`${Typography.responsiveHeading}`} style={{ color: Colors.textbody }}>{stats.points}</p>
                                        {
                                            stats.body ? (
                                                <div>
                                                    <p className={`${Typography.small}`} style={{ color: Colors.text }}>{stats.body}</p>
                                                </div>
                                            ) : (
                                                <div className='h-[6px] w-full rounded-full bg-[#171F33]'>
                                                    <div className={`h-[6px] rounded-full`} style={{ width: `${stats.points}`, backgroundColor: Colors.light }}>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </GlassCard>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Stats
