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
import { toast, Toaster } from 'react-hot-toast'
import { post } from '../../services/api'
import { useResumeStore } from '../../Store/ResumeStore'


const ResumeUpload = () => {

    const clearAnalysis = useResumeStore((state) => state.clearAnalysis)


    const navigate = useNavigate()
    const [resume, setResume] = useState(null)
    const [targetContext, setTargetContext] = useState({
        targetRole: "",
        experience: "",
        fullName: "",
        jobDescription: ""
    })
    const [loading, setLoading] = useState(false)

    const handleAnalyze = async () => {

        if (!resume || !targetContext.targetRole || !targetContext.jobDescription) {
            toast.error("Please upload resume and add Target Context")
            return
        }

        const formData = new FormData()
        formData.append("resume", resume)
        formData.append("jobTittle", targetContext.targetRole)
        formData.append("jobDescription", targetContext.jobDescription)

        setLoading(true)
        clearAnalysis()


        try {
            const response = await post("/resume/analysis", formData)
            const newJobId = response.data.jobId

            toast.success("Resume uploaded successfully")

            setResume(null)
            setTargetContext({
                targetRole: "",
                experience: "",
                fullName: "",
                jobDescription: ""
            })
            navigate(`/resume-Analyzer/result/${newJobId}`)

        } catch (error) {
            console.error("Error....", error)
            toast.error(error.message || "Something went wrong")
            setLoading(false)
        }
    }

    if (loading) {
        return (
            <div className="min-h-[70vh] flex flex-col justify-center items-center gap-5">
                <div className="relative flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full border-4 border-white/10 border-t-[#4CD7F6] animate-spin" />
                    <div
                        className="absolute w-8 h-8 rounded-full"
                        style={{ backgroundColor: `${Colors.progressCircle}10` }}
                    />
                </div>

                <div className="flex flex-col items-center gap-1 text-center">
                    <p className="text-[18px] font-semibold" style={{ color: Colors.textbody }}>
                        Uploading Resume
                    </p>
                    <p className="text-[14px]" style={{ color: Colors.text }}>
                        Please wait...
                    </p>
                </div>
            </div>
        )
    }

    return (
        <PageWrapper className='justify-center items-center'>
            <Toaster />
            <DashboardNavbar />

            <div className='flex flex-col gap-2 justify-center items-center'>
                <p className={`${Typography.responsiveHeading}`} style={{ color: Colors.textbody }}>Upload Your Resume</p>
                <p className={`${Typography.small} md:${Typography.body} max-w-[572px] w-auto text-center`} style={{ color: Colors.text }}>Get AI-powered analysis, ATS scoring, and improvement suggestions in
                    seconds.</p>
            </div>

            <div className='m-0 md:m-16 px-0 md:px-12'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Upload
                        resume={resume}
                        onResumeSelect={setResume}
                    />
                    <Tips />
                </div>
            </div>

            <div className='m-0 md:m-16 px-0 md:px-12 py-9 md:py-0'>
                <TargetContext
                    data={targetContext}
                    onChange={setTargetContext}
                />
            </div>

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