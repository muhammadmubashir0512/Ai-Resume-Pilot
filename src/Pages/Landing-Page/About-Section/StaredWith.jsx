import { Colors } from '../../../styles/Color'
import { Typography } from '../../../styles/Font'
import Button from '../../../components/Button'
import GlassCard from '../../../components/Layout/GlassEffect'

const Started = () => {
    return (
        <div className='w-full px-5 md:px-45'>
            <GlassCard padding='p-8'>
                <div className='flex flex-col gap-4 md:gap-5 justify-center items-center'>
                    <p className={`${Typography.subheading} text-center`} style={{ color: Colors.textbody }}>Join thousands improving their job search with AI</p>
                    <div>
                        <Button rounded="rounded-full" variant="secondary" size="normal" className="cursor-pointer">Get Started</Button>
                    </div>

                </div>
            </GlassCard>
        </div>
    )
}

export default Started
