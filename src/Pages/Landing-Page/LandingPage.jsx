import Navbar from "../../components/Layout/Navbar"
import { Colors } from "../../styles/Color"
import AIAnalyzer from "./AIAnalyzer"
import FAQS from "./FAQ Section/FAQS"
import FeaturedSection from "./FeatureSection"
import Footer from "./Footer"
import { HeroSection } from "./Home-Page/HeroSection"
import PricingSection from "./PricingSection"
import RealMoackInterview from "./RealMock"
import SocialProof from "./SocialProof"

const LandingPage = () => {
    return (
        <div className="flex flex-col gap-[70px] lg:gap-[115px] min:h-screen w-full" style={{ backgroundColor: Colors.primary }}>
            <div className="flex flex-col gap-[19px]">
                <Navbar />
                <div className="pt-[85px] lg:pt-[110px]">
                    <HeroSection />
                </div>
            </div>
            <SocialProof />
            <FeaturedSection />
            <AIAnalyzer />
            <RealMoackInterview />
            <PricingSection />
            <FAQS />
            <Footer />
        </div>
    )
}

export default LandingPage