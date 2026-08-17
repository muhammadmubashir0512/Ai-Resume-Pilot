import Navbar from "../../../components/Layout/Navbar"
import { Colors } from "../../../styles/Color"
import HeroHeading from "../../../components/Layout/HeadingSection"
import FeaturedCard from "./FeaturesCard"
import FeturedData from "./FeaturedData"
import Footer from "../Footer"
import ATSMatrix from "./AtsMatrix"

export const Features = () => {
    return (
        <div className="flex flex-col gap-[70px] lg:gap-[115px] min:h-screen w-full" style={{ backgroundColor: Colors.primary }}>
            <Navbar />
            <div className="flex flex-col gap-[70px] lg:gap-[115px] px-4">
                <div className="pt-[85px] lg:pt-[110px]">
                    <HeroHeading
                        tag="PLATFORM FEATURES"
                        headingParts={[
                            { text: "Everything you need to" },
                            { text: "land the ", gradient: true, break: true },
                            { text: "Interview", gradient: true }
                        ]}
                        description="End-to-end coverage from intelligent resume optimization to highly realistic mock interviews. Build confidence and secure top-tier opportunities with precision AI."
                    />
                </div>
                <div className="w-full px-[24px] lg:px-[40px]">
                    <FeaturedCard Features={FeturedData} limit={8} className="cursor-pointer hover:transition-all hover:-translate-y-0.5 hover:ring-1 hover:ring-[#fff]/50 hover:bg-[#C0C1FF]/7" />
                </div>
                <ATSMatrix />
            </div>
            <Footer />
        </div>
    )
}
