import GlassCard from '../../components/Layout/GlassEffect'
import { Typography } from '../../styles/Font'
import { Colors } from '../../styles/Color'
import critical from "../../assets/critical.png"
import match from "../../assets/match.png"
import idea from "../../assets/Idea.svg"

const AIAnalyzer = () => {
    return (
        <div className='w-full px-[24px] lg:px-[40px]'>

            <div className='w-full px-0 lg:px-25'>

                <GlassCard className='grid grid-cols-1 lg:grid-cols-2 lg:p-8'>

                    <div className='flex flex-col gap-[32px] p-5 md:p-8'>

                        <div className='flex flex-col gap-[14px]'>
                            <p className={`${Typography.responsiveHeading}`} style={{ color: Colors.textbody }}>Precision AI Analyzer</p>
                            <p className={`${Typography.body}`} style={{ color: Colors.text }}>Our analyzer doesn't just check spelling. It evaluates semantic relevance against live job markets.</p>
                        </div>

                        <div className='flex flex-col gap-[24px]'>
                            <div className='flex flex-row gap-3'>
                                <img src={match} alt="" className='h-[40px] w-[40px]' />
                                <div className='flex flex-col'>
                                    <p className={`${Typography.subheading}`} style={{ color: Colors.textbody }}>Keyword Match</p>
                                    <p className={`${Typography.body}`} style={{ color: Colors.text }}>Targeting: Cloud Architecture, Serverless</p>
                                </div>
                            </div>

                            <div className='flex flex-row gap-3'>
                                <img src={critical} alt="" className='h-[40px] w-[40px]' />
                                <div className='flex flex-col gap-[5px]'>
                                    <p className={`${Typography.subheading}`} style={{ color: Colors.textbody }}>Missing Critical Skills</p>
                                    <div className='flex flex-row gap-2'>
                                        <GlassCard className={`text-white ${Typography.small} `} padding='py-1 px-3'>Python</GlassCard>
                                        <GlassCard className={`text-white ${Typography.small}`} padding='py-1 px-3'>AWS</GlassCard>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='py-8 pr-2 md:pr-10 items-center'>
                        <GlassCard className='h-full space-y-3'>
                            <div className='flex flex-row gap-2 items-center'>
                                <img src={idea} alt="" />
                                <p className={`${Typography.subheading}`} style={{ color: Colors.light }}>IMPROVEMENT TIP</p>
                            </div>
                            <p className={`${Typography.body}`} style={{ color: Colors.textbody }}>
                                Quantify achievements: Change "Managed a team"
                                to "Managed a cross-functional team of 12,
                                increasing productivity by 40%."
                            </p>
                        </GlassCard>
                    </div>

                </GlassCard>
            </div>
        </div>
    )
}

export default AIAnalyzer