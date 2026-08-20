import GlassCard from '../../components/Layout/GlassEffect'
import { Typography } from '../../styles/Font'
import { Colors } from '../../styles/Color'

const RecentActivity = ({ data }) => {

    const dotColor = {
        interview: {
            backgroundColor: "#C0C1FF",
        },
        resume: {
            backgroundColor: "#4CD7F6",
        },
        skillGap: {
            backgroundColor: "#FFB783",
        },
        profile: {
            backgroundColor: "#4CD7F6",
        },
    }

    return (
        <GlassCard>

            <div className='flex flex-col gap-6'>
                <p className={`${Typography.heading}`} style={{ color: Colors.textbody }}>Recent Activity</p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10'>
                    {
                        data.map((activity) => {
                            return (
                                <div key={activity.id} className='flex flex-row gap-2 items-center'>
                                    <div className='w-[8px] h-[8px] rounded-full' style={dotColor[activity.type]} />
                                    <div className='flex flex-col gap-0'>
                                        <p className={`text-[14px] font-medium`} style={{ color: Colors.textbody }}>{activity.title}</p>
                                        <p className={`text-[12px] font-normal`} style={{ color: Colors.text }}>{activity.time}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>

        </GlassCard>
    )
}

export default RecentActivity
