import resume from ".././../assets/resume.png"
import AI from "../../assets/AI.png"
import SuccessRate from "../../assets/SuccessRate.png"
import { Typography } from "../../styles/Font"

const SocialData = [
    { id: 1, icon: resume, title: "10k+", body: "RESUMES OPTIMIZED" },
    { id: 2, icon: SuccessRate, title: "98%+", body: "ATS SUCCESS RATE" },
    { id: 3, icon: AI, title: "AI-Powered", body: "LLM ANALYSIS" },
]

const SocialProof = () => {
    return (
        <div className='bg-[#060E20] w-full p-[32px] lg:p-[40px] border border-y-white/5'>
            <div className="flex flex-col md:flex-row items-center justify-center gap-[40px] lg:gap-[100px] w-full">
                {
                    SocialData.map((social) => {
                        return (
                            <div key={social.id} className="w-[220px] flex flex-row justify-center items-center  text-white gap-3">
                                <img src={social.icon} alt="" className="w-[48px] h-[48px]" />
                                <div className="flex flex-col w-full">
                                    <p className={`${Typography.subheading}`}>{social.title}</p>
                                    <p className={`${Typography.body}`}>{social.body}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SocialProof