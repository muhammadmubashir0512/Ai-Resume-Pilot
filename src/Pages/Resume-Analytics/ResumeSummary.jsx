import Tips from "../../assets/Tips.svg"
import GlassCard from '../../components/Layout/GlassEffect'
import { Colors } from "../../styles/Color"

const ResumeSummary = (summary) => {
    return (
        <GlassCard>
            <div className="flex flex-col gap-4">

                <div className="flx flex-row gap-2 items-center">
                    <div className="w-[4px] border-r-lg h-full" style={{ borderColor: Colors.progressCircle }} />
                    <div className="flex flex-row gap-2 items-center flex-wrap">
                        <img src={Tips} alt="" className="w-[24px] h-[24px]" />
                        <p className="text-[14px] font-semibold"
                            style={{ color: Colors.textbody }}>
                            Resume Summary
                        </p>
                    </div>
                </div>

                <p
                    className="text-[14px] font-normal"
                    style={{ color: Colors.text }}
                >
                    {summary.summary}
                </p>
            </div>
        </GlassCard>
    )
}

export default ResumeSummary
