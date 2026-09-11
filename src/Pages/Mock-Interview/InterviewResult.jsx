import DashboardNavbar from '../Dashboard/DashboardNavbar'
import { Typography } from '../../styles/Font'
import { Colors } from '../../styles/Color'
import Button from '../../components/Button'
import { useLocation, useNavigate } from 'react-router-dom'
import PageWrapper from '../../components/Layout/PageWrapper'
import GlassCard from '../../components/Layout/GlassEffect'

const InterviewResult = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const interviewResult = location.state?.interviewResult
    const interviewInfo = location.state?.interviewInfo

    if (!interviewResult) {
        return (
            <PageWrapper>
                <DashboardNavbar />

                <div className="flex flex-col items-center justify-center min-h-[60vh] gap-5">
                    <p
                        className={Typography.heading}
                        style={{ color: Colors.textbody }}
                    >
                        Interview Result Not Found
                    </p>

                    <Button
                        variant="secondary"
                        size="normal"
                        className="cursor-pointer"
                        onClick={() => navigate("/dashboard")}
                    >
                        BACK TO DASHBOARD
                    </Button>
                </div>
            </PageWrapper>
        )
    }

    const {
        overallScore,
        technicalKnowledge,
        communication,
        problemSolving,
        relevance,
        strengths = [],
        weaknesses = [],
        recommendations = []
    } = interviewResult

    return (
        <PageWrapper>
            <DashboardNavbar />

            <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-between">

                <div className="flex flex-col gap-2">
                    <p
                        className={Typography.responsiveHeading}
                        style={{ color: Colors.textbody }}
                    >
                        Mock Interview Results
                    </p>

                    <p
                        className={`${Typography.small} md:${Typography.body}`}
                        style={{ color: Colors.text }}
                    >
                        Here’s how you performed in your mock interview.
                    </p>
                </div>

            </div>

            {interviewInfo && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <GlassCard>
                        <div className="flex flex-col gap-1">
                            <p className={Typography.small} style={{ color: Colors.text }}>
                                Job Role
                            </p>
                            <p className="text-[16px] font-medium" style={{ color: Colors.textbody }}>
                                {interviewInfo.jobTitle}
                            </p>
                        </div>
                    </GlassCard>

                    <GlassCard>
                        <div className="flex flex-col gap-1">
                            <p className={Typography.small} style={{ color: Colors.text }}>
                                Interview Type
                            </p>
                            <p className="text-[16px] font-medium" style={{ color: Colors.progressCircle }}>
                                {interviewInfo.interviewType}
                            </p>
                        </div>
                    </GlassCard>

                    <GlassCard>
                        <div className="flex flex-col gap-1">
                            <p className={Typography.small} style={{ color: Colors.text }}>
                                Difficulty
                            </p>
                            <p className="text-[16px] font-medium" style={{ color: Colors.textbody }}>
                                {interviewInfo.difficulty}
                            </p>
                        </div>
                    </GlassCard>

                </div>
            )}

            <GlassCard>
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">

                    <div
                        className="flex-shrink-0 w-[120px] h-[120px] shadow-lg shadow-[#4CD7F6]/50 flex flex-col items-center justify-center text-center rounded-full border-[6px]"
                        style={{ borderColor: Colors.progressCircle }}
                    >
                        <p
                            className="text-[28px] font-bold"
                            style={{ color: Colors.textbody }}
                        >
                            {overallScore}
                        </p>

                        <p
                            className="text-[10px] font-normal"
                            style={{ color: Colors.text }}
                        >
                            Overall Score
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <p
                            className={`${Typography.heading}`}
                            style={{ color: Colors.textbody }}
                        >
                            Interview Performance
                        </p>

                        <p
                            className={`${Typography.body} leading-relaxed`}
                            style={{ color: Colors.text }}
                        >
                            Your overall interview score is {overallScore} out of 100.
                            Review the breakdown below to understand your strengths
                            and areas that need improvement.
                        </p>
                    </div>

                </div>
            </GlassCard>

            <div className="flex flex-col gap-6">

                <p
                    className={Typography.heading}
                    style={{ color: Colors.textbody }}
                >
                    Performance Breakdown
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {[
                        {
                            title: "Technical Knowledge",
                            score: technicalKnowledge
                        },
                        {
                            title: "Communication",
                            score: communication
                        },
                        {
                            title: "Problem Solving",
                            score: problemSolving
                        },
                        {
                            title: "Relevance",
                            score: relevance
                        }
                    ].map((perf) => (
                        <GlassCard key={perf.title}>
                            <div className="flex flex-col gap-4">

                                <div className="flex flex-row justify-between items-center">
                                    <p
                                        className="text-[14px] font-semibold"
                                        style={{ color: Colors.text }}
                                    >
                                        {perf.title}
                                    </p>

                                    <p
                                        className="text-[24px] font-semibold"
                                        style={{ color: Colors.textbody }}
                                    >
                                        {perf.score}
                                    </p>
                                </div>

                                <div className="bg-[#222A3D] h-[8px] rounded-full w-full">
                                    <div
                                        className="h-[8px] rounded-full"
                                        style={{
                                            width: `${perf.score}%`,
                                            backgroundColor: Colors.progressCircle
                                        }}
                                    />
                                </div>

                            </div>
                        </GlassCard>
                    ))}

                </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <GlassCard>
                    <div className="flex flex-col gap-4">
                        <p
                            className={Typography.heading}
                            style={{ color: Colors.textbody }}
                        >
                            Strengths
                        </p>

                        <div className="flex flex-col gap-3">
                            {strengths.map((item, index) => (
                                <p
                                    key={index}
                                    className="text-[14px] leading-relaxed"
                                    style={{ color: Colors.text }}
                                >
                                    • {item}
                                </p>
                            ))}
                        </div>
                    </div>
                </GlassCard>

                <GlassCard>
                    <div className="flex flex-col gap-4">
                        <p
                            className={Typography.heading}
                            style={{ color: Colors.textbody }}
                        >
                            Weaknesses
                        </p>

                        <div className="flex flex-col gap-3">
                            {weaknesses.map((item, index) => (
                                <p
                                    key={index}
                                    className="text-[14px] leading-relaxed"
                                    style={{ color: Colors.text }}
                                >
                                    • {item}
                                </p>
                            ))}
                        </div>
                    </div>
                </GlassCard>

                <GlassCard>
                    <div className="flex flex-col gap-4">
                        <p
                            className={Typography.heading}
                            style={{ color: Colors.textbody }}
                        >
                            Recommendations
                        </p>

                        <div className="flex flex-col gap-3">
                            {recommendations.map((item, index) => (
                                <p
                                    key={index}
                                    className="text-[14px] leading-relaxed"
                                    style={{ color: Colors.text }}
                                >
                                    • {item}
                                </p>
                            ))}
                        </div>
                    </div>
                </GlassCard>

            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 pt-6">

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
