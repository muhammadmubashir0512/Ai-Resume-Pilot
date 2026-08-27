import { Typography } from '../../styles/Font'
import { Colors } from '../../styles/Color'
import GlassCard from '../../components/Layout/GlassEffect'

const TargetContext = ({ data, onChange }) => {

    const experienceType = [
        { id: 1, type: "Entry Level" },
        { id: 2, type: "Mid-Senior" },
        { id: 3, type: "Director/Exec" },
    ]

    return (
        <GlassCard>
            <div className="p-0 sm:p-4 md:p-6 space-y-6 md:space-y-10">

                <div className='flex flex-row gap-2 items-center'>
                    <div className='h-[24px] w-[5px] rounded-lg' style={{ backgroundColor: Colors.progressCircle }} />
                    <p className={`text-[24px] font-semibold`} style={{ color: Colors.textbody }}>Target Context</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10'>

                    {/* Full Name */}
                    <div>
                        <label className="block text-[12px] font-semibold uppercase tracking-wide mb-1.5" style={{ color: Colors.text }}>
                            Full Name
                        </label>
                        <input
                            type="text"
                            value={data.fullName}
                            onChange={(e) =>
                                onChange({
                                    ...data,
                                    fullName: e.target.value
                                })
                            }
                            placeholder="John Doe"
                            className="w-full text-white px-4 py-2.5 rounded-lg text-sm bg-white/5 border border-white/10 placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#4CD7F6]/50 focus:border-transparent transition-all duration-200"
                        />
                    </div>

                    {/* Target Role */}
                    <div>
                        <label className="block text-[12px] font-semibold uppercase tracking-wide mb-1.5" style={{ color: Colors.text }}>
                            Target Role
                        </label>
                        <input
                            type="text"
                            value={data.targetRole}
                            onChange={(e) =>
                                onChange({
                                    ...data,
                                    targetRole: e.target.value
                                })
                            }
                            placeholder="e.g; software engineer"
                            className="w-full text-white px-4 py-2.5 rounded-lg text-sm bg-white/5 border border-white/10 placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#4CD7F6]/50 focus:border-transparent transition-all duration-200"
                        />
                    </div>
                </div>

                {/* Experience Level */}
                <div className='flex flex-col gap-2'>
                    <p className="block text-[12px] font-semibold uppercase tracking-wide mb-1.5" style={{ color: Colors.text }}>
                        EXPERIENCE LEVEL
                    </p>

                    <div className='flex flex-row gap-4 flex-wrap items-center'>
                        {
                            experienceType.map((exp) => {
                                return (

                                    <div key={exp.id} className='flex flex-row gap-2 items-center cursor-pointer' onClick={() =>
                                        onChange({
                                            ...data,
                                            experience: exp.type
                                        })
                                    }>
                                        <div className={`rounded-full w-[16px] h-[16px] ${data.experience === exp.type ? 'bg-[#4CD7F6]' : 'border-2 border-[#464554]'} `} />
                                        <p className={`${Typography.small}`} style={{ color: Colors.text }}>{exp.type}</p>
                                    </div>

                                )
                            })
                        }
                    </div>
                </div>

                {/* Job Description */}
                <div>
                    <label className="block text-[12px] font-semibold uppercase tracking-wide mb-1.5" style={{ color: Colors.text }}>
                        Job Description
                    </label>
                    <textarea
                        value={data.jobDescription}
                        onChange={(e) =>
                            onChange({
                                ...data,
                                jobDescription: e.target.value
                            })
                        }
                        placeholder="Paste Job Description here..."
                        className="w-full text-white px-4 py-2.5 h-[200px] rounded-lg text-sm bg-white/5 border border-white/10 placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#4CD7F6]/50 focus:border-transparent transition-all duration-200"
                    />
                </div>



            </div>
        </GlassCard>
    )
}

export default TargetContext
