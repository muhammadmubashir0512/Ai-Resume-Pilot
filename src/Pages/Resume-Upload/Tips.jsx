import tips from "../../assets/Tips.svg"
import GlassCard from "../../components/Layout/GlassEffect"
import { Colors } from "../../styles/Color"
import { Typography } from "../../styles/Font"

const resumeTips = [
    {
        id: 1,
        title: "Use a clean layout",
        description:
            "Avoid complex graphics or tables that might confuse older ATS systems."
    },
    {
        id: 2,
        title: "Quantifiable achievements",
        description:
            'Use metrics like "Increased efficiency by 20%" to stand out to recruiters.'
    },
    {
        id: 3,
        title: "Keyword Optimization",
        description:
            "Our AI will highlight missing industry-specific keywords for your role."
    },
    {
        id: 4,
        title: "Keyword Optimization",
        description:
            "Our AI will highlight missing industry-specific keywords for your role."
    }
]

const Tips = () => {
    return (
        <GlassCard>

            <div className="flex flex-col gap-6">

                <div className="flex flex-row items-center gap-2">
                    <img src={tips} alt="" className="w-[15px] h-[20px]" />
                    <p className="text-[14px] font-bold" style={{ color: Colors.progressCircle }}>PRO TIPS</p>
                </div>

                <div className="flex flex-col gap-6">

                    {
                        resumeTips.map((tip) => {
                            return (
                                <div key={tip.id} className="flex flex-row gap-2">

                                    <div className="text-[12px] w-[24px] h-[24px] font-bold py-1 px-2 rounded-full" style={{ backgroundColor: `${Colors.progressCircle}20` }}>
                                        <p style={{ color: Colors.progressCircle }}>{tip.id}</p>
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <p className="text-[14px] font-semibold" style={{ color: Colors.textbody }}>{tip.title}</p>
                                        <p className={`${Typography.small}`} style={{ color: Colors.text }}>{tip.description}</p>
                                    </div>

                                </div>
                            )
                        })
                    }

                </div>

            </div>

        </GlassCard>
    )
}

export default Tips
