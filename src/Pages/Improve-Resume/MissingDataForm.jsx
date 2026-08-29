import GlassCard from "../../components/Layout/GlassEffect"
import { Typography } from "../../styles/Font"
import { Colors } from "../../styles/Color"
import { useResumeStore } from "../../Store/ResumeStore"
import Button from "../../components/Button"
import suggest from "../../assets/suggest.svg"
import critical from "../../assets/critical.png"
import { useState } from "react"
import info from "../../assets/info.svg"
import optimize from "../../assets/Optimize.svg"
import { useNavigate, useParams } from "react-router-dom"
import toast from "react-hot-toast"
import { post } from "../../services/api"

const MissingDataForm = () => {
    const analysis = useResumeStore((state) => state.analysis)
    const { Id } = useParams()
    console.log("Resume id......", Id)
    const navigate = useNavigate()

    const [keywords, setKeyword] = useState([])
    const [improvements, setImprovements] = useState([])
    const [submitting, setSubmitting] = useState(false)

    const missingKeywords = analysis?.keyword_match?.missing_keywords || []
    const improvementData = analysis?.top_improvements || []

    const toggleKeyword = (keyword) => {
        setKeyword((prev) =>
            prev.includes(keyword)
                ? prev.filter((item) => item !== keyword)
                : [...prev, keyword]
        )
    }

    const toggleImprovements = (improvement) => {
        setImprovements((prev) =>
            prev.includes(improvement)
                ? prev.filter((item) => item !== improvement)
                : [...prev, improvement]
        )
    }

    const totalSelected = keywords.length + improvements.length

    const handleClick = async () => {
        if (totalSelected === 0) {
            toast.error("Please select atleast one field for resume optimization")
            return
        }

        setSubmitting(true)
        try {
            const response = await post(`/resume/improve/${Id}`, {
                keywords,
                improvements,
            })

            if (response.data?.jobId) {
                toast.success("Resume started processing for optimization")
                navigate(`/resume-Analyzer/improve-resume/result/${response.data?.jobId}`,)
            } else {
                toast.success("Optimized result ready")
                navigate(`/resume-Analyzer/improve-resume/result/${response.data?.jobId}`)
            }
        } catch (error) {
            toast.error(error.message || "Something went wrong")
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6">

            <GlassCard>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-row gap-3 items-center pb-4 border-b border-[#fff]/10">
                        <img src={suggest} alt="" className="w-5 h-5" />
                        <p className={`${Typography.subheading}`} style={{ color: Colors.textbody }}>Review Suggested Improvements</p>
                    </div>

                    {missingKeywords.length > 0 && (
                        <div className="flex flex-col gap-4">
                            <p className="text-[14px] font-semibold" style={{ color: Colors.text }}>MISSING KEYWORDS</p>
                            <div className="flex flex-col gap-3">
                                {missingKeywords.map((keyword, index) => (
                                    <div key={index} className="flex flex-row justify-between flex-wrap items-center bg-[#fff]/3 border border-[#fff]/10 rounded-lg p-5">
                                        <div className="flex flex-row gap-4 items-center">
                                            <input type="checkbox" className="w-6 h-6 cursor-pointer border border-[#fff]/20" onChange={() => toggleKeyword(keyword)} />
                                            <p className={`${Typography.body}`} style={{ color: Colors.textbody }}>{keyword}</p>
                                        </div>
                                        <div className="flex flex-row items-center gap-2 bg-[#FFB4AB]/10 border border-[#FFB4AB]/20 py-1 px-3 rounded-full">
                                            <img src={critical} alt="" className="w-4 h-4" />
                                            <p className="text-[12px] font-normal text-[#FFB4AB]">Missing Keyword</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {improvementData.length > 0 && (
                        <div className="flex flex-col gap-4">
                            <p className="text-[14px] font-semibold" style={{ color: Colors.text }}>MISSING IMPROVEMENTS</p>
                            <div className="flex flex-col gap-3">
                                {improvementData.map((improve, index) => (
                                    <div key={index} className="flex flex-row justify-between flex-wrap items-center bg-[#fff]/3 border border-[#fff]/10 rounded-lg p-5">
                                        <div className="flex flex-row gap-4 items-center">
                                            <input type="checkbox" className="w-6 h-6 cursor-pointer border border-[#fff]/20" onChange={() => toggleImprovements(improve.title)} />
                                            <p className={`${Typography.body}`} style={{ color: Colors.textbody }}>{improve.title}</p>
                                        </div>
                                        <div className="flex flex-row items-center gap-2 bg-[#FFB783]/10 border border-[#FFB783]/20 py-1 px-3 rounded-full">
                                            <p className="text-[12px] font-normal text-[#FFB783]">Missing</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="flex flex-row gap-3 items-center p-4 rounded-lg bg-[#0B1326]/50 border border-[#fff]/5">
                        <img src={info} alt="" className="w-4 h-4" />
                        <p className="text-[13px] font-medium max-w-[800px]" style={{ color: Colors.textbody }}>Selected information will be used to optimize your resume. ResumePilot will not invent skills, experience,
                            achievements, or qualifications.</p>
                    </div>
                </div>
            </GlassCard>

            <div>
                <GlassCard>
                    <div className="flex flex-col gap-6">
                        <p className={`${Typography.subheading}`} style={{ color: Colors.textbody }}>Ready to Optimize</p>

                        <div className="flex flex-row justify-between items-center p-4 border-y border-[#fff]/10">
                            <p className={`${Typography.body}`} style={{ color: Colors.text }}>Selected Items</p>
                            <p className="text-[30px] font-bold" style={{ color: Colors.progressCircle }}>{totalSelected}</p>
                        </div>

                        <p className="text-[12px] font-normal" style={{ color: Colors.textbody }}>Your current resume will be optimized using only the
                            information you confirm.</p>

                        <div className="flex flex-col gap-4">
                            <Button
                                variant="secondary"
                                size="normal"
                                className="shadow-sm shadow-[#4CD7F6]/30 justify-center text-center cursor-pointer w-full sm:w-auto"
                                onClick={handleClick}
                                disabled={submitting}
                            >
                                <img src={optimize} alt="" />
                                {submitting ? "Submitting..." : "Improve Your Resume"}
                            </Button>

                            <Button
                                variant="glass"
                                size="normal"
                                className="cursor-pointer justify-center text-center w-full sm:w-auto"
                                onClick={() => navigate("/dashboard")}
                            >
                                Back To Dashboard
                            </Button>
                        </div>
                    </div>
                </GlassCard>
            </div>
        </div>
    )
}

export default MissingDataForm
