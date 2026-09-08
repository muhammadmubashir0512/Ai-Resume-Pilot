import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GlassCard from '../../components/Layout/GlassEffect'
import Button from '../../components/Button'
import { Colors } from '../../styles/Color'
import crown from "../../assets/prof.svg"
import { get } from '../../services/api'
import { toast } from 'react-hot-toast'

const CurrentPlan = () => {
    const navigate = useNavigate()

    const [subscription, setSubscription] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchSubscription = async () => {
            try {
                const response = await get("/checkout/stripe/currentPlan")
                setSubscription(response.data)
            } catch (error) {
                toast.error(error.message || "Could not load subscription")
            } finally {
                setLoading(false)
            }
        }

        fetchSubscription()
    }, [])

    if (loading) {
        return (
            <GlassCard>
                <div className="flex items-center justify-center py-10">
                    <div className="w-8 h-8 rounded-full border-4 border-white/10 border-t-[#4CD7F6] animate-spin" />
                </div>
            </GlassCard>
        )
    }

    const planName = subscription?.subscriptionPlan || "Free"
    const status = subscription?.subscriptionStatus || "active"
    const billingCycle = subscription?.billingCycle || "month"
    const nextBillingDate = subscription?.nextBillingDate || null
    let price;
    if (planName === "premium") {
        price = "$9"
    } else if (planName === "pro") {
        price = "$19"
    } else {
        price = "$0"
    }

    const isFree = planName.toLowerCase().includes("free")

    return (
        <GlassCard>
            <div className="flex flex-col gap-8">

                <div className="flex flex-row gap-4 items-center justify-between flex-wrap">

                    <div className="flex flex-row gap-4 items-center">
                        <div
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg p-3 sm:p-4 flex items-center justify-center"
                            style={{
                                backgroundColor: `${Colors.light}30`
                            }}
                        >
                            <img src={crown} alt="" className="w-full h-full" />
                        </div>

                        <p
                            className="text-[18px] sm:text-[20px] md:text-[24px] font-semibold"
                            style={{ color: Colors.textbody }}
                        >
                            Subscription Plan
                        </p>
                    </div>

                    <div
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                        style={{
                            backgroundColor: status === "active" ? "#4ADE8010" : "#FFB78310",
                            border: `1px solid ${status === "active" ? "#4ADE8040" : "#FFB78340"}`,
                        }}
                    >
                        <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: status === "active" ? "#4ADE80" : "#FFB783" }}
                        />
                        <p
                            className="text-[11px] font-semibold capitalize"
                            style={{ color: status === "active" ? "#4ADE80" : "#FFB783" }}
                        >
                            {status}
                        </p>
                    </div>

                </div>

                <div
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-lg p-5"
                    style={{
                        backgroundColor: '#ffffff05',
                        border: '1px solid #ffffff1A',
                    }}
                >
                    <div className="flex flex-col gap-1">
                        <p className="text-[13px]" style={{ color: Colors.text }}>Current Plan</p>
                        <p className="text-[20px] sm:text-[24px] font-bold" style={{ color: Colors.textbody }}>
                            {planName}
                        </p>
                    </div>

                    <div className="flex flex-col sm:items-end gap-1">
                        <p className="text-[24px] sm:text-[28px] font-bold" style={{ color: Colors.progressCircle }}>
                            {price}
                            {!isFree && (
                                <span className="text-[13px] font-normal" style={{ color: Colors.text }}>
                                    {" "}/ {billingCycle}
                                </span>
                            )}
                        </p>

                        {!isFree && nextBillingDate && (
                            <p className="text-[11px]" style={{ color: Colors.text }}>
                                Renews on {nextBillingDate}
                            </p>
                        )}
                    </div>
                </div>


                <div className="flex flex-col sm:flex-row gap-3 justify-end">
                    {isFree ? (
                        <Button
                            variant="secondary"
                            size="normal"
                            className="cursor-pointer w-full sm:w-auto justify-center"
                            onClick={() => navigate("/updateSubscription")}
                        >
                            Upgrade Plan
                        </Button>
                    ) : (
                        <>
                            <Button
                                variant="glass"
                                size="normal"
                                className="cursor-pointer w-full sm:w-auto justify-center"
                                onClick={() => navigate('/updateSubscription')}
                            >
                                Change Plan
                            </Button>
                        </>
                    )}
                </div>

            </div>
        </GlassCard>
    )
}

export default CurrentPlan