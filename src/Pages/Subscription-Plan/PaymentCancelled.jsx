import { useNavigate } from 'react-router-dom'
import GlassCard from '../../components/Layout/GlassEffect'
import PageWrapper from '../../components/Layout/PageWrapper'
import DashboardNavbar from '../Dashboard/DashboardNavbar'
import Button from '../../components/Button'
import { Typography } from '../../styles/Font'
import { Colors } from '../../styles/Color'

const PaymentCancelled = () => {
    const navigate = useNavigate()

    return (
        <PageWrapper className="flex flex-col justify-center items-center min-h-screen w-full">

            <div className="w-full max-w-[460px] px-4 sm:px-0 mx-auto">

                <GlassCard>
                    <div className="flex flex-col items-center gap-6 sm:gap-7 py-2">

                        <div
                            className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full border"
                            style={{
                                backgroundColor: `#FFB78310`,
                                borderColor: `#FFB78340`,
                            }}
                        >
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#FFB783"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </div>

                        <div className="flex flex-col items-center gap-3 text-center">
                            <p className={`${Typography.responsiveHeading}`} style={{ color: Colors.textbody }}>
                                Payment Cancelled
                            </p>

                            <p className={`${Typography.small} sm:${Typography.body} max-w-[360px]`} style={{ color: Colors.text }}>
                                Your payment was not completed and no charge was made. You can try again whenever you're ready.
                            </p>
                        </div>

                        <div
                            className="w-full flex flex-row gap-3 items-center rounded-lg p-4"
                            style={{
                                backgroundColor: '#ffffff05',
                                border: '1px solid #ffffff1A',
                            }}
                        >
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke={Colors.text}
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="shrink-0"
                            >
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" y1="8" x2="12" y2="12" />
                                <line x1="12" y1="16" x2="12.01" y2="16" />
                            </svg>

                            <p className="text-[12px]" style={{ color: Colors.text }}>
                                No charges were made to your card. Your account remains on the free plan.
                            </p>
                        </div>

                        <div className="flex flex-col gap-3 w-full">
                            <Button
                                variant="secondary"
                                size="normal"
                                className="w-full justify-center text-center cursor-pointer"
                                onClick={() => navigate('/Mock-Interview/pricing')}
                            >
                                Try Again
                            </Button>

                            <Button
                                variant="glass"
                                size="normal"
                                className="w-full justify-center text-center cursor-pointer"
                                onClick={() => navigate('/dashboard')}
                            >
                                Back to Dashboard
                            </Button>
                        </div>

                        <p className="text-[11px] text-center" style={{ color: Colors.text }}>
                            Having trouble? Contact support and we'll help you out.
                        </p>

                    </div>
                </GlassCard>

            </div>
        </PageWrapper>
    )
}

export default PaymentCancelled