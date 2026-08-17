import { Link } from "react-router-dom"
import Logo from "../../assets/Logo.png"
import { Typography } from "../../styles/Font"
import { Colors } from "../../styles/Color"
import internet from "../../assets/internet.svg"
import share from "../../assets/share.svg"
import tag from "../../assets/tag.svg"

const footerColumns = [
    {
        title: "Product",
        links: [
            { label: "Features", path: "/features" },
            { label: "Resume Analyzer", path: "/resume-analyzer" },
            { label: "Mock Interview", path: "/mock-interview" },
            { label: "Pricing", path: "/pricing" },
        ],
    },
    {
        title: "Company",
        links: [
            { label: "About Us", path: "/about" },
            { label: "Career Blog", path: "/blog" },
            { label: "FAQ", path: "/faq" },
        ],
    },
    {
        title: "Legal",
        links: [
            { label: "Privacy", path: "/privacy" },
            { label: "Terms", path: "/terms" },
            { label: "Cookie Policy", path: "/cookie-policy" },
        ],
    },
]

const socialIcons = [
    { icon: internet, url: "https://resumepilot.ai", label: "Website" },
    { icon: share, url: "#", label: "Share" },
    { icon: tag, url: "#", label: "Tag" },
]

const Footer = () => {
    return (
        <div className="py-[24px] px-[24px] lg:py-[48px] lg:px-[40px] bg-[#060E20] space-y-12 text-white border-t border-white/10">

            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* Logo + Tagline */}
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row gap-3 items-center cursor-pointer">
                        <img src={Logo} alt="Logo" className="h-6 w-6" />
                        <h1 className={`text-[#DAE2FD] font-semibold ${Typography.responsiveHeading}`}>
                            ResumePilot
                        </h1>
                    </div>
                    <p className="text-[12px] font-normal" style={{ color: Colors.text }}>
                        Empowering the next generation of
                        <br />
                        professionals with ethical AI.
                    </p>
                </div>

                {/* Link Columns*/}
                {footerColumns.map((column) => (
                    <div key={column.title} className="flex flex-col gap-4">
                        <p className="text-[14px] font-bold" style={{ color: Colors.textbody }}>
                            {column.title}
                        </p>
                        <div className="flex flex-col gap-2 text-[14px] font-normal">
                            {column.links.map((link) => (
                                <p
                                    key={link.label}
                                    to={link.path}
                                    className="hover:text-white transition-colors duration-150 w-fit"
                                    style={{ color: Colors.text }}
                                >
                                    {link.label}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-2 items-center justify-between pt-8 border-t border-white/10">
                <p className="text-[12px] font-normal" style={{ color: Colors.text }}>
                    © 2024 ResumePilot AI. All rights reserved.
                </p>
                <div className="flex flex-row gap-[24px]">
                    {socialIcons.map((social) => (
                        <p
                            key={social.label}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            className="opacity-80 hover:opacity-100 transition-opacity duration-150 flex-shrink-0"
                        >
                            <img src={social.icon} alt={social.label} className="h-5 w-5" />
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer