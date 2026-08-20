import GlassCard from '../../components/Layout/GlassEffect'
import Button from '../../components/Button'
import { Typography } from '../../styles/Font'
import { Colors } from '../../styles/Color'
import PageWrapper from '../../components/Layout/PageWrapper'
import DashboardNavbar from '../Dashboard/DashboardNavbar'
import download from "../../assets/download.svg"
import again from "../../assets/again.svg"
import { useNavigate } from 'react-router-dom'
import SuggestStrength from './SuggestStrength'
import AnalysisImprovement from './AnalysisImprovement'
import UpdateResume from './updateResume'

const ResumeAnalytics = () => {

    const navigate = useNavigate()

    const analysisData = {
        atsScore: 94,

        keywordMatch: 89,

        formatting: "EXCELLENT",
        formattingScore: 96,

        suggestion:
            "Analysis suggests your resume is in the top 5% of applicants for this role. Only minor tweaks needed for total optimization.",

        strengths: [
            {
                id: 1,
                body: "Strong technical stack alignment"
            },
            {
                id: 2,
                body: "Professional layout & consistency"
            },
            {
                id: 3,
                body: "High semantic density in summary"
            }
        ],

        matchIdentity: {
            first: "JD",
            second: "RS",
            label: "Strong Job Match Identity"
        },

        content: [
            { id: 1, tag: "Contact Info", status: true },
            { id: 2, tag: "Education", status: true },
            { id: 3, tag: "Experience", status: true },
            { id: 4, tag: "Projects", status: false },
        ],

    }

    const keywordData = {
        foundKeywords: {
            total: 12,
            keywords: [
                "Python",
                "React",
                "AWS",
                "PostgreSQL",
                "Node.js",
                "TypeScript",
            ]
        },

        missingKeywords: {
            requiredMatch: "Required for 99% match",
            keywords: [
                "Kubernetes",
                "CI/CD",
                "GoLang",
                "Terraform"
            ]
        },

        topImprovements: [
            {
                id: 1,
                title: "Quantify Achievements",
                description:
                    'Add concrete data to your Experience section. For example: "Reduced system latency by 30%" instead of "Improved latency".'
            },
            {
                id: 2,
                title: "Integrate Cloud-Native Keywords",
                description:
                    "Your profile lacks specific mentions of Kubernetes and CI/CD pipelines, which are critical for this senior role."
            },
            {
                id: 3,
                title: "Expand Project Contributions",
                description:
                    "The 'Projects' section is currently brief. Detailing your architectural decisions would strengthen your 'Senior' positioning."
            }
        ]
    }

    return (
        <PageWrapper>
            <DashboardNavbar />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center justify-between">

                <div className="flex flex-col gap-2">
                    <p
                        className={`${Typography.responsiveHeading}`}
                        style={{ color: Colors.textbody }}
                    >
                        Resume Analysis Results
                    </p>

                    <p
                        className={`${Typography.small} md:${Typography.body}`}
                        style={{ color: Colors.text }}
                    >
                        Detailed AI analysis and ATS optimization for Senior Software Engineer role.
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

                    <Button
                        rounded="rounded-lg"
                        size="normal"
                        className="text-white font-normal cursor-pointer"
                    >
                        <img
                            src={again}
                            alt=""
                            className="h-4 w-4"
                        />
                        Re-analyze
                    </Button>

                </div>

            </div>

            <SuggestStrength data={analysisData} />

            <AnalysisImprovement data={keywordData} />

            <UpdateResume />

        </PageWrapper>
    )
}

export default ResumeAnalytics
