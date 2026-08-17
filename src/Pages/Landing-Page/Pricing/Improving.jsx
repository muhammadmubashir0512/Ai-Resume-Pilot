import { Colors } from '../../../styles/Color'
import { Typography } from '../../../styles/Font'
import Button from '../../../components/Button'
import GlassCard from '../../../components/Layout/GlassEffect'
import Arrow from "../../../assets/Arrow.svg"

const Improving = () => {
    return (
        <div className='w-full  px-[24px] lg:px-[40px]'>
            <GlassCard padding='p-12'>
                <div className='flex flex-col gap-4 md:gap-5 justify-center items-center'>
                    <p className={`${Typography.subheading}`} style={{ color: Colors.textbody }}>Start improving your resume today</p>
                    <p className={`${Typography.body} text-center`} style={{ color: Colors.text }}>Join thousands of professionals who have successfully landed their dream roles using our AI-driven insights.</p>
                    <div>
                        <Button variant="secondary" size="normal" className="cursor-pointer">Start Free Analysis <img src={Arrow} alt="" className='h-[16px] w-[16px]' /></Button>
                    </div>

                </div>
            </GlassCard>
        </div>
    )
}

export default Improving
