import { Colors } from "../../styles/Color"
import { Typography } from "../../styles/Font"
import GlassCard from "../../components/Layout/GlassEffect"
import { useResumeStore } from "../../Store/ResumeStore"
import shield from "../../assets/Shield.svg"



const TrustNote = () => {
    const analysis = useResumeStore((state) => state.analysis)

    if (!analysis) return null
    const data = [
        { tag: "TARGET ROLE :", body: analysis.job_title, score: null },
        { tag: "ATS Score", body: null, score: analysis.ats_score },
        { tag: "Keyword Match", body: null, score: analysis.keyword_match.score },
        { tag: "Formatting", body: null, score: analysis.formatting.score }
    ]

    const getScoreColor = (score) => {
        if (score >= 70) return { text: "#4CD7F6", bg: "#4CD7F6" };
        if (score >= 40) return { text: "#FFC876", bg: "#FFC876" };
        return { text: "#FFB4AB", bg: "#FFB4AB" };
    };

    return (
        <div className="flex flex-col gap-6">

            {/* Analysis Data */}
            <div className="flex flex-row items-center gap-3 flex-wrap">
                {data.map((item) => {
                    const scoreColor = item.score !== undefined ? getScoreColor(item.score) : null;

                    return (
                        <GlassCard key={item.tag} padding="p-0" rounded="rounded-full">
                            <div className="flex flex-row gap-4 items-center px-4 py-2.5">
                                <p className="text-[14px] font-semibold whitespace-nowrap" style={{ color: Colors.text }}>
                                    {item.tag}
                                </p>

                                {item.score !== null ? (
                                    <div
                                        className="rounded-full min-w-6 h-6 px-2 flex items-center justify-center"
                                        style={{
                                            backgroundColor: `${scoreColor.bg}1A`,
                                            border: `1px solid ${scoreColor.bg}33`,
                                        }}
                                    >
                                        <p className="text-[12px] font-semibold whitespace-nowrap" style={{ color: scoreColor.text }}>
                                            {item.score}%
                                        </p>
                                    </div>
                                ) : (
                                    <p className="text-[13px] font-medium whitespace-nowrap" style={{ color: Colors.textbody }}>
                                        {item.body}
                                    </p>
                                )}
                            </div>
                        </GlassCard>
                    );
                })}
            </div>

            {/* Trust Note */}
            <div className="max-w-[896px]">
                <GlassCard>
                    <div className="flex flex-row gap-3 items-center flex-wrap">
                        <img src={shield} alt="" className='w-[24px] h-[24px]' />
                        <p className="text-[13px] font-normal max-w-[800px]" style={{ color: Colors.textbody }}><span className="text-[15px] font-bold" style={{ color: Colors.text }}>Trust Note:</span> Only select skills and information you genuinely have. ResumePilot will never add unverified
                            skills or experience to your resume.</p>

                    </div>
                </GlassCard>
            </div>

        </div>
    )
}

export default TrustNote
