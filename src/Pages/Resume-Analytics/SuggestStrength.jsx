import GlassCard from "../../components/Layout/GlassEffect"
import { Typography } from "../../styles/Font"
import { Colors } from "../../styles/Color"
import suggestion from "../../assets/suggestion.svg"
import strength from "../../assets/strength.svg"
import checked from "../../assets/correct.svg"
import confirm from "../../assets/Checked.svg"
import missing from "../../assets/danger.svg"

const SuggestStrength = ({ data }) => {

    return (
        <div className="flex flex-col gap-12">

            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6">

                {/* ATS Analysis */}
                <GlassCard>
                    <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">

                        {/* ATS Score */}
                        <div
                            className={`${Typography.heading} flex-shrink-0 w-[100px] h-[100px] shadow-lg shadow-[#6366F1]/50 content-center text-center rounded-full border-[6px]`}
                            style={{ borderColor: Colors.secondary }}
                        >
                            <p
                                className="text-[24px] font-bold "
                                style={{ color: Colors.textbody }}
                            >
                                {data.atsScore}%
                            </p>
                            <p className="text-[11px] md:text[11px] text-wrap font-semibold" style={{ color: Colors.secondary }}>Overall ATS</p>
                        </div>

                        <div className="flex flex-col gap-8 w-full">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                                {/* Keyword Match */}
                                <div className="flex flex-col gap-1">

                                    <p
                                        className="text-[14px] font-semibold"
                                        style={{ color: Colors.textbody }}
                                    >
                                        KEYWORD MATCH
                                    </p>

                                    <p
                                        className="text-[30px] font-bold"
                                        style={{ color: Colors.textbody }}
                                    >
                                        {data.keywordMatch}%
                                    </p>

                                    <div className="h-[6px] w-full rounded-full bg-[#171F33]">
                                        <div
                                            className="h-[6px] rounded-full transition-all duration-500"
                                            style={{
                                                width: `${data.keywordMatch}%`,
                                                backgroundColor: Colors.light
                                            }}
                                        />
                                    </div>

                                </div>

                                {/* Formatting */}
                                <div className="flex flex-col gap-1">

                                    <p
                                        className="text-[14px] font-semibold"
                                        style={{ color: Colors.textbody }}
                                    >
                                        FORMATTING
                                    </p>

                                    <p
                                        className="text-[30px] font-bold"
                                        style={{ color: Colors.textbody }}
                                    >
                                        {data.formatting}
                                    </p>

                                    <div className="h-[6px] w-full rounded-full bg-[#171F33]">
                                        <div
                                            className="h-[6px] rounded-full transition-all duration-500"
                                            style={{
                                                width: `${data.formattingScore}%`,
                                                backgroundColor: Colors.light
                                            }}
                                        />
                                    </div>

                                </div>

                            </div>

                            {/* Suggestion */}
                            <GlassCard>
                                <div className="flex flex-row gap-2">

                                    <img
                                        src={suggestion}
                                        alt=""
                                        className="w-[22px] h-[22px] flex-shrink-0"
                                    />

                                    <p
                                        className={`${Typography.body}`}
                                        style={{ color: Colors.text }}
                                    >
                                        {data.suggestion}
                                    </p>

                                </div>
                            </GlassCard>

                        </div>

                    </div>
                </GlassCard>

                {/* Key Strengths */}
                <GlassCard>

                    <div className="flex flex-col gap-6">

                        <div className="flex flex-row gap-2 items-center">

                            <img
                                src={strength}
                                alt=""
                                className="w-[20px] h-[20px]"
                            />

                            <p
                                className={`${Typography.body}`}
                                style={{ color: Colors.textbody }}
                            >
                                Key Strengths
                            </p>

                        </div>

                        {/* Strength Points */}
                        <div className="flex flex-col gap-4">

                            {data.strengths.map((point) => (
                                <div
                                    key={point.id}
                                    className="flex flex-row gap-2 items-center"
                                >
                                    <img
                                        src={checked}
                                        alt=""
                                        className="w-[11px] h-[11px]"
                                    />

                                    <p
                                        className={`${Typography.small}`}
                                        style={{ color: Colors.text }}
                                    >
                                        {point}
                                    </p>
                                </div>
                            ))}

                        </div>

                        {/* Match Identity */}
                        <div className="pt-6 border-t border-white/10">

                            <div className="flex flex-row gap-4 items-center">

                                <div className="flex flex-row">

                                    <div className="h-[32px] w-[32px] rounded-full bg-[#171F33] border-2 border-[#0B1326] text-center content-center">
                                        <p className="text-[10px] font-bold text-white">
                                            {data.matchIdentity.first}
                                        </p>
                                    </div>

                                    <div className="h-[32px] w-[32px] -ml-2 rounded-full bg-[#C0C1FF] border-2 border-[#0B1326] text-center content-center">
                                        <p className="text-[10px] font-bold text-[#1000A9]">
                                            {data.matchIdentity.second}
                                        </p>
                                    </div>

                                </div>

                                <p
                                    className={`${Typography.small}`}
                                    style={{ color: Colors.text }}
                                >
                                    {data.matchIdentity.label}
                                </p>

                            </div>

                        </div>

                    </div>

                </GlassCard>

            </div>

            {/* Section (education, project, info, experience) Checked */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    data.content.map((con) => {

                        return (
                            <GlassCard key={con.id}>
                                <div className="flex flex-col gap-3">
                                    <div className="flex flex-row justify-between items-center">
                                        <p className={`${Typography.body}`} style={{ color: Colors.textbody }}>{con.tag}</p>
                                        {
                                            con.status === "Good" ? (
                                                <img src={confirm} alt="" className="w-[20px] h-[20px]" />
                                            ) : (
                                                <img src={missing} alt="" className="w-[20px] h-[20px]" />
                                            )
                                        }
                                    </div>
                                    <p className={`text-[13px] font-normal`} style={{ color: Colors.text }}>{con.note}</p>
                                </div>
                            </GlassCard>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default SuggestStrength
