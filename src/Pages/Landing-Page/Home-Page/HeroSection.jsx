import Button from '../../../components/Button'
import GlassCard from '../../../components/Layout/GlassEffect'
import { Colors } from '../../../styles/Color'
import { Typography } from '../../../styles/Font'
import Arrow from "../../../assets/Arrow.svg"
import Checked from "../../../assets/Checked.svg"
import HeroHeading from '../../../components/Layout/HeadingSection'
import { useNavigate } from 'react-router-dom'

export const HeroSection = () => {

    const navigate = useNavigate()

    return (
        <div className='z-0 w-full px-[24px] lg:px-[40px] flex flex-col gap-[24px] lg:gap-[48px] flex-items-center items-center justify-between'>

            {/* Hero Heading */}
            <div className='w-full flex flex-col flex-items-center items-center gap-[14px] lg:gap-[23px] md:px-[140px]'>

                <HeroHeading
                    tag="NEW: MOCK INTERVIEW 2.0"
                    headingParts={[
                        { text: "Turn Your Resume Into" },
                        { text: "Interview", gradient: true, break: true },
                        { text: "Opportunities", gradient: true },
                    ]}
                    description="Our AI-driven platform optimizes your resume for ATS algorithms and prepares you for real-world scenarios with live mock interviews."
                />

                <div className='flex flex-row gap-[16px] flex-wrap justify-center'>
                    <div>
                        <Button variant="secondary" size="normal" className="cursor-pointer" onClick={() => navigate("/login")}>Start Free Analysis <img src={Arrow} alt="" className='h-[16px] w-[16px]' /></Button>
                    </div>
                    <Button variant="glass" rounded="rounded-lg" size="normal" className="text-white font-normal cursor-pointer " onClick={() => navigate("/pricing")}>Try Mock Interview</Button>
                </div>
            </div>

            {/* Gradient Card */}
            <div className="relative max-w-[448px] w-full mx-auto">

                {/* Background Gradient*/}
                <div
                    className="absolute -inset-4 blur-3xl rounded-full z-10"
                    style={{ backgroundColor: `${Colors.light}33` }}
                ></div>

                {/* ATS Card*/}
                <GlassCard className="lg:p-8 text-left  space-y-6">

                    {/* Header */}
                    <div className="flex justify-between items-center">
                        <div className="space-y-1">
                            <h3 className={`text-white text-[20px] lg:text-[24px] font-semibold`}>ATS Analysis</h3>
                            <p className={`text-white/60 ${Typography.body}`}>
                                Senior Software Engineer
                            </p>
                        </div>

                        {/* Progress */}
                        <div className="relative w-20 h-20">
                            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                                <circle
                                    className="stroke-white/10"
                                    cx="18" cy="18" fill="none" r="16" strokeWidth="3"
                                />
                                <circle
                                    cx="18" cy="18" fill="none" r="16"
                                    strokeDasharray="100" strokeDashoffset="6"
                                    strokeLinecap="round" strokeWidth="3"
                                    style={{ stroke: Colors.progressCircle }}
                                />
                            </svg>
                            <div
                                className="absolute inset-0 flex items-center justify-center font-bold"
                                style={{ color: Colors.progressCircle }}
                            >
                                94%
                            </div>
                        </div>
                    </div>

                    <div className="h-px bg-white/10 w-full"></div>

                    {/* Checklist */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <img src={Checked} alt="" />
                            <span className="text-[#DAE2FD] font-normal text-[16px]">Resume parsed successfully</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src={Checked} alt="" />
                            <span className="text-[#DAE2FD] font-normal text-[16px]">Keywords optimization complete</span>
                        </div>
                    </div>
                </GlassCard>
            </div>

        </div>
    )
} 
