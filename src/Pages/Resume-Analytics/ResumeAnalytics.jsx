import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Typography } from '../../styles/Font'
import { Colors } from '../../styles/Color'
import PageWrapper from '../../components/Layout/PageWrapper'
import DashboardNavbar from '../Dashboard/DashboardNavbar'
import SuggestStrength from './SuggestStrength'
import AnalysisImprovement from './AnalysisImprovement'
import ResumeUpdate from './UpdateResume'
import { useResumeStore } from '../../Store/ResumeStore'
import { get } from '../../services/api'
import { toast } from 'react-hot-toast'
import ResumeSummary from './ResumeSummary'

const ResumeAnalytics = () => {
    const analysis = useResumeStore((state) => state.analysis)
    const setAnalysis = useResumeStore((state) => state.setAnalysis)

    const { Id } = useParams()

    const [polling, setPolling] = useState(false)
    const [poll, setPoll] = useState("")
    const intervalRef = useRef(null)
    const missCountRef = useRef(0)

    useEffect(() => {
        if (analysis || !Id) return

        setPolling(true)

        intervalRef.current = setInterval(async () => {
            try {
                const response = await get(`/resume/analysis/${Id}`)
                const statusData = response.data
                missCountRef.current = 0

                setPoll(statusData.stage)

                if (statusData.stage === "completed") {
                    setAnalysis(statusData.result)
                    clearInterval(intervalRef.current)
                    setPolling(false)
                } else if (statusData.stage === "failed") {
                    toast.error("Analysis failed, please try again")
                    clearInterval(intervalRef.current)
                    setPolling(false)
                }
            } catch (error) {
                missCountRef.current += 1

                if (missCountRef.current >= 3) {
                    toast.error(error.message || "Something went wrong")
                    clearInterval(intervalRef.current)
                    setPolling(false)
                }
            }
        }, 1500)

        return () => clearInterval(intervalRef.current)
    }, [Id, analysis])

    if (!analysis) {
        return (
            <PageWrapper>
                <DashboardNavbar />
                <div className="min-h-[70vh] flex flex-col justify-center items-center gap-5">
                    <div className="relative flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full border-4 border-white/10 border-t-[#4CD7F6] animate-spin" />
                        <div
                            className="absolute w-8 h-8 rounded-full"
                            style={{ backgroundColor: `${Colors.progressCircle}10` }}
                        />
                    </div>

                    <div className="flex flex-col items-center gap-1 text-center">
                        <p
                            className="text-[12px] font-semibold animate-pulse"
                            style={{ color: Colors.textbody }}
                        >
                            {polling ? (
                                poll === "uploading" ? "Uploading Your Resume..." :
                                    poll === "parsing" ? "Parsing Your Resume..." :
                                        poll === "analyzing" ? "Analyzing Your Resume..." :
                                            "Processing Your Resume"
                            ) : "Something Went Wrong!"}
                        </p>
                    </div>
                </div>
            </PageWrapper>
        )
    }

    const analysisData = {
        jobTitle: analysis.job_title,
        atsScore: analysis.ats_score,
        keywordMatch: analysis.keyword_match.score,
        formatting: analysis.formatting.status,
        formattingScore: analysis.formatting.score,
        suggestion: analysis.formatting.suggestion,
        strengths: analysis.key_strengths,
        matchIdentity: {
            first: "JD",
            second: "RS",
            label: "Match Identity"
        },
        content: [
            { id: 1, tag: "Contact Info", status: analysis.sections.contact_info.status, note: analysis.sections.contact_info.note },
            { id: 2, tag: "Education", status: analysis.sections.education.status, note: analysis.sections.education.note },
            { id: 3, tag: "Experience", status: analysis.sections.experience.status, note: analysis.sections.experience.note },
            { id: 4, tag: "Projects", status: analysis.sections.projects.status, note: analysis.sections.projects.note },
        ],
    }

    const keywordData = {
        foundKeywords: {
            total: analysis.keyword_match.found_keywords.length,
            keywords: analysis.keyword_match.found_keywords
        },
        missingKeywords: {
            requiredMatch: "Required for 99% match",
            keywords: analysis.keyword_match.missing_keywords
        },
        topImprovements: analysis.top_improvements
    }
    const resumeSummary = analysis.summary

    return (
        <PageWrapper>
            <DashboardNavbar />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center justify-between">
                <div className="flex flex-col gap-2">
                    <p className={`${Typography.responsiveHeading}`} style={{ color: Colors.textbody }}>
                        Resume Analysis Results
                    </p>
                    <p className={`${Typography.small} md:${Typography.body}`} style={{ color: Colors.text }}>
                        Detailed AI analysis and ATS optimization for Senior Software Engineer role.
                    </p>
                </div>
            </div>

            <SuggestStrength data={analysisData} />
            <AnalysisImprovement data={keywordData} />
            <ResumeSummary summary={resumeSummary} />
            <ResumeUpdate jobId={Id} />

        </PageWrapper>
    )
}

export default ResumeAnalytics
