import GlassCard from '../../components/Layout/GlassEffect'
import Button from '../../components/Button'
import { Typography } from '../../styles/Font'
import { Colors } from '../../styles/Color'
import PageWrapper from '../../components/Layout/PageWrapper'
import DashboardNavbar from '../Dashboard/DashboardNavbar'
import download from "../../assets/download.svg"
import again from "../../assets/again.svg"
import { useNavigate } from 'react-router-dom'
import Tips from '../Resume-Upload/Tips'

const ResumeAnalytics = () => {

    const navigate = useNavigate()

    return (
        <PageWrapper>
            <DashboardNavbar />

            {/* Heading and download report button */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center justify-between'>

                {/* Welcome Note */}
                <div className='flex flex-col gap-2'>
                    <p className={`${Typography.responsiveHeading}`} style={{ color: Colors.textbody }}>Resume Analysis Results</p>
                    <p className={`${Typography.small} md:${Typography.body}`} style={{ color: Colors.text }}>Detailed AI analysis and ATS optimization for Senior Software Engineer role.</p>
                </div>

                {/* download and re-analyze Buttons */}
                <div className='flex flex-row gap-[0px] flex-wrap justify-center md:justify-end'>

                    <div>
                        <Button variant="glass" size="normal" className="cursor-pointer" onClick={() => navigate("/resume-Analyzer")}> <img src={download} alt="" className='h-[16px] w-[16px]' /> Download Report</Button>
                    </div>
                    <Button rounded="rounded-lg" size="normal" className="text-white font-normal cursor-pointer "><img src={again} alt="" className='h-[16px] w-[16px]' /> Re-analyze</Button>

                </div>

            </div>

            <Tips />

        </PageWrapper>
    )
}

export default ResumeAnalytics