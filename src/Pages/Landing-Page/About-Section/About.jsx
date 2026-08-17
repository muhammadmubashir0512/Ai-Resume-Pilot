import Navbar from '../../../components/Layout/Navbar'
import { Colors } from '../../../styles/Color'
import HeroHeading from '../../../components/Layout/HeadingSection'
import Footer from '../Footer'
import Mission from './Mission'
import Principle from './Principle'
import Started from './StaredWith'

export const About = () => {
    return (
        <div className="flex flex-col gap-[70px] lg:gap-[115px] min:h-screen min:h-screen w-full" style={{ backgroundColor: Colors.primary }}>
            <Navbar />
            <div className='flex flex-col gap-[70px] lg:gap-[115px] px-4'>
                <div className="pt-[85px] lg:pt-[110px]">
                    <HeroHeading
                        tag="ABOUT RESUMEPILOT"
                        headingParts={[
                            { text: "Helping students and job seekers", break: true },
                            { text: "get hired faster", gradient: true }
                        ]}
                        description="We're on a mission to democratize access to world-class career guidance using intelligent precision and cutting-edge AI technology."
                    />
                </div>
                <Mission />
                <Principle />
                <Started />
            </div>
            <Footer />
        </div>
    )
}
