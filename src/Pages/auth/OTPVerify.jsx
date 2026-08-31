import { useState, useRef, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { toast, Toaster } from 'react-hot-toast'
import GlassCard from '../../components/Layout/GlassEffect'
import PageWrapper from '../../components/Layout/PageWrapper'
import Button from '../../components/Button'
import { Typography } from '../../styles/Font'
import { Colors } from '../../styles/Color'
import { post } from '../../services/api'

const OTP_LENGTH = 4
const RESEND_SECONDS = 60

const OtpVerification = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const email = location.state?.email || ''

    const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(''))
    const [loading, setLoading] = useState(false)
    const [resending, setResending] = useState(false)
    const [secondsLeft, setSecondsLeft] = useState(RESEND_SECONDS)

    const inputRefs = useRef([])

    useEffect(() => {
        if (secondsLeft <= 0) return
        const timer = setInterval(() => {
            setSecondsLeft((prev) => prev - 1)
        }, 1000)
        return () => clearInterval(timer)
    }, [secondsLeft])

    const focusInput = (index) => {
        const target = inputRefs.current[index]
        if (target) target.focus()
    }

    const handleChange = (index, value) => {
        const digit = value.replace(/[^0-9]/g, '').slice(-1)

        setOtp((prev) => {
            const next = [...prev]
            next[index] = digit
            return next
        })

        if (digit && index < OTP_LENGTH - 1) {
            focusInput(index + 1)
        }
    }

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            focusInput(index - 1)
        }
    }

    const handlePaste = (e) => {
        e.preventDefault()
        const pasted = e.clipboardData.getData('text').replace(/[^0-9]/g, '').slice(0, OTP_LENGTH)
        if (!pasted) return

        const next = Array(OTP_LENGTH).fill('')
        pasted.split('').forEach((char, i) => {
            next[i] = char
        })
        setOtp(next)
        focusInput(Math.min(pasted.length, OTP_LENGTH - 1))
    }

    const code = otp.join('')
    const isComplete = code.length === OTP_LENGTH

    const handleVerify = async () => {
        if (!isComplete) {
            toast.error('Please enter the complete 4-digit code')
            return
        }

        setLoading(true)
        try {
            const response = await post('/auth/verify-otp', { email, otp: code })
            localStorage.setItem("accessToken", response.data.accessToken);
            toast.success('Email verified successfully')
            navigate('/dashboard')
        } catch (error) {
            toast.error(error.message || 'Invalid or expired code')
            setOtp(Array(OTP_LENGTH).fill(''))
            focusInput(0)
        } finally {
            setLoading(false)
        }
    }

    const handleResend = async () => {
        if (secondsLeft > 0 || resending) return

        setResending(true)
        try {
            await post('/auth/signup', { email })
            toast.success('A new code has been sent')
            setSecondsLeft(RESEND_SECONDS)
            setOtp(Array(OTP_LENGTH).fill(''))
            focusInput(0)
        } catch (error) {
            toast.error(error.message || 'Could not resend code')
        } finally {
            setResending(false)
        }
    }

    return (
        <PageWrapper className="flex flex-col justify-center items-center min-h-screen w-full">
            <Toaster />

            <div className="w-full max-w-[440px] px-4 sm:px-0 mx-auto">

                <GlassCard>
                    <div className="flex flex-col gap-6 sm:gap-7 py-2">

                        <div className="flex flex-col items-center gap-3 text-center">
                            <div
                                className="flex items-center justify-center w-14 h-14 rounded-full border"
                                style={{
                                    backgroundColor: `${Colors.progressCircle}10`,
                                    borderColor: `${Colors.progressCircle}30`,
                                }}
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke={Colors.progressCircle}
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect x="3" y="11" width="18" height="10" rx="2" />
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                </svg>
                            </div>

                            <p className={`${Typography.responsiveHeading}`} style={{ color: Colors.textbody }}>
                                Verify Your Email
                            </p>

                            <p className={`${Typography.small} sm:${Typography.body} max-w-[340px]`} style={{ color: Colors.text }}>
                                We've sent a {OTP_LENGTH}-digit verification code to{' '}
                                <span className="font-semibold" style={{ color: Colors.textbody }}>
                                    {email || 'your email address'}
                                </span>
                            </p>
                        </div>

                        <div
                            className="flex flex-row justify-center gap-3 sm:gap-4"
                            onPaste={handlePaste}
                        >
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    ref={(el) => (inputRefs.current[index] = el)}
                                    type="text"
                                    inputMode="numeric"
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-lg text-center text-[22px] sm:text-[26px] font-bold outline-none transition-all duration-150 focus:ring-2"
                                    style={{
                                        backgroundColor: '#ffffff08',
                                        border: `1px solid ${digit ? Colors.progressCircle + '60' : '#ffffff1A'}`,
                                        color: Colors.textbody,
                                        boxShadow: digit ? `0 0 0 1px ${Colors.progressCircle}30` : 'none',
                                    }}
                                />
                            ))}
                        </div>

                        <Button
                            variant="secondary"
                            size="normal"
                            className="w-full justify-center text-center cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                            onClick={handleVerify}
                            disabled={!isComplete || loading}
                        >
                            {loading ? 'Verifying...' : 'Verify Code'}
                        </Button>

                        <div className="flex flex-row justify-center items-center gap-1.5 flex-wrap">
                            <p className={`${Typography.small}`} style={{ color: Colors.text }}>
                                Didn't receive the code?
                            </p>

                            {secondsLeft > 0 ? (
                                <p className="text-[13px] font-semibold" style={{ color: Colors.textbody }}>
                                    Resend in {String(Math.floor(secondsLeft / 60)).padStart(2, '0')}:
                                    {String(secondsLeft % 60).padStart(2, '0')}
                                </p>
                            ) : (
                                <button
                                    onClick={handleResend}
                                    disabled={resending}
                                    className="text-[13px] font-semibold cursor-pointer hover:underline disabled:opacity-60 disabled:cursor-not-allowed"
                                    style={{ color: Colors.progressCircle }}
                                >
                                    {resending ? 'Sending...' : 'Resend Code'}
                                </button>
                            )}
                        </div>

                    </div>
                </GlassCard>

                <div className="flex justify-center mt-5">
                    <button
                        onClick={() => navigate('/login')}
                        className="text-[13px] font-medium cursor-pointer hover:underline"
                        style={{ color: Colors.text }}
                    >
                        Back to login
                    </button>
                </div>

            </div>
        </PageWrapper>
    )
}

export default OtpVerification