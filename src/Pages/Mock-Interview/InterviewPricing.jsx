import PageWrapper from "../../components/Layout/PageWrapper"
import DashboardNavbar from "../Dashboard/DashboardNavbar"
import PricingCard from "../Landing-Page/Pricing/PricingCard"
import { Typography } from "../../styles/Font"
import { Colors } from "../../styles/Color"
import { useNavigate } from "react-router-dom"


const InterviewPricing = () => {

    const navigate = useNavigate()

    return (
        <PageWrapper>
            <DashboardNavbar />
            <div className='z-0 w-full px-[24px] lg:px-[40px] flex flex-col gap-[32px] lg:gap-[64px] flex-items-center items-center justify-between'>
                <div className="flex flex-col gap-[16px] items-center justify-center">
                    <p className={`${Typography.responsiveHeading}`} style={{ color: Colors.textbody }}>Choose Your Flight Path</p>
                    <p className={`${Typography.body} text-center`} style={{ color: Colors.text }}>Flexible plans for every stage of your career journey.</p>
                </div>

                {/* FeaturedCard List */}
                <PricingCard className="" onClick={() => navigate("/Mock-Interview/Preference")} />
            </div>
        </PageWrapper>
    )
}

export default InterviewPricing
