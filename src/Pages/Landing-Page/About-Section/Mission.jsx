import GlassCard from '../../../components/Layout/GlassEffect'
import { Typography } from '../../../styles/Font'
import { Colors } from '../../../styles/Color'

const Mission = () => {
    return (
        <div className="w-full">

            <div className="w-full">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                    {/* Heading and subheading */}
                    <div className="flex flex-col w-full justify-center text-center lg:text-left">

                        <div className="flex flex-col gap-4 md:gap-8">
                            <p
                                className={Typography.responsiveHeading}
                                style={{ color: Colors.textbody }}
                            >
                                The Story Behind the Mission
                            </p>

                            <p
                                className={`${Typography.body} lg:mx-0`}
                                style={{ color: Colors.text }}
                            >
                                The modern job search is broken. Millions of talented individuals struggle
                                to articulate their value, while recruiters are overwhelmed by the sheer
                                volume of applicants. We saw a gap where intelligent precision was
                                desperately needed.
                            </p>

                            <p
                                className={`${Typography.body} lg:mx-0`}
                                style={{ color: Colors.text }}
                            >
                                ResumePilot was born from the realization that generative AI could act as
                                an equalizer, providing everyone with a seasoned career coach in their
                                pocket. We're not just formatting text; we're optimizing human potential.
                            </p>
                        </div>

                    </div>

                    {/* ATS Matrix decoding */}
                    <div className="w-full">
                        <GlassCard className="relative h-full space-y-4 overflow-hidden">
                            {/* Gradient */}
                            <div className="w-32 h-32 bg-[#C0C1FF]/20 top-0 right-0 absolute -translate-y-1/3 translate-x-1/3 blur-3xl rounded-full -z-10" />

                            <div className="p-4 rounded-lg flex flex-col justify-center items-center gap-2">
                                <p className='text-[32px] md:text-[64px] font-bold text-[#C0C1FF]'>10k+</p>
                                <p className={`${Typography.body}`} style={{ color: Colors.text }}>Resumes Optimized</p>
                            </div>

                            <div className='h-[1px] w-full bg-white/10' />

                            <div className="p-4 rounded-lg flex flex-col justify-center items-center gap-2">
                                <p className='text-[32px] md:text-[64px] font-bold text-[#4CD7F6]'>92%</p>
                                <p className={`${Typography.body}`} style={{ color: Colors.text }}>Interview Rate Improvement</p>
                            </div>

                            {/* Gradient */}
                            <div className="w-32 h-32 bg-[#4CD7F6]/20 bottom-0 left-0 absolute translate-y-1/3 -translate-x-1/3 blur-3xl rounded-full -z-10" />
                        </GlassCard>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Mission
