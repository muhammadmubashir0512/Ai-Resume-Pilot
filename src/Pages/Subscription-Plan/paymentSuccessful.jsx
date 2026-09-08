import { useNavigate } from 'react-router-dom'
import GlassCard from '../../components/Layout/GlassEffect'
import PageWrapper from '../../components/Layout/PageWrapper'
import Button from '../../components/Button'
import { Typography } from '../../styles/Font'
import { Colors } from '../../styles/Color'
import { useEffect, useState } from 'react'
import { get } from '../../services/api'
import toast from 'react-hot-toast'

const PaymentSuccess = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [subscriptionData, setSubscriptionData] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)

                const response = await get("/checkout/stripe/currentPlan")
                setSubscriptionData(response.data)

            } catch (error) {
                console.log("Error", error)
                toast.error(error.message || "Something went wrong")
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    if (loading) {
        return (
            <div className="min-h-[70vh] flex flex-col justify-center items-center gap-5">

                <div className="relative flex items-center justify-center">
                    <div
                        className="w-14 h-14 rounded-full border-4 border-white/10 border-t-[#4CD7F6] animate-spin"
                    />

                    <div
                        className="absolute w-8 h-8 rounded-full"
                        style={{
                            backgroundColor: `${Colors.progressCircle}10`
                        }}
                    />
                </div>

                <div className="flex flex-col items-center gap-1 text-center">
                    <p
                        className="text-[18px] font-semibold"
                        style={{ color: Colors.textbody }}
                    >
                        Loading Dashboard
                    </p>

                    <p
                        className="text-[14px]"
                        style={{ color: Colors.text }}
                    >
                        Fetching your resumePilot activity...
                    </p>
                </div>

            </div>
        )
    }

    return (
        <PageWrapper className="flex flex-col justify-center items-center min-h-screen w-full">

            <div className="w-full max-w-[460px] px-4 sm:px-0 mx-auto">

                <GlassCard>
                    <div className="flex flex-col items-center gap-6 sm:gap-7 py-2">

                        <div
                            className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full border"
                            style={{
                                backgroundColor: `#4ADE8010`,
                                borderColor: `#4ADE8040`,
                            }}
                        >
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#4ADE80"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M20 6 9 17l-5-5" />
                            </svg>
                        </div>

                        <div className="flex flex-col items-center gap-3 text-center">
                            <p className={`${Typography.responsiveHeading}`} style={{ color: Colors.textbody }}>
                                Payment Successful
                            </p>

                            <p className={`${Typography.small} sm:${Typography.body} max-w-[360px]`} style={{ color: Colors.text }}>
                                Your subscription is now active. You have full access to AI resume analysis, optimization, and mock interviews.
                            </p>
                        </div>

                        <div
                            className="w-full flex flex-col gap-3 rounded-lg p-4 sm:p-5"
                            style={{
                                backgroundColor: '#ffffff05',
                                border: '1px solid #ffffff1A',
                            }}
                        >
                            <div className="flex flex-row justify-between items-center">
                                <p className="text-[12px]" style={{ color: Colors.text }}>Subscription Plan</p>
                                <p className="text-[13px] font-semibold" style={{ color: Colors.textbody }}>{subscriptionData?.subscriptionPlan}</p>
                            </div>

                            <div className="flex flex-row justify-between items-center">
                                <p className="text-[12px]" style={{ color: Colors.text }}>Subscription Status</p>
                                <p className="text-[13px] font-semibold" style={{ color: Colors.textbody }}>{subscriptionData?.subscriptionStatus}</p>
                            </div>

                            <div className="flex flex-row justify-between items-center">
                                <p className="text-[12px]" style={{ color: Colors.text }}>Subscription Starting Date</p>
                                <p
                                    className="text-[13px] font-semibold"
                                    style={{ color: Colors.textbody }}
                                >
                                    {subscriptionData?.createdAt
                                        ? new Date(subscriptionData.createdAt).toLocaleDateString()
                                        : "N/A"}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 w-full">
                            <Button
                                variant="secondary"
                                size="normal"
                                className="w-full justify-center text-center cursor-pointer"
                                onClick={() => navigate('/dashboard')}
                            >
                                Go to Dashboard
                            </Button>
                        </div>

                        <p className="text-[11px] text-center" style={{ color: Colors.text }}>
                            A receipt has been sent to your email address.
                        </p>

                    </div>
                </GlassCard>

            </div>
        </PageWrapper>
    )
}

export default PaymentSuccess