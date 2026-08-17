import { Colors } from "../../../styles/Color"
import { Typography } from "../../../styles/Font"
import FAQCard from "./FAQCard"
import { FaqData } from "./FAQData"

const FAQS = () => {
    return (
        <div className='z-0 w-full px-[24px] lg:px-[40px] flex flex-col gap-[32px] lg:gap-[64px] flex-items-center items-center justify-between'>
            <div className="flex flex-col gap-[16px] items-center justify-center">
                <p className={`${Typography.responsiveHeading} text-center`} style={{ color: Colors.textbody }}>Frequently Asked Questions</p>
            </div>

            {/* FAQs Card */}
            <FAQCard FaqData={FaqData} start={0} end={3} />
        </div>
    )
}

export default FAQS