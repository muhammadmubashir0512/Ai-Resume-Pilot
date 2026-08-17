import { principleData } from "./PrincipleData"
import GlassCard from "../../../components/Layout/GlassEffect"
import { Colors } from "../../../styles/Color"
import { Typography } from "../../../styles/Font"

const Principle = () => {
    return (
        <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-4 justify-center items-center">
                <p className={`${Typography.responsiveHeading}`} style={{ color: Colors.textbody }}>Core Principles</p>
                <p className={`${Typography.body} text-center`} style={{ color: Colors.text }}>The foundational values that drive our product decisions and team culture.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {
                    principleData.map((card) => {
                        return (
                            <GlassCard padding="p-8">
                                <div key={card.id} className="flex flex-col gap-3">
                                    <img src={card.icon} alt="" className="w-12 h-12" />
                                    <p className={`${Typography.subheading} mt-1 md:mt-3`} style={{ color: Colors.textbody }}>{card.label}</p>
                                    <p className={`${Typography.body}`} style={{ color: Colors.text }}>{card.body}</p>
                                </div>
                            </GlassCard>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Principle
