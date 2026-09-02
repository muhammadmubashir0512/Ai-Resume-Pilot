import { Typography } from '../../styles/Font'
import { Colors } from '../../styles/Color'
import GlassCard from '../../components/Layout/GlassEffect'

const TargetContext = ({ data, onChange }) => {

    return (
        <GlassCard>
            <div className="p-0 sm:p-4 md:p-6 space-y-6 md:space-y-10">

                <div className='flex flex-row gap-2 items-center'>
                    <div className='h-[24px] w-[5px] rounded-lg' style={{ backgroundColor: Colors.progressCircle }} />
                    <p className={`text-[24px] font-semibold`} style={{ color: Colors.textbody }}>Target Context</p>
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
