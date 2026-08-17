import FeturedData from "./FeaturedData";
import { Colors } from "../../../styles/Color";
import GlassCard from "../../../components/Layout/GlassEffect";
import { Typography } from "../../../styles/Font";

const FeaturedCard = ({ Features, limit, className = "" }) => {

    const Data = Features.slice(0, limit);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
            {
                Data.map((feature) => {
                    return (
                        <GlassCard key={feature.id} padding="p-6" className={`h-full ${className}`}>
                            <div className="flex flex-col gap-[15px]">
                                <img src={feature.icon} alt="" className="h-[48px] w-[48px]" />
                                <p className={`${Typography.subheading}`} style={{ color: Colors.textbody }}>{feature.title}</p>
                                <p className={`${Typography.body}`} style={{ color: Colors.text }}>{feature.body}</p>
                            </div>
                        </GlassCard>
                    )
                })
            }
        </div>
    )
}

export default FeaturedCard

// {
//     isOpen ? (
//         <div className="flex flex-col gap-4">
//             <div className="flex flex-row items-center justify-between">
//                 <p className={`${Typography.subheading}`} style={{ color: Colors.textbody }}>{card.question}</p>
//                 <img src={arrowUp} alt="" onClick={() => setIsOpen(!isOpen)} />
//             </div>
//             <div className="border border-white/20 w-full">
//                 <p className={`${Typography.body}`} style={{ color: Colors.textbody }}>{card.answer}</p>
//             </div>
//         </div>
//     ) : (
//         <div className="flex flex-row items-center justify-between">
//             <p className={`${Typography.subheading}`} style={{ color: Colors.textbody }}>{card.question}</p>
//             <img src={arrowDown} alt="" onClick={() => setIsOpen(!isOpen)} />
//         </div>
//     )
// }