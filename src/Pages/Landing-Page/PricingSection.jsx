import { Colors } from "../../styles/Color";
import { Typography } from "../../styles/Font";
import PricingCard from "./Pricing/PricingCard";

const PricingSection = () => {
    return (
        <div className='z-0 w-full px-[24px] lg:px-[40px] flex flex-col gap-[32px] lg:gap-[64px] flex-items-center items-center justify-between'>
            <div className="flex flex-col gap-[16px] items-center justify-center">
                <p className={`${Typography.responsiveHeading}`} style={{ color: Colors.textbody }}>Choose Your Flight Path</p>
                <p className={`${Typography.body} text-center`} style={{ color: Colors.text }}>Flexible plans for every stage of your career journey.</p>
            </div>

            {/* FeaturedCard List */}
            <PricingCard className="" />
        </div>
    )
}

export default PricingSection
