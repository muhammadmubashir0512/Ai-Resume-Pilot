import GlassCard from "../../components/Layout/GlassEffect"
import { Typography } from "../../styles/Font"
import { Colors } from "../../styles/Color"

const AnalysisImprovement = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      {/* Keyword match */}
      <GlassCard>
        <div className="flex flex-col gap-5 sm:gap-6 md:gap-8">

          <p
            className={`${Typography.body}`}
            style={{ color: Colors.textbody }}
          >
            Keyword Analysis
          </p>

          <div className="flex flex-col gap-8 sm:gap-10 md:gap-12">

            {/* Found Keywords */}
            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">

              <div className="flex flex-row justify-between items-center gap-3">

                <p
                  className="text-[12px] sm:text-[13px] md:text-[14px] font-semibold"
                  style={{ color: Colors.light }}
                >
                  FOUND KEYWORDS
                </p>

                <p
                  className={`${Typography.small} text-xs sm:text-sm whitespace-nowrap`}
                  style={{ color: Colors.text }}
                >
                  {data.foundKeywords.total} Total
                </p>

              </div>

              <div className="flex flex-row gap-2.5 sm:gap-3 md:gap-4 flex-wrap">

                {data.foundKeywords.keywords.map((keyword) => {
                  return (
                    <GlassCard
                      key={keyword}
                      padding="p-0"
                      rounded="rounded-full"
                    >
                      <div
                        className="text-[13px] sm:text-[14px] md:text-[16px] font-medium py-1.5 sm:py-1 px-3 sm:px-4"
                        style={{ color: Colors.light }}
                      >
                        {keyword}
                      </div>
                    </GlassCard>
                  )
                })}

              </div>
            </div>

            {/* Missing Keywords */}
            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">

              <div className="flex flex-row justify-between items-center gap-3">

                <p
                  className="text-[12px] sm:text-[13px] md:text-[14px] font-semibold"
                  style={{ color: Colors.light }}
                >
                  MISSING KEYWORDS
                </p>

                <p
                  className={`${Typography.small} text-xs sm:text-sm whitespace-nowrap`}
                  style={{ color: Colors.text }}
                >
                  {data.missingKeywords.requiredMatch}
                </p>

              </div>

              <div className="flex flex-row gap-2.5 sm:gap-3 md:gap-4 flex-wrap">

                {data.missingKeywords.keywords.map((keyword) => {
                  return (
                    <div
                      key={keyword}
                      className="
                                    text-[13px] sm:text-[14px] md:text-[16px]
                                    rounded-full
                                    border border-[#4CD7F6]
                                    font-medium
                                    py-1.5 sm:py-1
                                    px-3 sm:px-4
                                    bg-[#4CD7F6]/10
                                    text-[#4CD7F6]
                                "
                    >
                      {keyword}
                    </div>
                  )
                })}

              </div>
            </div>

          </div>
        </div>
      </GlassCard>

      {/* Improvements points */}
      <GlassCard>
        <div className="flex flex-col gap-5 sm:gap-6 md:gap-8">

          <p
            className={`${Typography.body}`}
            style={{ color: Colors.textbody }}
          >
            Top Improvements
          </p>

          <div className="flex flex-col gap-6 sm:gap-7 md:gap-8">
            {data.topImprovements.map((improvement) => {
              return (
                <div
                  key={improvement.id}
                  className="flex flex-row gap-3 sm:gap-4 items-start"
                >

                  {/* Number */}
                  <div
                    className="
                                flex-shrink-0
                                flex items-center justify-center
                                text-xs sm:text-sm
                                font-bold
                                h-7 w-7
                                sm:h-8 sm:w-8
                                rounded-full
                                bg-[#C0C1FF]/40
                            "
                    style={{ color: Colors.textbody }}
                  >
                    {improvement.id}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-1 min-w-0">

                    <p
                      className="
                                    text-[15px]
                                    sm:text-[16px]
                                    md:text-[18px]
                                    font-semibold
                                    leading-snug
                                "
                      style={{ color: Colors.textbody }}
                    >
                      {improvement.title}
                    </p>

                    <p
                      className={`
                                    ${Typography.body}
                                    text-sm sm:text-base
                                    leading-relaxed
                                `}
                      style={{ color: Colors.text }}
                    >
                      {improvement.description}
                    </p>

                  </div>

                </div>
              )
            })}
          </div>

        </div>
      </GlassCard>

    </div>
  )
}

export default AnalysisImprovement
