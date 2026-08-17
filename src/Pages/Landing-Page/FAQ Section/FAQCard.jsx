import { useState } from "react"
import { Colors } from "../../../styles/Color"
import GlassCard from "../../../components/Layout/GlassEffect"
import { Typography } from "../../../styles/Font"
import arrowDown from "../../../assets/arrrowDown.svg"
import arrowUp from "../../../assets/arrowUp.svg"

const FAQCard = ({ className = "", FaqData, start = 0, end }) => {
    const data = FaqData.slice(start, end)
    const [openId, setOpenId] = useState(null)

    const toggleCard = (id) => {
        setOpenId(openId === id ? null : id)
    }

    return (
        <div className="flex flex-col w-full px-0 md:px-30 lg:px-60  gap-4">
            {data.map((card) => {
                const isOpen = openId === card.id

                return (
                    <GlassCard
                        key={card.id}
                        className={`${isOpen ? "border-2 border-white/50 " : ""} relative flex flex-col  hover:ring-1 hover:ring-white/50 hover:bg-[#C0C1FF]/[0.07] ${className}`}
                    >
                        {/* Question*/}
                        <div
                            className="flex flex-row items-center justify-between gap-4 cursor-pointer"
                            onClick={() => toggleCard(card.id)}
                        >
                            <p className={`${Typography.subheading}`} style={{ color: Colors.textbody }}>
                                {card.question}
                            </p>
                            <img src={isOpen ? arrowUp : arrowDown} alt="" className="flex-shrink-0" />
                        </div>

                        {/* Answer*/}
                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                                }`}
                        >
                            <p className={`${Typography.body}`} style={{ color: Colors.text }}>
                                {card.answer}
                            </p>
                        </div>
                    </GlassCard>
                )
            })}
        </div>
    )
}

export default FAQCard