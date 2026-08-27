import PageWrapper from '../../components/Layout/PageWrapper'
import DashboardNavbar from '../Dashboard/DashboardNavbar'
import { Colors } from '../../styles/Color'
import { Typography } from '../../styles/Font'
import TrustNote from './TrustNote'
import MissingDataForm from './MissingDataForm'


const ImproveResume = () => {

    return (
        <PageWrapper>
            <DashboardNavbar />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center justify-between">
                <div className="flex flex-col gap-2">
                    <p className={`${Typography.responsiveHeading}`} style={{ color: Colors.textbody }}>
                        Improve Your Resume
                    </p>
                    <p className={`${Typography.small} md:${Typography.body}`} style={{ color: Colors.text }}>
                        Review the suggested improvements and confirm what you want to include in your
                        optimized resume.
                    </p>
                </div>

                {/* <div className="flex flex-row gap-0 flex-wrap justify-center md:justify-end">
                                <Button
                                    variant="glass"
                                    size="normal"
                                    className="cursor-pointer"
                                    onClick={() => navigate("/resume-Analyzer")}
                                >
                                    <img src={download} alt="" className="h-4 w-4" />
                                    Download Report
                                </Button>
            
                                <Button
                                    rounded="rounded-lg"
                                    size="normal"
                                    className="text-white font-normal cursor-pointer"
                                    onClick={() => navigate("/resume-Analyzer")}
                                >
                                    <img src={again} alt="" className="h-4 w-4" />
                                    Re-analyze
                                </Button>
                            </div> */}
            </div>

            <TrustNote />
            <MissingDataForm />

        </PageWrapper>
    )
}

export default ImproveResume
