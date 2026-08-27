import { useNavigate } from 'react-router-dom'
import GlassCard from '../../components/Layout/GlassEffect'
import { Colors } from '../../styles/Color'
import Button from '../../components/Button'

const UpdateResume = () => {

    const navigate = useNavigate()

    return (
        <GlassCard padding='p-8'>
            <div className='flex flex-col gap-[15px] justify-center items-center'>
                <p className='text-[16px] font-normal' style={{ color: Colors.textbody }}>Ready to boost your chances?</p>
                <p className='text-[14px] font-normal' style={{ color: Colors.text }}>Apply these changes to your resume and get closer to your dream role at a Fortune 500 company.</p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-6">
                    <Button
                        variant="secondary"
                        size="normal"
                        className="shadow-sm shadow-[#4CD7F6]/30 cursor-pointer w-full sm:w-auto"
                        onClick={() => navigate("/resume-Analyzer/improve")}
                    >
                        Improve Your Resume
                    </Button>

                    <Button
                        variant="glass"
                        size="normal"
                        className="cursor-pointer justify-center text-center w-full sm:w-auto"
                        onClick={() => navigate("/Mock-Interview/pricing")}
                    >
                        Back To Dashboard
                    </Button>
                </div>
            </div>
        </GlassCard>
    )
}

export default UpdateResume
