import { Colors } from "../../styles/Color"
import { Typography } from "../../styles/Font"
import GlassCard from "../../components/Layout/GlassEffect"
import Button from "../../components/Button"
import Logo from "../../assets/Logo.png"
import rapid from "../../assets/Rapid.svg"
import expert from "../../assets/Expert.svg"
import optimize from "../../assets/Optimize.svg"
import { useForm } from "react-hook-form"
import google from "../../assets/google.png"
import eyeIcon from "../../assets/eyeIcon.svg"
import { useNavigate } from "react-router-dom"

const signupData = [
    { id: 1, icon: optimize, label: "AI-POWERED OPTIMIZATION", body: "Our algorithms analyze job descriptions to tailor every bullet point for maximum ATS impact.", headingColor: "#C0C1FF" },
    { id: 2, icon: expert, label: "EXPERT CAREER INSIGHTS", body: "Get personalized feedback based on industry benchmarks and current hiring trends.", headingColor: "#4CD7F6" },
    { id: 3, icon: rapid, label: "RAPID INTERVIEW PREP", body: "Generate mock interviews tailored to the specific role you are applying for in seconds.", headingColor: "#FFB783" }
]

const Signup = () => {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm()

    const onSubmit = (userData) => {
        console.log("User Data...", userData)
        setTimeout(() => {
            navigate("/dashboard")
        }, 1000);
    }

    return (
        <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2" style={{ backgroundColor: Colors.primary }}>

            {/* Left — Marketing Content */}
            <div className="hidden lg:flex relative flex-col gap-10 lg:gap-14 justify-center px-6 md:px-8 lg:px-12 py-12 bg-[#060E20] overflow-hidden">
                <div className="flex flex-col gap-5 lg:gap-7">
                    {/* Logo */}
                    <div className="flex flex-row gap-3 items-center cursor-pointer">
                        <img src={Logo} alt="Logo" className="h-6 w-6" />
                        <h1 className="text-[#DAE2FD] font-semibold text-lg lg:text-2xl">
                            ResumePilot
                        </h1>
                    </div>

                    {/* Hero Line */}
                    <div className="flex flex-col gap-3 lg:gap-4">
                        <span
                            className="text-[36px] lg:text-[48px] font-extrabold leading-[1.15]"
                            style={{ color: Colors.textbody }}
                        >
                            Your AI Partner in
                            <br />
                            <span className="text-[#4CD7F6]/80">
                                Career Growth.
                            </span>
                        </span>
                        <span
                            className={`${Typography.body} text-sm lg:text-base leading-relaxed`}
                            style={{ color: Colors.text }}
                        >
                            Join thousands of professionals using ResumePilot to craft high-impact resumes and land dream interviews.
                        </span>
                    </div>
                </div>

                <div className="flex flex-col gap-5 lg:gap-6">
                    {signupData.map((data) => (
                        <div key={data.id} className="flex flex-row gap-3 lg:gap-4">
                            <img
                                src={data.icon}
                                alt=""
                                className="h-8 w-8 lg:h-10 lg:w-10 flex-shrink-0"
                            />
                            <div className="flex flex-col gap-1">
                                <p
                                    className="text-xs lg:text-sm font-bold uppercase tracking-wide"
                                    style={{ color: data.headingColor }}
                                >
                                    {data.label}
                                </p>
                                <p
                                    className="text-sm leading-relaxed"
                                    style={{ color: Colors.text }}
                                >
                                    {data.body}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Gradient Glow */}
                <div className="w-40 h-40 bg-[#4CD7F6]/40 -bottom-10 -left-10 absolute blur-3xl rounded-full" />
            </div>

            {/* Right — Form */}
            <div className="w-full flex flex-col gap-6 md:gap-8 justify-center items-center px-6 sm:px-10 md:px-12 py-10 lg:py-0">

                <div className="w-full max-w-[420px] flex flex-col gap-1">
                    <p className="text-xl md:text-2xl font-bold" style={{ color: Colors.textbody }}>
                        Create your account
                    </p>
                    <p className={`${Typography.body} text-sm`} style={{ color: Colors.text }}>
                        Start your professional journey with AI.
                    </p>
                </div>

                <GlassCard className="w-full max-w-[420px]" padding="p-6 md:p-8 relative">

                    {/* Gradient Glow */}
                    <div className="w-40 h-40 bg-[#4CD7F6]/15 -bottom-10 -left-10 absolute blur-3xl rounded-full -z-10" />

                    {/* Gradient Glow */}
                    <div className="w-40 h-40 bg-[#4CD7F6]/15 -top-10 -right-10 absolute blur-3xl rounded-full -z-10" />

                    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>

                        {/* Signup with Google */}
                        <GlassCard padding="p-3" rounded="rounded-lg" className="cursor-pointer hover:bg-white/5 transition-colors">
                            <div className="flex flex-row gap-2 items-center justify-center">
                                <img src={google} alt="" className="w-[18px] h-[18px]" />
                                <p className="text-sm font-medium" style={{ color: Colors.textbody }}>
                                    Sign up with Google
                                </p>
                            </div>
                        </GlassCard>

                        {/* Divider */}
                        <div className="flex flex-row gap-3 items-center justify-center">
                            <div className="h-[1px] flex-1 bg-white/10" />
                            <p className="text-[11px] font-medium tracking-wide" style={{ color: Colors.text }}>
                                OR EMAIL
                            </p>
                            <div className="h-[1px] flex-1 bg-white/10" />
                        </div>

                        {/* Full Name */}
                        <div>
                            <label className="block text-[11px] font-semibold uppercase tracking-wide mb-1.5" style={{ color: Colors.text }}>
                                Full Name
                            </label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full text-white px-4 py-2.5 rounded-lg text-sm bg-white/5 border border-white/10 placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#4CD7F6]/50 focus:border-transparent transition-all duration-200"
                                {...register("fullName", {
                                    required: "Full name is required",
                                })}
                            />
                            {errors.fullName && (
                                <p className="text-red-400 text-xs mt-1">{errors.fullName.message}</p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-[11px] font-semibold uppercase tracking-wide mb-1.5" style={{ color: Colors.text }}>
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="john@example.com"
                                className="w-full text-white px-4 py-2.5 rounded-lg text-sm bg-white/5 border border-white/10 placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#4CD7F6]/50 focus:border-transparent transition-all duration-200"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Invalid email format",
                                    },
                                })}
                            />
                            {errors.email && (
                                <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                            )}
                        </div>

                        {/* Password + Confirm */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-[11px] font-semibold uppercase tracking-wide mb-1.5" style={{ color: Colors.text }}>
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="w-full text-white px-4 py-2.5 pr-10 rounded-lg text-sm bg-white/5 border border-white/10 placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#4CD7F6]/50 focus:border-transparent transition-all duration-200"
                                        {...register("password", {
                                            required: "Password is required",
                                            minLength: { value: 6, message: "Minimum 6 characters" },
                                        })}
                                    />
                                    <img src={eyeIcon} alt="" className="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 opacity-40 cursor-pointer" />
                                </div>
                                {errors.password && (
                                    <p className="text-red-400 text-xs mt-1">{errors.password.message}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-[11px] font-semibold uppercase tracking-wide mb-1.5" style={{ color: Colors.text }}>
                                    Confirm
                                </label>
                                <div className="relative">
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="w-full text-white px-4 py-2.5 pr-10 rounded-lg text-sm bg-white/5 border border-white/10 placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#4CD7F6]/50 focus:border-transparent transition-all duration-200"
                                        {...register("confirmPassword", {
                                            required: "Please confirm your password",
                                        })}
                                    />
                                    <img src={eyeIcon} alt="" className="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 opacity-40 cursor-pointer" />
                                </div>
                                {errors.confirmPassword && (
                                    <p className="text-red-400 text-xs mt-1">{errors.confirmPassword.message}</p>
                                )}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <Button type="submit" variant="secondary" size="lg" disabled={isSubmitting} className="items-center justify-center cursor-pointer w-full">
                            {isSubmitting ? "Creating Account..." : "Create Account"}
                        </Button>
                    </form>
                </GlassCard>

                {/* Terms + Login Link */}
                <div className="w-full max-w-[420px] flex flex-col gap-4 items-center text-center">
                    <p className="text-xs" style={{ color: Colors.text }}>
                        By signing up, you agree to our{" "}
                        <span className="underline cursor-pointer" style={{ color: Colors.textbody }}>Terms of Service</span>
                        {" "}and{" "}
                        <span className="underline cursor-pointer" style={{ color: Colors.textbody }}>Privacy Policy</span>.
                    </p>
                    <p className="text-sm" style={{ color: Colors.text }} onClick={() => navigate("/login")}>
                        Already have an account?{" "}
                        <span className="font-medium cursor-pointer hover:underline" style={{ color: Colors.progressCircle }}>Log in</span>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Signup
