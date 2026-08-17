import FeaturedCard from "./Features/FeaturesCard";
import FeturedData from "./Features/FeaturedData";
import { Colors } from "../../styles/Color";
import { Typography } from "../../styles/Font";

const FeaturedSection = () => {
    return (
        <div className='z-0 w-full px-[24px] lg:px-[40px] flex flex-col gap-[32px] lg:gap-[64px] flex-items-center items-center justify-between'>
            <div className="flex flex-col gap-[16px] items-center justify-center">
                <p className={`${Typography.responsiveHeading}`} style={{ color: Colors.textbody }}>Engineered for Success</p>
                <p className={`${Typography.body} text-center`} style={{ color: Colors.text }}>Everything you need to go from applicant to new hire, all in one intelligent workspace.</p>
            </div>

            {/* FeaturedCard List */}
            <FeaturedCard Features={FeturedData} limit={4} className="cursor-pointer hover:transition-all hover:-translate-y-0.5 hover:ring-1 hover:ring-[#fff]/50 hover:bg-[#C0C1FF]/7" />
        </div>
    )
}

export default FeaturedSection
