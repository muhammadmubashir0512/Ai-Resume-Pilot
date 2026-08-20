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

const Stats = ({ data }) => {
    const statsCard = [
        { id: 1, icon: CV, label: "RESUME SCORE", points: `${data.resumeScore}%` },
        { id: 2, icon: speak, label: "INTERVIEW READINESS", points: `${data.interviewsReadiness}%` },
        { id: 3, icon: Text, label: "MOCK INTERVIEWS", points: `${data.interviews}`, body: "+2 since last week" },
        { id: 4, icon: danger, label: "SKILL GAPS FOUND", points: `${data.skillGap}`, body: "Critical for Senior Level" },
    ]

    const navigate = useNavigate()

    return (
        <div className='flex flex-col gap-6 md:gap-12'>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center justify-between'>
                {/* Welcome Note */}
                <div className='flex flex-col gap-2'>
                    <p className={`${Typography.responsiveHeading}`} style={{ color: Colors.textbody }}>Good morning, Muhammad</p>
                    <p className={`${Typography.small} md:${Typography.body}`} style={{ color: Colors.text }}>Your career trajectory is looking sharp. You've closed two major skill gaps
                        this week. Ready to tackle that Senior Role?</p>
                </div>

                {/* Resume and Interview Buttons */}
                <div className='flex flex-row gap-[16px] flex-wrap justify-center md:justify-end'>
                    <div>
                        <Button variant="secondary" size="normal" className="cursor-pointer" onClick={() => navigate("/resume-Analyzer")}> <img src={upload} alt="" className='h-[16px] w-[16px]' /> Upload Resume</Button>
                    </div>
                    <Button variant="glass" rounded="rounded-lg" size="normal" className="text-white font-normal cursor-pointer "><img src={interview} alt="" className='h-[16px] w-[16px]' /> Start Mock Interview</Button>
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
