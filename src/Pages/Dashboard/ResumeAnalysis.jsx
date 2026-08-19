import GlassCard from '../../components/Layout/GlassEffect'
import { Typography } from '../../styles/Font'
import { Colors } from '../../styles/Color'
import Button from '../../components/Button'

const ResumeAnalysis = ({ data }) => {

    return (
        <GlassCard padding='p-5'>
            <div className='flex flex-col gap-8'>
                {/* Title and ATS Score */}
                <div className='flex flex-row justify-between'>

                    <div className='flex flex-col gap-1'>
                        <p className={`${Typography.heading}`} style={{ color: Colors.textbody }}>Resume Analysis</p>
                        <p className={`${Typography.body}`} style={{ color: Colors.text }}>Latest Upload: {data.fileName}</p>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <p className={`${Typography.responsiveHeading}`} style={{ color: Colors.light }}>{data.atsScore}%</p>
                        <p className={`${Typography.small}`} style={{ color: Colors.light }}>ATS SCORE</p>
                    </div>

                </div>

                {/* points */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>

                    <div className='flex flex-col gap-4'>

                        {/* keyword Match */}
                        <div className='flex flex-row justify-between bg-[#171F33] p-4 rounded-lg'>
                            <p className={`${Typography.subheading}`} style={{ color: Colors.textbody }}>Keyword Match</p>
                            <p className='text-[16px] font-bold text-white'>{data.keywordMatch}%</p>
                        </div>

                        {/* Missing skills */}
                        <div className='bg-[#171F33] p-4 space-y-4 rounded-lg border-l-4 border-[#FFB783]'>

                            <p className={`${Typography.subheading} text-[#FFB783]`}>MISSING CRITICAL SKILLS</p>
                            <div className='flex flex-row gap-2 flex-wrap'>
                                {
                                    (data.missingSkills).map((skill) => {
                                        return (
                                            <div className='py-1 px-3 items-center justify-center bg-[#FFB783]/10 border border-[#FFB783]/20 rounded-full'>
                                                <p className='text-[12px] font-semibold text-[#FFB783]'>{skill}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                        </div>

                    </div>

                    {/* Top Relevant Skills */}
                    <div className='flex flex-col gap-3'>

                        <p className='text-[14px] font-semibold' style={{ color: Colors.text }}>TOP RELEVANT SKILLS FOUND</p>
                        <div className='flex flex-row gap-2 flex-wrap'>
                            {
                                (data.relevantSkills).map((skills) => {
                                    return (
                                        <div className='bg-[#C0C1FF]/10 py-1 px-3 items-center justify-center rounded-full border border-[#C0C1FF]/20'>
                                            <p className={`text-[12px] font-medium`} style={{ color: Colors.light }}>{skills}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>

                </div>

                <Button variant="glass" size="lg" className="justify-center cursor-pointer">
                    VIEW FULL ANALYSIS REPORT
                </Button>

            </div>
        </GlassCard>
    )
}

export default ResumeAnalysis
