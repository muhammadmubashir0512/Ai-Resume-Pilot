import HeroHeading from "../../../components/Layout/HeadingSection"
import Navbar from "../../../components/Layout/Navbar"
import { Colors } from "../../../styles/Color"
import PricingCard from "./PricingCard"
import { FaqData } from "../FAQ Section/FAQData"
import FAQCard from "../FAQ Section/FAQCard"
import { Typography } from "../../../styles/Font"
import Footer from "../Footer"
import Improving from "./Improving"

const Pricing = () => {
    return (
        <div className="flex flex-col gap-[70px] lg:gap-[115px] min:h-screen w-full" style={{ backgroundColor: Colors.primary }}>
            <Navbar />
            <div className="pt-[85px] lg:pt-[110px] px-4">
                <HeroHeading
                    tag="SIMPLE PRICING"
                    headingParts={[
                        { text: "Choose the plan that fits your job search", break: true },
                    ]}
                    description="No credit card required for the free plan. Upgrade whenever you're ready to accelerate your career."
                />
            </div>

            <div className="w-full px-[24px] lg:px-[40px]">
                <PricingCard />
            </div>

            <div className='z-0 w-full px-[24px] lg:px-[40px] flex flex-col gap-[32px] lg:gap-[64px] flex-items-center items-center justify-between'>
                <div className="flex flex-col gap-[16px] items-center justify-center">
                    <p className={`${Typography.responsiveHeading} text-center`} style={{ color: Colors.textbody }}>Frequently Asked Questions</p>
                </div>

                {/* FAQs Card */}
                <FAQCard FaqData={FaqData} start={3} end={7} />
                <Improving />
            </div>

            <Footer />
        </div>
    )
}

export default Pricing