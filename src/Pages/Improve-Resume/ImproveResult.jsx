import { useEffect, useRef, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import GlassCard from "../../components/Layout/GlassEffect"
import PageWrapper from "../../components/Layout/PageWrapper"
import { Colors } from "../../styles/Color"
import { Typography } from "../../styles/Font"
import pdf from "../../assets/Simulated PDF Document.png"
import DashboardNavbar from "../Dashboard/DashboardNavbar"
import strength from "../../assets/strength.svg"
import downlaod from "../../assets/download.svg"
import Button from "../../components/Button"
import { useResumeStore } from "../../Store/ResumeStore"
import { get } from "../../services/api"
import { toast } from "react-hot-toast"

const ImproveResult = () => {
    const navigate = useNavigate()
    const { jobId } = useParams()

    const improvedResult = useResumeStore((state) => state.improvedResult)
    const setImprovedResult = useResumeStore((state) => state.setImprovedResult)

    const [polling, setPolling] = useState(false)
    const [poll, setPoll] = useState("")
    const intervalRef = useRef(null)

    useEffect(() => {
        if (!jobId) return

        setPolling(true)

        let missCount = 0

        intervalRef.current = setInterval(async () => {
            try {
                const response = await get(`/resume/improve/result/${jobId}`)

                console.log("FULL RESPONSE:", response)

                const statusData = response.data

                console.log("STAGE:", statusData?.stage)
                console.log("RESULT:", statusData?.result)

                setPoll(statusData?.stage)

                if (statusData?.stage === "completed") {
                    setImprovedResult(statusData.result)
                    clearInterval(intervalRef.current)
                    setPolling(false)
                }
                else if (statusData?.stage === "failed") {
                    toast.error("Optimization failed, please try again")
                    clearInterval(intervalRef.current)
                    setPolling(false)
                }
            } catch (error) {
                console.log("...............")
                missCount += 1

                if (missCount >= 3) {
                    toast.error(error.message || "Something went wrong")
                    clearInterval(intervalRef.current)
                    setPolling(false)
                }
            }
        }, 1500)

        return () => clearInterval(intervalRef.current)
    }, [jobId, improvedResult])

    if (!improvedResult) {
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
                                poll === "parsing_pdf" ? "Parsing Your Resume..." :
                                    poll === "analyzing" ? "Optimizing Your Resume..." :
                                        "Processing Your Resume"
                            ) : "Something Went Wrong!"}
                        </p>
                    </div>
                </div>
            </PageWrapper>
        )
    }

    const previousScore = improvedResult.previous_analysis?.ats_score ?? 0
    const newScore = improvedResult.new_analysis?.ats_score ?? 0
    const targetRole = improvedResult.new_analysis?.target_role
    const keyImprovements = improvedResult.applied_improvements?.map((item) => item.title) ?? []


    const handleDownload = () => {
        if (!improvedResult.resumeUrl) {
            toast.error("Resume file not available")
            return
        }
        window.open(improvedResult.resumeDownloadUrl, "_blank")
    }

    return (
        <PageWrapper>
            <DashboardNavbar />

            <div className="">
                <div className="flex flex-col gap-2">
                    <p className={`${Typography.responsiveHeading}`} style={{ color: Colors.textbody }}>
                        Your Resume Has Been Optimized.
                    </p>
                    <p className={`${Typography.small} md:${Typography.body}`} style={{ color: Colors.text }}>
                        {improvedResult.improvement_summary}
                    </p>
                </div>
            </div>

            <div className="w-full max-w-6xl mx-auto py-6 md:py-10">

                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-16">

                    <div className="flex flex-col items-center w-full">

                        <div className="w-full max-w-[430px] p-3 sm:p-4 rounded-xl border border-[#fff]/10 bg-[#fff]/[0.02]">
                            <img
                                src={pdf}
                                alt="Optimized Resume"
                                className="w-full h-auto rounded-md"
                            />
                        </div>

                        <div className="flex flex-col items-center gap-1 mt-5 text-center">
                            <p
                                className="text-[13px] sm:text-[14px] font-semibold break-all"
                                style={{ color: Colors.textbody }}
                            >
                                Resume_Optimized.pdf
                            </p>

                            <p
                                className="text-[12px]"
                                style={{ color: Colors.text }}
                            >
                                1 page · PDF
                            </p>
                        </div>

                    </div>

                    <div className="w-full flex flex-col gap-5">

                        <GlassCard>
                            <div className="flex flex-col gap-5">

                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                                    <p
                                        className="text-[13px] font-semibold tracking-wide"
                                        style={{ color: Colors.text }}
                                    >
                                        ATS MATCH SCORE
                                    </p>
                                </div>

                                <div className="flex items-center justify-between">
                                    <p
                                        className="text-[32px] sm:text-[38px] font-bold"
                                        style={{ color: Colors.text }}
                                    >
                                        {previousScore}%
                                    </p>

                                    <p
                                        className="text-[32px] sm:text-[38px] font-bold"
                                        style={{ color: Colors.progressCircle }}
                                    >
                                        {newScore}%
                                    </p>
                                </div>

                                {targetRole && (
                                    <div className="border-t border-[#fff]/10 pt-4">
                                        <p
                                            className="text-[12px] sm:text-[13px] font-medium"
                                            style={{ color: Colors.text }}
                                        >
                                            Target Role:{" "}
                                            <span style={{ color: Colors.textbody }}>
                                                {targetRole}
                                            </span>
                                        </p>
                                    </div>
                                )}

                            </div>
                        </GlassCard>

                        <GlassCard>
                            <div className="flex flex-col gap-4">

                                <div className="flex flex-row gap-3 items-center">
                                    <img
                                        src={strength}
                                        alt=""
                                        className="w-5 h-5"
                                    />
                                    <p
                                        className="text-[14px] font-semibold"
                                        style={{ color: Colors.textbody }}
                                    >
                                        Key Improvements
                                    </p>
                                </div>

                                <div className="flex flex-col gap-3">
                                    {keyImprovements.length > 0 ? (
                                        keyImprovements.map((improve, index) => (
                                            <div
                                                key={index}
                                                className="flex flex-row items-start gap-3"
                                            >
                                                <p
                                                    className="text-[12px] sm:text-[13px] leading-5"
                                                    style={{ color: Colors.text }}
                                                >
                                                    {improve}
                                                </p>
                                            </div>
                                        ))
                                    ) : (
                                        <p
                                            className="text-[12px] sm:text-[13px]"
                                            style={{ color: Colors.text }}
                                        >
                                            No improvements were applied.
                                        </p>
                                    )}
                                </div>

                            </div>
                        </GlassCard>

                        <div className="flex flex-col gap-3">

                            <Button
                                variant="secondary"
                                size="normal"
                                className="w-full justify-center text-center cursor-pointer"
                                onClick={handleDownload}
                            >
                                <img
                                    src={downlaod}
                                    alt=""
                                    className="w-4 h-4"
                                />
                                Download Resume
                            </Button>

                            <Button
                                variant="glass"
                                size="normal"
                                className="w-full justify-center text-center cursor-pointer"
                                onClick={() => navigate("/resume-Analyzer")}
                            >
                                Upload Another  Resume
                            </Button>

                        </div>
                    </div>

                </div>

            </div>

        </PageWrapper>
    )
}

export default ImproveResult