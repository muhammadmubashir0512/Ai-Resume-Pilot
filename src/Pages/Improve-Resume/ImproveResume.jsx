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
            </div>

            <TrustNote />
            <MissingDataForm />

        </PageWrapper>
    )
}

export default ImproveResume
