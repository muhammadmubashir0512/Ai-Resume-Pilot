import { Typography } from '../../styles/Font'
import { Colors } from '../../styles/Color'
import PageWrapper from '../../components/Layout/PageWrapper'
import DashboardNavbar from '../Dashboard/DashboardNavbar'
import prof from "../../assets/prof.svg"
import GlassCard from '../../components/Layout/GlassEffect'
import { useEffect, useState } from 'react'
import profile from "../../assets/profile.svg"
import Button from '../../components/Button'
import logout from "../../assets/logout.svg"
import cross from "../../assets/Cross.svg"
import Upload from "../../assets/upload.svg"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { get, put, post } from '../../services/api'
import UpdatePassword from './UpdatePassword'
import LogoutModal from './LogoutModal'

const Account = () => {

    const navigate = useNavigate()

    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [profileImg, setProfileImg] = useState(null)
    const [profileFile, setProfileFile] = useState(null)



    const [isOpen, setIsOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [savingProfile, setSavingProfile] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)

                const response = await get("/user/me")

                setFullname(response.data.fullName)
                setEmail(response.data.email)
                setProfileImg(response.data.profileImg)

            } catch (error) {
                console.log("Error", error)
                toast.error(error.message || "Something went wrong")
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    const handleProfileChange = (e) => {
        const file = e.target.files?.[0]

        if (file) {
            setProfileImg(URL.createObjectURL(file))
            setProfileFile(file)
        }
    }

    const handleLogoutClick = () => {
        setIsOpen(true)
    }

    const closeLogoutModal = () => {
        setIsOpen(false)
    }

    const updateData = async () => {
        const formdata = new FormData()
        formdata.append("fullName", fullname)

        if (profileFile) {
            formdata.append("profileImg", profileFile)
        }

        setSavingProfile(true)
        try {
            await put("/user/profile", formdata)
            toast.success("Profile Updated Successfully")
        } catch (error) {
            toast.error(error.message || "Something went wrong")
        } finally {
            setSavingProfile(false)
        }
    }



    return (
        <PageWrapper>

            <DashboardNavbar />

            <div className="px-0 sm:px-6 md:px-16 lg:px-28 xl:px-40 space-y-8 md:space-y-10">

                <div className="flex flex-col gap-2 justify-center items-center text-center">

                    <p
                        className={`${Typography.responsiveHeading}`}
                        style={{ color: Colors.textbody }}
                    >
                        Account Settings
                    </p>

                    <p
                        className={`${Typography.small} md:${Typography.body} max-w-[572px]`}
                        style={{ color: Colors.text }}
                    >
                        Manage your personal information and security preferences.
                    </p>

                </div>


                <GlassCard>

                    <div className="flex flex-col gap-8">

                        <div className="flex flex-row gap-4 items-center">

                            <div
                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg p-3 sm:p-4 flex items-center justify-center"
                                style={{
                                    backgroundColor: `${Colors.light}30`
                                }}
                            >
                                <img src={prof} alt="" className="w-full h-full" />
                            </div>

                            <p
                                className="text-[18px] sm:text-[20px] md:text-[24px] font-semibold"
                                style={{ color: Colors.textbody }}
                            >
                                Profile Information
                            </p>

                        </div>


                        <div className="flex flex-col gap-6 md:gap-7">

                            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">

                                <label
                                    className="sm:w-[100px] shrink-0 text-[10px] font-semibold uppercase tracking-wide"
                                    style={{ color: Colors.text }}
                                >
                                    Profile Photo
                                </label>

                                <div className="flex items-center gap-4">

                                    <div
                                        className="w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] rounded-full border-2 overflow-hidden flex items-center justify-center"
                                        style={{
                                            borderColor: `${Colors.light}30`
                                        }}
                                    >
                                        <img
                                            src={profileImg || profile}
                                            alt="Profile"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <label
                                        htmlFor="profile-upload"
                                        className="flex items-center gap-2 px-3 py-2 rounded-md border border-white/10 bg-white/5 text-[11px] cursor-pointer transition-all duration-200 hover:bg-white/10"
                                        style={{ color: Colors.textbody }}
                                    >
                                        <img src={Upload} alt="" className='w-[12px] h-[12px]' />
                                        Update Photo
                                    </label>

                                    <input
                                        id="profile-upload"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleProfileChange}
                                        className="hidden"
                                    />

                                </div>

                            </div>


                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">

                                <label
                                    className="sm:w-[100px] shrink-0 text-[10px] font-semibold uppercase tracking-wide"
                                    style={{ color: Colors.text }}
                                >
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    value={fullname}
                                    onChange={(e) => setFullname(e.target.value)}
                                    placeholder="John Doe"
                                    className="
                                        w-full
                                        text-white
                                        px-4
                                        py-2.5
                                        rounded-lg
                                        text-sm
                                        bg-white/5
                                        border border-white/10
                                        placeholder:text-white/30
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-[#4CD7F6]/50
                                        focus:border-transparent
                                        transition-all
                                        duration-200
                                    "
                                />

                            </div>


                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">

                                <label
                                    className="sm:w-[100px] shrink-0 text-[10px] font-semibold uppercase tracking-wide"
                                    style={{ color: Colors.text }}
                                >
                                    Email Address
                                </label>

                                <div className="w-full">

                                    <input
                                        type="email"
                                        value={email}
                                        readOnly
                                        className="
                                            w-full
                                            text-white/70
                                            px-4
                                            py-2.5
                                            rounded-lg
                                            text-sm
                                            bg-[#060E20]/60
                                            border border-white/5
                                            cursor-not-allowed
                                            focus:outline-none
                                        "
                                    />

                                    <p
                                        className="text-[10px] italic mt-1"
                                        style={{ color: Colors.text }}
                                    >
                                        Email cannot be changed directly. Contact support for assistance.
                                    </p>

                                </div>

                            </div>

                        </div>


                        <div className="flex justify-end">

                            <Button
                                variant="secondary"
                                size="normal"
                                className="cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                                onClick={updateData}
                                disabled={savingProfile}
                            >
                                {savingProfile ? "Saving..." : "Save Changes"}
                            </Button>

                        </div>

                    </div>

                </GlassCard>

                <UpdatePassword />


                <GlassCard>

                    <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 justify-between items-start sm:items-center">

                        <div className="flex flex-col gap-1">

                            <p
                                className="text-[16px] font-semibold"
                                style={{ color: "#FFAAA8" }}
                            >
                                Logout
                            </p>

                            <p
                                className={`${Typography.small}`}
                                style={{ color: Colors.text }}
                            >
                                Sign out of your ResumePilot account securely.
                            </p>

                        </div>

                        <Button
                            variant="glass"
                            size="normal"
                            className="cursor-pointer min-w-[90px]"
                            onClick={() => handleLogoutClick()}
                        >
                            <img src={logout} alt="" className='w-[14px] h-[14px]' />
                            Logout
                        </Button>

                    </div>

                </GlassCard>

            </div>
            <LogoutModal
                isOpen={isOpen}
                onClose={closeLogoutModal}
                loading={loading}
            />

        </PageWrapper>
    )
}

export default Account
