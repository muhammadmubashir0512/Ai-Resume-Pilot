import { Typography } from '../../styles/Font'
import { Colors } from '../../styles/Color'
import PageWrapper from '../../components/Layout/PageWrapper'
import DashboardNavbar from '../Dashboard/DashboardNavbar'
import prof from "../../assets/prof.svg"
import password from "../../assets/password.svg"
import GlassCard from '../../components/Layout/GlassEffect'
import { useState } from 'react'
import profile from "../../assets/profile.svg"
import Button from '../../components/Button'
import { Eye, EyeOff } from 'lucide-react'
import logout from "../../assets/logout.svg"
import cross from "../../assets/Cross.svg"
import Upload from "../../assets/upload.svg"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { get } from '../../services/api'

const Account = () => {

    const navigate = useNavigate()

    const [fullname, setFullname] = useState("")
    const [profileImg, setProfileImg] = useState(null)

    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmNewPassword, setConfirmNewPassword] = useState("")

    const [showCurrentPassword, setShowCurrentPassword] = useState(false)
    const [showNewPassword, setShowNewPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const [isOpen, setIsOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleProfileChange = (e) => {
        const file = e.target.files?.[0]

        if (file) {
            setProfileImg(URL.createObjectURL(file))
        }
    }

    const handleLogoutClick = () => {
        setIsOpen(true)
    }

    const closeLogoutModal = () => {
        setIsOpen(false)
    }

    const handleLogout = async () => {
        try {
            setLoading(true)
            const response = await get("/auth/logout")


            toast.success(response.message || "Successfully Logout");

            localStorage.setItem("accessToken", "");

            navigate("/login")

        } catch (error) {
            console.log("Error", error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <PageWrapper>

            <DashboardNavbar />

            <div className="px-0 sm:px-6 md:px-16 lg:px-28 xl:px-40 space-y-8 md:space-y-10">

                {/* TITLE */}
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


                {/*  PROFILE INFORMATION */}
                <GlassCard>

                    <div className="flex flex-col gap-8">

                        {/* Card Header */}
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


                        {/* Profile Form */}
                        <div className="flex flex-col gap-6 md:gap-7">

                            {/* Profile Photo */}
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
                                        Change Photo
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


                            {/* Full Name */}
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


                            {/* Email */}
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
                                        value="alex.rivera@resumepilot.ai"
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


                        {/* Save */}
                        <div className="flex justify-end">

                            <Button
                                variant="secondary"
                                size="normal"
                                className="cursor-pointer"
                            >
                                Save Changes
                            </Button>

                        </div>

                    </div>

                </GlassCard>


                {/* SECURITY & PASSWORD */}
                <GlassCard>

                    <div className="flex flex-col gap-8">

                        {/* Header */}
                        <div className="flex flex-row gap-4 items-center">

                            <div
                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg p-3 sm:p-4 flex items-center justify-center"
                                style={{
                                    backgroundColor: `${Colors.light}30`
                                }}
                            >
                                <img
                                    src={password}
                                    alt=""
                                    className="w-full h-full"
                                />
                            </div>

                            <p
                                className="text-[18px] sm:text-[20px] md:text-[24px] font-semibold"
                                style={{ color: Colors.textbody }}
                            >
                                Security & Password
                            </p>

                        </div>


                        {/* Password Fields */}
                        <div className="flex flex-col gap-6">

                            {/* Current Password */}
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">

                                <label
                                    className="sm:w-[100px] shrink-0 text-[10px] font-semibold uppercase tracking-wide"
                                    style={{ color: Colors.text }}
                                >
                                    Current Password
                                </label>

                                <div className="relative w-full">

                                    <input
                                        type={showCurrentPassword ? "text" : "password"}
                                        value={currentPassword}
                                        onChange={(e) => setCurrentPassword(e.target.value)}
                                        placeholder="••••••••"
                                        className="
                                            w-full
                                            text-white
                                            px-4
                                            pr-11
                                            py-2.5
                                            rounded-lg
                                            text-sm
                                            bg-white/5
                                            border border-white/10
                                            placeholder:text-white/30
                                            focus:outline-none
                                            focus:ring-2
                                            focus:ring-[#4CD7F6]/50
                                        "
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                                        style={{ color: Colors.text }}
                                    >
                                        {showCurrentPassword
                                            ? <EyeOff size={15} />
                                            : <Eye size={15} />
                                        }
                                    </button>

                                </div>

                            </div>


                            {/* New Password */}
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">

                                <label
                                    className="sm:w-[100px] shrink-0 text-[10px] font-semibold uppercase tracking-wide"
                                    style={{ color: Colors.text }}
                                >
                                    New Password
                                </label>

                                <div className="relative w-full">

                                    <input
                                        type={showNewPassword ? "text" : "password"}
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        placeholder="••••••••"
                                        className="
                                            w-full
                                            text-white
                                            px-4
                                            pr-11
                                            py-2.5
                                            rounded-lg
                                            text-sm
                                            bg-white/5
                                            border border-white/10
                                            placeholder:text-white/30
                                            focus:outline-none
                                            focus:ring-2
                                            focus:ring-[#4CD7F6]/50
                                        "
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowNewPassword(!showNewPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                                        style={{ color: Colors.text }}
                                    >
                                        {showNewPassword
                                            ? <EyeOff size={15} />
                                            : <Eye size={15} />
                                        }
                                    </button>

                                </div>

                            </div>


                            {/* Confirm Password */}
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">

                                <label
                                    className="sm:w-[100px] shrink-0 text-[10px] font-semibold uppercase tracking-wide"
                                    style={{ color: Colors.text }}
                                >
                                    Confirm Password
                                </label>

                                <div className="relative w-full">

                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        value={confirmNewPassword}
                                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                                        placeholder="••••••••"
                                        className="
                                            w-full
                                            text-white
                                            px-4
                                            pr-11
                                            py-2.5
                                            rounded-lg
                                            text-sm
                                            bg-white/5
                                            border border-white/10
                                            placeholder:text-white/30
                                            focus:outline-none
                                            focus:ring-2
                                            focus:ring-[#4CD7F6]/50
                                        "
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                                        style={{ color: Colors.text }}
                                    >
                                        {showConfirmPassword
                                            ? <EyeOff size={15} />
                                            : <Eye size={15} />
                                        }
                                    </button>

                                </div>

                            </div>

                            {/* Error message */}
                            {newPassword && newPassword.length < 8 && (
                                <p className="text-[10px] -mt-3 sm:ml-[132px]" style={{ color: "#FFAAA8" }}>
                                    ⓘ Password must be at least 8 characters long.
                                </p>
                            )}

                        </div>


                        {/* Update Password */}
                        <div className="flex justify-end">

                            <Button
                                variant="secondary"
                                size="normal"
                                className="cursor-pointer"
                            >
                                Update Password
                            </Button>

                        </div>

                    </div>

                </GlassCard>


                {/* LOGOUT */}
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


            {/* logout modal */}
            {
                isOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">

                        {/* Overlay */}
                        <div
                            className="absolute inset-0 bg-[#0B1326]/60 backdrop-blur-sm"
                            onClick={closeLogoutModal}
                        />

                        {/* Modal */}
                        <GlassCard className="relative w-full max-w-[420px]">

                            <div className="flex flex-col items-center gap-6 sm:gap-7">

                                {/* Close */}
                                <div className="flex w-full justify-end">
                                    <button
                                        type="button"
                                        onClick={closeLogoutModal}
                                        className="cursor-pointer transition-opacity duration-200 hover:opacity-70"
                                    >
                                        <img
                                            src={cross}
                                            alt="Close"
                                            className="w-6 h-6 sm:w-7 sm:h-7"
                                            style={{ filter: "invert(1)" }}
                                        />
                                    </button>
                                </div>

                                {/* Logout Icon */}
                                <div className="flex items-center justify-center p-5 rounded-xl bg-[#222A3D] border border-white/10">
                                    <img
                                        src={logout}
                                        alt="Logout"
                                        className="w-6 h-6"
                                    />
                                </div>

                                {/* Title */}
                                <p
                                    className={`${Typography.heading} text-center`}
                                    style={{ color: Colors.textbody }}
                                >
                                    Log out?
                                </p>

                                {/* Description */}
                                <p
                                    className={`${Typography.body} text-center max-w-[340px]`}
                                    style={{ color: Colors.text }}
                                >
                                    Are you sure you want to log out of your account?
                                    Your current resume progress has been safely synced.
                                </p>

                                {/* Actions */}
                                <div className="flex flex-col gap-4 w-full">

                                    <Button
                                        variant="secondary"
                                        size="normal"
                                        className="w-full justify-center cursor-pointer"
                                        onClick={handleLogout}
                                        disabled={loading}
                                    >
                                        {loading ? "Logging Out..." : "Log Out"}
                                    </Button>

                                    <Button
                                        variant="glass"
                                        size="normal"
                                        className="w-full justify-center cursor-pointer"
                                        onClick={closeLogoutModal}
                                    >
                                        Cancel
                                    </Button>

                                </div>

                            </div>

                        </GlassCard>

                    </div>
                )
            }


        </PageWrapper>
    )
}

export default Account
