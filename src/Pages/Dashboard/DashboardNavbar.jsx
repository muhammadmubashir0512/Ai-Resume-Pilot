import { useNavigate, useLocation } from "react-router-dom"
import { useState } from "react"
import { Colors } from "../../styles/Color"
import { Typography } from "../../styles/Font"
import Hamburger from "../../assets/Hamburger.svg"
import Cross from "../../assets/Cross.svg"
import profile from "../../assets/profile.svg"

const navItem = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Resume Analyzer", path: "/Resume-Analyzer" },
    { label: "Mock Interview", path: "/Mock-Interview" },
    { label: "Account Setting", path: "/Account-Setting" },
]

const DashboardNavbar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [userProfile, setUserProfile] = useState(null)

    const handleNav = (path) => {
        navigate(path)
        setIsMenuOpen(false)
    }

    return (
        <div className="w-full px-0 sm:px-6 md:px-10 lg:px-24 xl:px-40">
            <div
                className="sticky top-4 z-50 w-full rounded-2xl lg:rounded-full py-3 px-4 md:px-6 lg:px-8 flex flex-row justify-between items-center border border-white/10"
                style={{ backgroundColor: Colors.primary }}
            >
                {/* Logo */}
                <div className="flex flex-row gap-3 items-center cursor-pointer" onClick={() => navigate("/dashboard")}>
                    <h1 className={`text-[#DAE2FD] font-semibold ${Typography.responsiveHeading}`}>ResumePilot</h1>
                </div>

                {/* Nav Items */}
                <div className="hidden lg:flex flex-row gap-6 xl:gap-[28px] items-center">
                    {navItem.map((item) => {
                        const isActive = location.pathname === item.path
                        return (
                            <div
                                key={item.path}
                                onClick={() => handleNav(item.path)}
                                className={`relative flex flex-col gap-2 items-center cursor-pointer whitespace-nowrap ${isActive ? "text-[#C0C1FF] font-bold text-sm xl:text-[16px]" : "text-[#C7C4D7] text-sm xl:text-[16px] font-normal"}`}
                            >
                                <span className="mb-2">{item.label}</span>

                                {isActive && (
                                    <div className="absolute bottom-0 -translate-y-1/2 w-full h-[3px] rounded-lg" style={{ backgroundColor: Colors.light }} />
                                )}
                            </div>
                        )
                    })}
                </div>

                {/* Profile Icon */}
                <div className="w-8 h-8 hidden lg:block flex-shrink-0">
                    <img src={userProfile || profile} alt="" className="w-full h-full rounded-full object-cover" />
                </div>

                {/* Hamburger */}
                <img
                    src={Hamburger}
                    alt=""
                    className="h-6 w-6 lg:hidden cursor-pointer"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                />

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div
                        className="absolute z-50 transition-all duration-300 ease-in-out top-0 left-0 flex flex-col gap-7 items-center justify-between w-full rounded-2xl border border-white/10 py-5 lg:hidden"
                        style={{ backgroundColor: Colors.primary }}
                    >
                        {/* Close Button */}
                        <div className="absolute right-6 top-4">
                            <img
                                src={Cross}
                                alt=""
                                className="h-6 w-6 cursor-pointer"
                                style={{ filter: "invert(1)" }}
                                onClick={() => setIsMenuOpen(false)}
                            />
                        </div>

                        {/* Profile Icon */}
                        <div className="w-10 h-10 mt-6">
                            <img src={userProfile || profile} alt="" className="w-full h-full rounded-full object-cover" />
                        </div>

                        {/* NavItem */}
                        <div className="flex flex-col gap-4 items-center">
                            {navItem.map((item) => {
                                const isActive = location.pathname === item.path
                                return (
                                    <div
                                        key={item.path}
                                        onClick={() => handleNav(item.path)}
                                        className={`relative flex flex-col items-center gap-2 cursor-pointer ${isActive ? "text-[#C0C1FF] font-bold text-[16px]" : "text-[#C7C4D7] text-[16px] font-normal"}`}
                                    >
                                        <span className="mb-2">{item.label}</span>

                                        {isActive && (
                                            <div className="absolute bottom-0 -translate-y-1/2 w-full h-[3px] rounded-lg" style={{ backgroundColor: Colors.light }} />
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default DashboardNavbar
