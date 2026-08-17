import { useNavigate, useLocation } from "react-router-dom"
import { useState } from "react"
import { Colors } from "../../styles/Color"
import Logo from "../../assets/Logo.png"
import { Typography } from "../../styles/Font"
import Button from "../Button"
import Hamburger from "../../assets/Hamburger.svg"
import Cross from "../../assets/Cross.svg"

const navItem = [
    { label: "Home", path: "/" },
    { label: "Features", path: "/features" },
    { label: "Pricing", path: "/pricing" },
    { label: "About", path: "/about" },
]

const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleNav = (path) => {
        navigate(path)
    }

    return (
        <div className="fixed top-0 z-50 w-full py-[16px] px-[24px] lg:py-[20px] lg:px-[40px] flex flex-row justify-between items-center border border-b-white/10" style={{ backgroundColor: Colors.primary }}>
            {/* Logo */}
            <div className="flex flex-row gap-3 items-center cursor-pointer" onClick={() => navigate("/")}>
                <img src={Logo} alt="Logo" className="h-6 w-6" />
                <h1 className={`text-[#DAE2FD] font-semibold ${Typography.responsiveHeading}`}>ResumePilot</h1>
            </div>

            {/* Nav Items */}
            <div className="hidden lg:flex flex flex-row gap-[28px] items-center">
                {
                    navItem.map((item) => {
                        const isActive = location.pathname === item.path
                        return (
                            <div
                                key={item.path}
                                onClick={() => handleNav(item.path)}
                                className={` relative flex flex-col gap-2 items-center cursor-pointer ${isActive ? "text-[#C0C1FF] font-bold text-[16px]" : "text-[#C7C4D7] text-[16px] font-normal"}`}
                            >
                                <span className="mb-2 hidden lg:block">{item.label}</span>

                                {isActive && (
                                    <div className="absolute bottom-0 -translate-y-1/2 w-full h-[3px] rounded-lg" style={{ backgroundColor: Colors.light }} />
                                )}
                            </div>
                        )
                    })
                }
            </div>

            {/* Get Started */}
            <Button variant="light" size="md" rounded="rounded-full" className="hidden lg:flex cursor-pointer">
                Get Started
            </Button>

            {/* Hamburger */}
            <img src={Hamburger} alt="" className="h-[24px] w-[24px] lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} />

            {
                isMenuOpen && (
                    <div className="absolute z-50 transition-all duration-400 ease-in-out top-0 left-0 flex flex-col gap-[28px] flex-items-center items-center justify-between w-full border border-b-white/10 py-[20px]" style={{ backgroundColor: Colors.primary }}>

                        {/* Close Opened Modal */}
                        <div className="absolute right-[24px] top-[16px]">
                            <img src={Cross} alt="" className="h-[24px] w-[24px] lg:hidden" style={{ filter: "invert(1)" }} onClick={() => setIsMenuOpen(!isMenuOpen)} />
                        </div>

                        {/* NavItem */}
                        <div className="flex flex-col gap-[16px] items-center">
                            {
                                navItem.map((item) => {
                                    const isActive = location.pathname === item.path
                                    return (
                                        <div
                                            key={item.path}
                                            onClick={() => {
                                                handleNav(item.path)
                                                setIsMenuOpen(false)
                                            }}
                                            className={` relative flex flex-col flex-items-center gap-2 items-center cursor-pointer ${isActive ? "text-[#C0C1FF] font-bold text-[16px]" : "text-[#C7C4D7] text-[16px] font-normal"}`}
                                        >
                                            <span className="mb-2">{item.label}</span>

                                            {isActive && (
                                                <div className="absolute bottom-0 -translate-y-1/2 w-full h-[3px] rounded-lg" style={{ backgroundColor: Colors.light }} />
                                            )}
                                        </div>
                                    )
                                })
                            }
                        </div>

                        {/* Get Started */}
                        <Button variant="light" size="md" rounded="rounded-full" className="cursor-pointer">
                            Get Started
                        </Button>

                    </div>

                )
            }

        </div>
    )
}

export default Navbar
