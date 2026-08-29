import { useEffect, useState } from 'react'
import PageWrapper from '../../components/Layout/PageWrapper'
import AiInterview from './AiInterview'
import DashboardNavbar from './DashboardNavbar'
import ResumeAnalysis from './ResumeAnalysis'
import Stats from './Stats'

const Dashboard = () => {

    const [dashboardData, setDashboardData] = useState(null)

    useEffect(() => {

        // Static Data
        setDashboardData({
            stats: {
                resumeScore: 15,
                interviewsReadiness: 85,
                interviews: 12,
                skillGap: 3
            },

            resumeAnalysis: {
                fileName: "Senior_SWE_2024.pdf",
                atsScore: 94,
                keywordMatch: 89,
                missingSkills: [
                    "Serverless",
                    "Cloud Architecture"
                ],
                relevantSkills: [
                    "Kubernetes",
                    "React/Next.js",
                    "TypeScript",
                    "CI/CD",
                    "GoLang"
                ]
            },

            aiInterview: {
                activeSession: "Senior Software Engineer",

                difficulty: "Hard",

                question:
                    "How do you handle technical conflict and divergent opinions in high-stakes projects with strict deadlines?",

                answerQualityScore: 8,

                responseClarity: "Excellent",

                technicalAccuracy: "High",

                sentimentAnalysis: "Confident"
            },
        })
    }, [])

    if (!dashboardData) {
        return null
    }

    return (
        <PageWrapper className='justify-center items-center'>
            <DashboardNavbar />

            <Stats data={dashboardData.stats} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ResumeAnalysis data={dashboardData.resumeAnalysis} />
                <AiInterview data={dashboardData.aiInterview} />
            </div>

        </PageWrapper>
    )
}

export default Dashboard
