import GlassCard from '../../components/Layout/GlassEffect'
import Button from '../../components/Button'
import { Typography } from '../../styles/Font'
import { Colors } from '../../styles/Color'
import logout from "../../assets/logout.svg"
import cross from "../../assets/Cross.svg"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { post } from '../../services/api'
import toast from 'react-hot-toast'

const LogoutModal = ({ isOpen, onClose }) => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    if (!isOpen) return null

    const handleLogout = async () => {
        try {
            setLoading(true)
            const response = await post("/auth/logout", {})

            toast.success(response.message || "Successfully Logout")

            localStorage.removeItem("accessToken")

            navigate("/login")

        } catch (error) {
            toast.error(error.message || "Something went wrong")
        } finally {
            setLoading(false)
        }
    }



    return (
        <div className="fixed inset-0 z-50 bg-[#0B1326]/60 flex items-center justify-center px-4">

            <div
                className="absolute inset-0 bg-[#0B1326]/60 backdrop-blur-sm"
                onClick={onClose}
            />

            <GlassCard className="relative w-full max-w-[420px]">

                <div className="flex flex-col items-center gap-6 sm:gap-7">

                    <div className="flex w-full justify-end">
                        <button
                            type="button"
                            onClick={onClose}
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

                    <div className="flex items-center justify-center p-5 rounded-xl bg-[#222A3D] border border-white/10">
                        <img
                            src={logout}
                            alt="Logout"
                            className="w-6 h-6"
                        />
                    </div>

                    <p
                        className={`${Typography.heading} text-center`}
                        style={{ color: Colors.textbody }}
                    >
                        Log out?
                    </p>

                    <p
                        className={`${Typography.body} text-center max-w-[340px]`}
                        style={{ color: Colors.text }}
                    >
                        Are you sure you want to log out of your account?
                        Your current resume progress has been safely synced.
                    </p>

                    <div className="flex flex-col gap-4 w-full">

                        <Button
                            variant="secondary"
                            size="normal"
                            className="w-full justify-center cursor-pointer"
                            onClick={() => handleLogout()}
                            disabled={loading}
                        >
                            {loading ? "Logging Out..." : "Log Out"}
                        </Button>

                        <Button
                            variant="glass"
                            size="normal"
                            className="w-full justify-center cursor-pointer"
                            onClick={onClose}
                        >
                            Cancel
                        </Button>

                    </div>

                </div>

            </GlassCard>

        </div>
    )
}

export default LogoutModal
