import GlassCard from '../../components/Layout/GlassEffect'
import { Typography } from '../../styles/Font'
import { Colors } from '../../styles/Color'
import PageWrapper from '../../components/Layout/PageWrapper'
import DashboardNavbar from '../Dashboard/DashboardNavbar'

const MockInterviewInProgress = () => {
    return (
        <PageWrapper>

            <DashboardNavbar />

            <GlassCard padding='p-10'>
                <div className='flex flex-col gap-3 justify-center items-center text-center'>
                    <div
                        className='w-14 h-14 rounded-full flex items-center justify-center'
                        style={{ backgroundColor: `${Colors.progressCircle}15` }}
                    >
                        <div className='w-3 h-3 rounded-full animate-pulse' style={{ backgroundColor: Colors.progressCircle }} />
                    </div>

                    <p className={Typography.heading} style={{ color: Colors.textbody }}>
                        Mock Interview Coming Soon
                    </p>

                    <p className='text-[13px] leading-6 max-w-md' style={{ color: Colors.text }}>
                        We're building an AI-powered mock interview experience with
                        job-specific questions and real-time feedback. Hang tight, it's
                        almost ready.
                    </p>
                </div>
            </GlassCard>
        </PageWrapper>
    )
}

export default MockInterviewInProgress
