import GlassCard from '../../../components/Layout/GlassEffect'
import { Typography } from '../../../styles/Font'
import { Colors } from '../../../styles/Color'
import checked from "../../../assets/Checked.svg"
import insight from "../../../assets/Insight.png"
import TextFile from "../../../assets/TextFile.svg"
import critical from "../../../assets/critical.png"

const data = [
    { id: 1, title: "Instant Entity Extraction Validation", body: "Verify that dates, skills, and titles are correctly  parsed without data loss." },
    { id: 2, title: "Action Verb Density Scoring", body: "Ensure your bullet points lead with high-impact, results-oriented phrasing." },
    { id: 3, title: "Formatting Red Flag Alerts", body: "Detect multi-column layouts or complex graphics that break legacy scanners." }
]

const scoreStats = [
    { id: 1, label: "Keyword Match", value: "92" },
    { id: 2, label: "Action Verbs", value: "68" },
    { id: 3, label: "Readability", value: "88" },
]

const ATSMatrix = () => {
    return (
        <div className="w-full px-5 sm:px-6 lg:px-10">

            <div className="w-full pt-[32px] lg:pt-[64px]">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                    {/* Heading and subheading */}
                    <div className="flex flex-col w-full justify-center gap-4 text-center lg:text-left">

                        <div className='flex flex-row gap-3 justify-center md:justify-start items-center'>
                            <img src={insight} alt="" className='w-8 h-8' />
                            <p className={`${Typography.subheading}`} style={{ color: Colors.light }}>PRECISION INSIGHT</p>
                        </div>

                        <div className="flex flex-col gap-3.5">
                            <p
                                className={Typography.responsiveHeading}
                                style={{ color: Colors.textbody }}
                            >
                                Decode the ATS Matrix
                            </p>

                            <p
                                className={`${Typography.body} lg:mx-0`}
                                style={{ color: Colors.text }}
                            >
                                Stop guessing what the screening algorithms want. Our analyzer
                                breaks down your document structure, extracts parsed entities,
                                and grades readability exactly how enterprise ATS platforms do.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 items-center lg:items-start">


                            {data.map((line) => (
                                <GlassCard
                                    key={line.id}
                                    className="flex flex-row gap-3 items-center text-white text-left w-full"
                                >
                                    <img
                                        src={checked}
                                        alt=""
                                        className="shrink-0"
                                    />
                                    <div>
                                        <p className='text-[14px] font-semibold' style={{ color: Colors.textbody }}>{line.title}</p>
                                        <p className='text-[13px] font-normal' style={{ color: Colors.text }}>{line.body}</p>
                                    </div>
                                </GlassCard>
                            ))}

                        </div>

                    </div>

                    {/* ATS Matrix decoding */}
                    <div className="w-full">
                        <GlassCard className="h-full space-y-6">

                            <div className="flex flex-row gap-2 justify-between items-center pb-4 border-b border-white/5">
                                <div className='flex flex-row items-center gap-3'>
                                    <img
                                        src={TextFile}
                                        alt=""
                                        className="h-5 w-4 shrink-0"
                                    />
                                    <p className="text-[12px] md:text-[14px] text-wrap font-semibold" style={{ color: Colors.textbody }}>jdoe_resume_v4.pdf</p>
                                </div>

                                <div
                                    className={`text-[12px] font-light md:font-normal text-white rounded-full py-1 px-3`}
                                    style={{ backgroundColor: `${Colors.light}20` }}
                                >
                                    Analysis Complete
                                </div>
                            </div>

                            {/*  */}
                            <div className="w-full flex flex-col lg:flex-row gap-8 items-center lg:items-stretch">

                                {/* Score Card */}
                                <div className="rounded-2xl p-6 flex flex-col items-center gap-4 w-full max-w-[320px]" style={{ backgroundColor: "#0B1326" }}>

                                    {/* Circular Score */}
                                    <div className="rounded-full h-[140px] w-[140px] border-[6px] flex flex-col items-center justify-center" style={{ borderColor: Colors.progressCircle }}>
                                        <p className="text-[48px] font-bold text-white leading-none">85</p>
                                        <span
                                            className="text-[11px] font-medium px-2 py-0.5 rounded mt-1 border"
                                            style={{ color: Colors.progressCircle, borderColor: `${Colors.progressCircle}40`, backgroundColor: `${Colors.progressCircle}10` }}
                                        >
                                            ATS SCORE
                                        </span>
                                    </div>

                                    {/* Change Badge */}
                                    <div
                                        className="rounded-full px-4 py-2 text-sm font-medium border"
                                        style={{ color: Colors.progressCircle, borderColor: `${Colors.progressCircle}30`, backgroundColor: `${Colors.progressCircle}10` }}
                                    >
                                        +12% from previous version
                                    </div>
                                </div>

                                {/* Progress Bars */}
                                <div className="w-full flex flex-col justify-center gap-6">
                                    {scoreStats.map((stat) => (
                                        <div key={stat.label} className="flex flex-col gap-2">
                                            <div className="flex flex-row justify-between items-center">
                                                <p className={`${Typography.body}`} style={{ color: Colors.textbody }}>
                                                    {stat.label}
                                                </p>
                                                <p className="font-semibold text-sm" style={{ color: Colors.light }}>
                                                    {stat.value}%
                                                </p>
                                            </div>
                                            <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                                                <div
                                                    className="h-full rounded-full transition-all duration-500 ease-out"
                                                    style={{ width: `${stat.value}%`, backgroundColor: stat.color }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>

                            <div className="p-4 rounded-lg border bg-[#FFB4AB]/10 border-[#FFB4AB]/20 flex flex-col gap-2">
                                <div className='flex flex-row gap-2 items-center'>
                                    <img src={critical} alt="" className='w-[24px] h-[24px]' />
                                    <p className='text-[#FFB4AB] font-semibold text-[14px]'>1 Critical Issue Found</p>
                                </div>
                                <p className='text-[12px] font-normal text-[#C7C4D7]'>The 'Education' section uses an unconventional table format which failed to parse in simulated Workday environments.</p>
                            </div>

                        </GlassCard>
                    </div>

                </div>

            </div >

        </div >
    )
}

export default ATSMatrix
