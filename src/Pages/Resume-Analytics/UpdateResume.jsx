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
                <div className='flex flex-row gap-6 pt-6'>
                    <Button variant="secondary" rounded="rounded-full" size="normal" className="shadow-sm shadow-[#4CD7F6]/30 cursor-pointer" onClick={() => navigate("/resume-Analyzer")}>
                        Update & Upload Resume
                    </Button>
                    <Button variant="glass" rounded="rounded-full" size="normal" className="cursor-pointer" onClick={() => navigate("/Mock-Interview")}>
                        Start Mock Interview
                    </Button>
                </div>
            </div>
        </GlassCard>
    )
}

export default UpdateResume
