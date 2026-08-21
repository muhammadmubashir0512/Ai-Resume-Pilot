import DashboardNavbar from '../Dashboard/DashboardNavbar'
import { Typography } from '../../styles/Font'
import { Colors } from '../../styles/Color'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import PageWrapper from '../../components/Layout/PageWrapper'
import download from "../../assets/download.svg"
import { interviewResultData } from './Mock_interew_Data'
import GlassCard from '../../components/Layout/GlassEffect'

const InterviewResult = () => {

    const navigate = useNavigate()

    return (
        <PageWrapper>
            <DashboardNavbar />

            {/* Title and dowqnload button */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center justify-between">

                <div className="flex flex-col gap-2">
                    <p
                        className={`${Typography.responsiveHeading}`}
                        style={{ color: Colors.textbody }}
                    >
                        Mock Interview Results
                    </p>

                    <p
                        className={`${Typography.small} md:${Typography.body}`}
                        style={{ color: Colors.text }}
                    >
                        Here’s how you performed in your 10-question interview.
                    </p>
                </div>

                <div className="flex flex-row gap-0 flex-wrap justify-center md:justify-end">

                    <div>
                        <Button
                            variant="glass"
                            size="normal"
                            className="cursor-pointer"
                            onClick={() => navigate("/resume-Analyzer")}
                        >
                            <img
                                src={download}
                                alt=""
                                className="h-4 w-4"
                            />
                            Download Report
                        </Button>
                    </div>

                </div>

            </div>

            {/* Interview info */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>

                {
                    interviewResultData.interviewInfo.map((info) => {
                        return (
                            <GlassCard key={info.id}>

                                <div className='flex flex-col gap-1'>
                                    <p className={`${Typography.small}`} style={{ color: Colors.text }}>{info.label}</p>
                                    <p className='text-[16px] font-medium' style={{ color: info.color }}>{info.body}</p>

                                </div>

                            </GlassCard>
                        )
                    })
                }

            </div>

            {/* Interview Performance */}
            <GlassCard>
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">

                    {/* Overall Score */}
                    <div
                        className={`${Typography.heading} flex-shrink-0 w-[100px] h-[100px] shadow-lg shadow-[#4CD7F6]/50 flex flex-col items-center justify-center text-center rounded-full border-[6px]`}
                        style={{ borderColor: Colors.progressCircle }}
                    >
                        <p
                            className="text-[24px] font-bold"
                            style={{ color: Colors.textbody }}
                        >
                            {interviewResultData.overallScore}
                        </p>
                        <p className={`text-[10px] font-normal`} style={{ color: Colors.text }}>Overall Score</p>
                    </div>

                    {/* Performance Content */}
                    <div className="flex flex-col gap-6 md:gap-8 w-full min-w-0">

                        {/* Title + Percentile */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">

                            <p
                                className={`${Typography.heading} text-[22px] sm:text-[24px] md:text-[28px]`}
                                style={{ color: Colors.textbody }}
                            >
                                {interviewResultData.performance.title}
                            </p>

                            <div className="self-start sm:self-auto py-1 px-3 rounded-full bg-[#4CD7F6]/10 border border-[#4CD7F6]/20">
                                <p className="text-[13px] sm:text-[14px] font-semibold text-[#4CD7F6] whitespace-nowrap">
                                    {interviewResultData.performance.percentile}
                                </p>
                            </div>

                        </div>

                        {/* Summary */}
                        <p
                            className={`${Typography.body} leading-relaxed`}
                            style={{ color: Colors.text }}
                        >
                            {interviewResultData.performance.summary}
                        </p>

                        {/* Comparison */}
                        <div className="flex flex-row gap-2 items-center">
                            <p
                                className={`${Typography.body}`}
                                style={{ color: Colors.progressCircle }}
                            >
                                {interviewResultData.performance.comparison}
                            </p>
                        </div>

                    </div>

                </div>
            </GlassCard>

            {/* Performance Breakdown */}
            <div className='flex flex-col gap-6'>

                <p className={`${Typography.heading}`} style={{ color: Colors.textbody }}>Performance Breakdown</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {
                        interviewResultData.performanceBreakdown.map((perf) => {
                            return (
                                <GlassCard>
                                    <div className='flex flex-col gap-4'>
                                        <div className='flex flex-row justify-between items-center'>
                                            <p className='text-[14px] font-semibold' style={{ color: Colors.text }}>{perf.title}</p>
                                            <p className='text-[24px] font-semibold' style={{ color: Colors.text }}>{perf.score}</p>
                                        </div>

                                        <div className='bg-[#222A3D] h-[8px] rounded-full w-full'>
                                            <div className='h-[8px] rounded-full' style={{
                                                width: `${(perf.score)}%`,
                                                backgroundColor: Colors.progressCircle
                                            }} />
                                        </div>

                                    </div>
                                </GlassCard>
                            )
                        })
                    }

                </div>

            </div>

            <div className="flex flex-col sm:flex-row justify-center  gap-4 sm:gap-6 pt-6">
                <Button
                    variant="secondary"
                    size="normal"
                    className="shadow-sm shadow-[#4CD7F6]/30 cursor-pointer w-full sm:w-auto"
                    onClick={() => navigate("/Mock-Interview/Preference")}
                >
                    Try Another Interview
                </Button>

                <Button
                    variant="glass"
                    size="normal"
                    className="cursor-pointer justify-center text-center w-full sm:w-auto"
                    onClick={() => navigate("/dashboard")}
                >
                    BACK TO DASHBOARD
                </Button>
            </div>



        </PageWrapper>
    )
}

export default InterviewResult