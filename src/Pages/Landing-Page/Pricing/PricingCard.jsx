import check from "./../../../assets/check.svg"
import { Colors } from "../../../styles/Color"
import { Typography } from "../../../styles/Font"
import GlassCard from "../../../components/Layout/GlassEffect"
import Button from "../../../components/Button"
import { PricingData } from "./PricingCardData"

const PricingCard = ({ className = "", onClick }) => {
    return (
        <div className="grid grid-cols-1  lg:grid-cols-3 w-full px-0 md:px-45 gap-8">
            {
                PricingData.map((card) => {
                    return (
                        <GlassCard key={card.id} className={`relative flex h-full flex-col cursor-pointer hover:transition-all hover:-translate-y-0.5 hover:ring-1 hover:ring-[#fff]/50 hover:bg-[#C0C1FF]/7 ${className}`} >
                            {card.popular && (
                                <span className="absolute bg-[#C0C1FF] text-[#1000A9] text-xs font-bold top-0 right-0  px-4 py-1 rounded-tr-2xl rounded-bl-md">
                                    Most Popular
                                </span>
                            )}
                            <div className="flex flex-col gap-4">
                                <p className={`${Typography.heading}`} style={{ color: Colors.textbody }}>{card.title}</p>
                                <p className={`${Typography.responsiveHeading}`} style={{ color: Colors.textbody }}>{card.price}<span className={`${Typography.body}`} style={{ color: Colors.text }}>/mo</span></p>
                            </div>

                            <div className="w-full pt-6 flex flex-col gap-4">
                                {card.benefits.map((benefit, index) => (
                                    <div key={index} className="flex flex-row gap-3">
                                        <div className="flex items-center">
                                            <img src={check} alt="" />
                                        </div>
                                        <p
                                            className={`${Typography.body} text-sm md:text-base leading-relaxed`}
                                            style={{ color: Colors.textbody }}
                                        >
                                            {benefit}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-6 w-full mt-auto">
                                {card.title === "FREE" ? (
                                    <GlassCard padding="p-2">
                                        <Button variant="" size="md" className="w-full flex text-white items-center cursor-pointer justify-center" onClick={onClick}>
                                            {card.ButtonText}
                                        </Button>
                                    </GlassCard>
                                ) : card.popular ? (
                                    <Button variant="light" size="lg" rounded="rounded-xl" className="w-full p-2 flex text-white items-center cursor-pointer justify-center">
                                        {card.ButtonText}
                                    </Button>
                                ) :
                                    <GlassCard padding="p-2">
                                        <Button variant="" size="md" className="w-full flex text-white items-center cursor-pointer justify-center">
                                            {card.ButtonText}
                                        </Button>
                                    </GlassCard>}
                            </div>
                        </GlassCard>
                    )
                })
            }
        </div>
    )
}

export default PricingCard