import GlassCard from '../../components/Layout/GlassEffect'
import { Typography } from '../../styles/Font'
import { Colors } from '../../styles/Color'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { get } from '../../services/api'
import strength from "../../assets/strength.svg"
import Checked from "../../assets/Checked.svg"
import CV from "../../assets/CV.svg"
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'

const ResumeAnalysis = () => {

    const navigate = useNavigate()
    const [resumeData, setResumeData] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await get("/resume/latest")

                setResumeData(response.data)

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

    return (
        <GlassCard padding='p-5'>
            {
                resumeData ? (
                    <div className='flex flex-col gap-8'>

                        {/* Title and ATS Score */}
                        <div className='flex flex-row justify-between'>

                            <div className='flex flex-col gap-1'>
                                <p
                                    className={`${Typography.heading}`}
                                    style={{ color: Colors.textbody }}
                                >
                                    Latest Resume Analysis
                                </p>

                                <p
                                    className={`${Typography.body}`}
                                    style={{ color: Colors.text }}
                                >
                                    Job Title: {resumeData.job_title}
                                </p>
                            </div>

                            <div className='flex flex-col gap-1'>
                                <p
                                    className={`${Typography.responsiveHeading}`}
                                    style={{ color: Colors.light }}
                                >
                                    {resumeData.ats_score}%
                                </p>

                                <p
                                    className={`${Typography.small}`}
                                    style={{ color: Colors.light }}
                                >
                                    ATS SCORE
                                </p>
                            </div>

                        </div>

                        {/* Summary */}
                        {resumeData.summary && (
                            <div className='flex flex-col gap-3 bg-[#171F33] p-5 rounded-lg border border-[#fff]/10'>

                                <p
                                    className='text-[14px] font-semibold'
                                    style={{ color: Colors.textbody }}
                                >
                                    ANALYSIS SUMMARY
                                </p>

                                <p
                                    className='text-[13px] leading-6'
                                    style={{ color: Colors.text }}
                                >
                                    {resumeData.summary}
                                </p>

                            </div>
                        )}

                        {/* Key Strengths */}
                        <div className="flex flex-col gap-3 bg-[#171F33] p-5 rounded-lg border border-[#fff]/10">

                            <div className="flex flex-row gap-2 items-center">

                                <img
                                    src={strength}
                                    alt=""
                                    className="w-[20px] h-[20px]"
                                />

                                <p
                                    className={`${Typography.body}`}
                                    style={{ color: Colors.textbody }}
                                >
                                    Key Strengths
                                </p>

                            </div>

                            {/* Strength Points */}
                            <div className="flex flex-col gap-4">
                                {(resumeData.key_strengths ?? []).slice(0, 3).map((point, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-row gap-2 items-center"
                                    >
                                        <img
                                            src={Checked}
                                            alt=""
                                            className="w-[11px] h-[11px]"
                                        />

                                        <p
                                            className={`${Typography.small}`}
                                            style={{ color: Colors.text }}
                                        >
                                            {point}
                                        </p>
                                    </div>
                                ))}

                            </div>

                        </div>

                        {/* Points */}
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>

                            <div className='flex flex-col gap-4'>

                                {/* Keyword Match */}
                                <div className='flex flex-row justify-between bg-[#171F33] p-4 rounded-lg'>

                                    <p
                                        className={`${Typography.subheading}`}
                                        style={{ color: Colors.textbody }}
                                    >
                                        Keyword Match
                                    </p>

                                    <p className='text-[16px] font-bold text-white'>
                                        {resumeData.keyword_match?.score ?? 0}%
                                    </p>

                                </div>

                                {/* Missing Skills */}
                                <div className='bg-[#171F33] p-4 space-y-4 rounded-lg border-l-4 border-[#FFB783]'>

                                    <p className={`${Typography.subheading} text-[#FFB783]`}>
                                        MISSING CRITICAL SKILLS
                                    </p>

                                    <div className='flex flex-row gap-2 flex-wrap'>

                                        {(resumeData.keyword_match.missing_keywords ?? []).slice(0, 3).map(
                                            (skill, index) => (
                                                <div
                                                    key={index}
                                                    className='py-1 px-3 items-center justify-center bg-[#FFB783]/10 border border-[#FFB783]/20 rounded-full'
                                                >
                                                    <p className='text-[12px] font-semibold text-[#FFB783]'>
                                                        {skill}
                                                    </p>
                                                </div>
                                            )
                                        )}

                                    </div>

                                </div>

                            </div>

                            {/* Top Relevant Skills */}
                            <div className='flex flex-col gap-3'>

                                <p
                                    className='text-[14px] font-semibold'
                                    style={{ color: Colors.text }}
                                >
                                    TOP RELEVANT SKILLS FOUND
                                </p>

                                <div className='flex flex-row gap-2 flex-wrap'>

                                    {(resumeData.keyword_match?.found_keywords ?? []).slice(0, 3).map(
                                        (skill, index) => (
                                            <div
                                                key={index}
                                                className='bg-[#C0C1FF]/10 py-1 px-3 items-center justify-center rounded-full border border-[#C0C1FF]/20'
                                            >
                                                <p
                                                    className='text-[12px] font-medium'
                                                    style={{ color: Colors.light }}
                                                >
                                                    {skill}
                                                </p>
                                            </div>
                                        )
                                    )}

                                </div>

                            </div>

                        </div>

                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center text-center gap-4 min-h-[280px]">

                        <img
                            src={CV}
                            alt=""
                            className="w-10 h-10 opacity-70"
                        />

                        <div className="flex flex-col gap-2">
                            <p
                                className={Typography.heading}
                                style={{ color: Colors.textbody }}
                            >
                                No Resume Analysis Yet
                            </p>

                            <p
                                className="text-[13px] leading-6 max-w-md"
                                style={{ color: Colors.text }}
                            >
                                Upload your resume and job description to get your ATS
                                score, skill gaps, and personalized improvement suggestions.
                            </p>
                        </div>

                        <Button
                            variant="secondary"
                            size="normal"
                            className="cursor-pointer"
                            onClick={() => navigate("/resume-Analyzer")}
                        >
                            Analyze Your Resume
                        </Button>

                    </div>
                )
            }

        </GlassCard>
    )
}

export default ResumeAnalysis
