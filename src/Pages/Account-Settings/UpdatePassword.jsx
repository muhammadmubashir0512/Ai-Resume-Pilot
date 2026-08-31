import GlassCard from "../../components/Layout/GlassEffect"
import { Colors } from "../../styles/Color"
import Button from "../../components/Button"
import { useState } from "react"
import toast from "react-hot-toast"
import { post } from "../../services/api"
import password from "../../assets/password.svg"
import { Eye, EyeOff } from 'lucide-react'

const UpdatePassword = () => {

    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmNewPassword, setConfirmNewPassword] = useState("")

    const [showCurrentPassword, setShowCurrentPassword] = useState(false)
    const [showNewPassword, setShowNewPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [savingPassword, setSavingPassword] = useState(false)


    const handlePasswordUpdate = async () => {
        if (!currentPassword || !newPassword || !confirmNewPassword) {
            toast.error("Please fill all password fields")
            return
        }

        if (newPassword.length < 8) {
            toast.error("Password must be at least 8 characters long")
            return
        }

        if (newPassword !== confirmNewPassword) {
            toast.error("New password and confirm password do not match")
            return
        }

        setSavingPassword(true)
        try {
            await post("/user/updatePassword", {
                oldPassword: currentPassword,
                newPassword: newPassword,
            })
            toast.success("Password updated successfully")
            setCurrentPassword("")
            setNewPassword("")
            setConfirmNewPassword("")
        } catch (error) {
            toast.error(error.message || "Something went wrong")
        } finally {
            setSavingPassword(false)
        }
    }

    return (
        <GlassCard>

            <div className="flex flex-col gap-8">

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


                <div className="flex flex-col gap-6">

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

                    {newPassword && newPassword.length < 8 && (
                        <p className="text-[10px] -mt-3 sm:ml-[132px]" style={{ color: "#FFAAA8" }}>
                            ⓘ Password must be at least 8 characters long.
                        </p>
                    )}

                    {newPassword && confirmNewPassword && newPassword !== confirmNewPassword && (
                        <p className="text-[10px] -mt-3 sm:ml-[132px]" style={{ color: "#FFAAA8" }}>
                            ⓘ Passwords do not match.
                        </p>
                    )}

                </div>


                <div className="flex justify-end">

                    <Button
                        variant="secondary"
                        size="normal"
                        className="cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                        onClick={handlePasswordUpdate}
                        disabled={savingPassword}
                    >
                        {savingPassword ? "Updating..." : "Update Password"}
                    </Button>

                </div>

            </div>

        </GlassCard>
    )
}

export default UpdatePassword
