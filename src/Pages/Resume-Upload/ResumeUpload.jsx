import { useState } from 'react'
import DashboardNavbar from '../Dashboard/DashboardNavbar'
import PageWrapper from '../../components/Layout/PageWrapper'
import { Typography } from '../../styles/Font'
import { Colors } from '../../styles/Color'
import { useNavigate } from 'react-router-dom'
import Upload from './Upload'
import Tips from './Tips'
import Button from '../../components/Button'
import speak from "../../assets/Speak.svg"
import TargetContext from './TargetContext'

const ResumeUpload = () => {

    const navigate = useNavigate()
    const [resume, setResume] = useState(null)
    const [targetContext, setTargetContext] = useState({
        targetRole: "",
        experience: "",
        fullName: "",
        skills: []
    })
    const [skillInput, setSkillinput] = useState("")

    const handleAnalyze = () => {
        console.log("Resume:", resume)
        setResume(null)

        console.log("Target Context:", targetContext)
        setTargetContext({
            targetRole: "",
            experience: "",
            fullName: "",
            skills: []
        })

        navigate("/resume-Analytics")
    }

    return (
        <PageWrapper className='justify-center items-center'>
            <DashboardNavbar />

            {/* Title */}
            <div className='flex flex-col gap-2 justify-center items-center'>
                <p className={`${Typography.responsiveHeading}`} style={{ color: Colors.textbody }}>Upload Your Resume</p>
                <p className={`${Typography.small} md:${Typography.body} max-w-[572px] w-auto text-center`} style={{ color: Colors.text }}>Get AI-powered analysis, ATS scoring, and improvement suggestions in
                    seconds.</p>
            </div>

            {/* grid sections */}
            <div className='m-0 md:m-16 px-0 md:px-12'>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Upload Resume */}
                    <Upload
                        resume={resume}
                        onResumeSelect={setResume}
                    />

                    {/* Pro Tips */}
                    <Tips />

                </div>

            </div>

            {/* Target context */}
            <div className='m-0 md:m-16 px-0 md:px-12 py-9 md:py-0'>
                <TargetContext
                    data={targetContext}
                    onChange={setTargetContext}
                    skillInput={skillInput}
                    setSkillInput={setSkillinput}
                />
            </div>

            {/* navigation Button */}
            <div className='flex flex-row gap-4 pt-[18px] justify-center items-center flex-wrap'>
                <Button variant="secondary" size="normal" className="cursor-pointer" onClick={() => handleAnalyze()}>
                    <img src={speak} alt="" className='w-[20x] h-[20px]' />
                    Analyze Resume
                </Button>

                <Button variant="glass" size="normal" className="cursor-pointer" onClick={() => navigate("/dashboard")}>
                    Back To Dashboard
                </Button>
            </div>

        </PageWrapper>
    )
}

export default ResumeUpload
