import { Typography } from '../../styles/Font'
import { Colors } from '../../styles/Color'
import PageWrapper from '../../components/Layout/PageWrapper'
import DashboardNavbar from '../Dashboard/DashboardNavbar'
import GlassCard from '../../components/Layout/GlassEffect'
import { useState } from 'react'
import easy from "../../assets/easy.svg"
import medium from "../../assets/medium.svg"
import hard from "../../assets/hard.svg"
import tech from "../../assets/tech.svg"
import speak from "../../assets/Speak.svg"
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import { toast, Toaster } from 'react-hot-toast'

const difficultyData = [
    { id: 1, icon: easy, label: "Easy", body: "Fundamental questions" },
    { id: 2, icon: medium, label: "Medium", body: "Real-world interview questions" },
    { id: 3, icon: hard, label: "Hard", body: "Senior-level challenges" },
]

const interviewType = [
    { id: 1, icon: tech, label: "Technical", body: "Technical skills & problem solving" },
    { id: 1, icon: speak, label: "Behavioral", body: "Communication & workplace scenarios" },
]

const Mock_Interview_Preference = () => {

    const [targetRole, setTargetRole] = useState("")
    const [difficultyLevel, setDifficultyLevel] = useState("")
    const [interview, setInterviewType] = useState("")
    const navigate = useNavigate()

    const onSubmit = () => {

        if (targetRole && difficultyLevel && interview) {

            console.log("Target job...", targetRole)
            console.log("Difficulty level...", difficultyLevel)
            console.log("Interview.....", interview)
            setTargetRole("")
            setDifficultyLevel("")
            setInterviewType("")

            navigate("/Mock-Interview")
        } else {
            toast.error("Please fill required data for Mock-Interview")
        }
    }

    return (
        <PageWrapper>
            <Toaster />
            <DashboardNavbar />

            {/* Title */}
            <div className='flex flex-col gap-2 justify-center items-center'>
                <p className={`${Typography.responsiveHeading} text-center`} style={{ color: Colors.textbody }}>Prepare for Your Mock
                    Interview</p>
                <p className={`${Typography.small} md:${Typography.body} max-w-[572px] w-auto text-center`} style={{ color: Colors.text }}>Set your interview preferences and get a personalized AI-powered interview
                    experience.</p>
            </div>

            <div className='m-0 md:m-16 px-0 md:px-30 lg:px-42'>

                <GlassCard>
                    <div className='flex flex-col gap-6 md:gap-10 '>

                        {/* Target Role */}
                        <div>
                            <label className="block text-[12px] font-semibold uppercase tracking-wide mb-2" style={{ color: Colors.text }}>
                                Target Role
                            </label>
                            <input
                                type="text"
                                value={targetRole}
                                onChange={(e) => setTargetRole(e.target.value)}
                                placeholder="e.g; software engineer"
                                className="w-full text-white px-4 py-2.5 rounded-lg text-sm bg-white/5 border border-white/10 placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#4CD7F6]/50 focus:border-transparent transition-all duration-200"
                            />
                        </div>

                        {/* Select Difficulty Level */}
                        <div className='flex flex-col gap-3'>

                            <p className="block text-[12px] font-semibold uppercase tracking-wide mb-2" style={{ color: Colors.text }}>
                                DIFFICULTY LEVEL
                            </p>

                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

                                {
                                    difficultyData.map((level) => {
                                        return (

                                            <GlassCard padding='p-0'>
                                                <div key={level.id} className={` p-3 rounded-2xl h-full cursor-pointer ${difficultyLevel === level.label ? 'bg-[#03B5D3]/10 border border-[#03B5D3] shadow:md shadow-[#03B5D3]/60' : ''}`} onClick={() => setDifficultyLevel(level.label)}>

                                                    <div className={`flex flex-col gap-3`}>

                                                        <div className='flex flex-row gap-2 items-center'>

                                                            <img src={level.icon} alt="" className='h-[20px] w-[20px]' />
                                                            <p className={`${Typography.subheading}`} style={{ color: Colors.textbody }}>{level.label}</p>

                                                        </div>

                                                        <p className={`${Typography.small}`} style={{ color: Colors.text }}>{level.body}</p>

                                                    </div>

                                                </div>
                                            </GlassCard>

                                        )
                                    })
                                }

                            </div>

                        </div>

                        {/* Select Interview Type */}
                        <div className='flex flex-col gap-3'>

                            <p className="block text-[12px] font-semibold uppercase tracking-wide mb-2" style={{ color: Colors.text }}>
                                INTERVIEW TYPE
                            </p>

                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

                                {
                                    interviewType.map((type) => {
                                        return (

                                            <GlassCard padding='p-0'>
                                                <div key={type.id} className={` p-3 rounded-2xl h-full cursor-pointer ${interview === type.label ? 'bg-[#03B5D3]/10 border border-[#03B5D3] shadow:md shadow-[#03B5D3]/60' : ''}`} onClick={() => setInterviewType(type.label)}>

                                                    <div className={`flex flex-col gap-3`}>

                                                        <div className='flex flex-row gap-2 items-center'>

                                                            <img src={type.icon} alt="" className='h-[20px] w-[20px]' />
                                                            <p className={`${Typography.subheading}`} style={{ color: Colors.textbody }}>{type.label}</p>

                                                        </div>

                                                        <p className={`${Typography.small}`} style={{ color: Colors.text }}>{type.body}</p>

                                                    </div>

                                                </div>
                                            </GlassCard>

                                        )
                                    })
                                }

                            </div>

                        </div>

                        {/* navigation Button */}
                        <div className='flex flex-row gap-4 pt-[18px] justify-center items-center flex-wrap'>
                            <Button variant="secondary" size="normal" className="cursor-pointer" onClick={() => onSubmit()}>
                                <img src={speak} alt="" className='w-[20x] h-[20px]' />
                                START MOCK INTERVIEW
                            </Button>

                            <Button variant="glass" size="normal" className="cursor-pointer" onClick={() => navigate("/dashboard")}>
                                Back To Dashboard
                            </Button>
                        </div>

                    </div>
                </GlassCard>

            </div>

        </PageWrapper>
    )
}

export default Mock_Interview_Preference
