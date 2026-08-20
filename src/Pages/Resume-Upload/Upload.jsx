import { useRef } from 'react'
import GlassCard from '../../components/Layout/GlassEffect'
import uploadResume from "../../assets/uploadResume.svg"
import { Typography } from '../../styles/Font'
import { Colors } from '../../styles/Color'
import Button from '../../components/Button'
import { X, FileText } from 'lucide-react'

const Upload = ({ resume, onResumeSelect }) => {

    const fileInputRef = useRef(null)

    const handleFileChange = (e) => {
        const file = e.target.files?.[0]

        if (!file) return

        // File size validation
        if (file.size > 5 * 1024 * 1024) {
            alert("File size must be less than 5MB")
            return
        }

        // File type validation
        const allowedTypes = [
            "application/pdf",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        ]

        if (!allowedTypes.includes(file.type)) {
            alert("Only PDF and DOCX files are allowed")
            return
        }


        onResumeSelect(file)
    }

    const handleSelectFile = () => {
        fileInputRef.current?.click()
    }

    const handleRemoveFile = () => {

        if (fileInputRef.current) {
            fileInputRef.current.value = ""
        }

        onResumeSelect(null)
    }

    return (
        <GlassCard padding="p-0">

            <div className="p-3 sm:p-4 md:p-6">

                {/* File Input */}
                <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                />

                {
                    !resume ? (

                        /* Upload State */
                        <div className="
                            flex flex-col
                            gap-5 sm:gap-6 md:gap-7
                            justify-center items-center
                            text-center
                            border-2 rounded-2xl
                            border-[#6366F1]
                            p-6 sm:p-8 md:p-10 lg:p-12
                            min-h-[280px]
                            sm:min-h-[300px]
                            md:min-h-[320px]
                        ">

                            {/* Upload Icon */}
                            <img
                                src={uploadResume}
                                alt="Upload resume"
                                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
                            />

                            {/* Text */}
                            <div className="flex flex-col gap-2">

                                <p
                                    className={`${Typography.heading} text-base sm:text-lg md:text-xl`}
                                    style={{ color: Colors.textbody }}
                                >
                                    Upload your file here
                                </p>

                                <p
                                    className={`${Typography.body} text-xs sm:text-sm md:text-base`}
                                    style={{ color: Colors.text }}
                                >
                                    Limit 5MB per file • PDF, DOCX
                                </p>

                            </div>

                            {/* Select File */}
                            <Button
                                variant="secondary"
                                className="cursor-pointer"
                                onClick={handleSelectFile}
                            >
                                Select File
                            </Button>

                        </div>

                    ) : (

                        /* Uploaded File */
                        <div className="
                            flex flex-col
                            items-center
                            justify-between
                            gap-4
                            border-2
                            rounded-2xl
                            border-[#4CD7F6]/30
                            bg-[#4CD7F6]/5
                            p-4 sm:p-8
                        ">

                            {/* Remove Button */}
                            <div className='w-full justify-start'>
                                <button
                                    type="button"
                                    onClick={handleRemoveFile}
                                    className="
                                    flex-shrink-0
                                    w-8 h-8
                                    rounded-full
                                    flex items-center justify-center
                                    bg-[#4CD7F6]/10
                                    hover:bg-[#4CD7F6]/20
                                    transition-colors
                                    cursor-pointer
                                "
                                >
                                    <X
                                        size={18}
                                        style={{ color: Colors.progressCircle }}
                                    />
                                </button>
                            </div>

                            {/* File Detail */}
                            <div className="flex flex-col items-center gap-3 md:gap-8 min-w-0">

                                <div className="
                                    flex-shrink-0
                                    w-12 md:w-20 h-12 md:h-20
                                    rounded-lg
                                    flex items-center justify-center
                                    bg-[#4CD7F6]/10
                                ">
                                    <FileText
                                        size={28}
                                        style={{ color: Colors.progressCircle }}
                                    />
                                </div>

                                <div className="flex flex-col items-center gap-2 md:gap-5 min-w-0">

                                    <p
                                        className="text-sm sm:text-base font-semibold truncate text-wrap text-center"
                                        style={{ color: Colors.textbody }}
                                    >
                                        {resume.name}
                                    </p>

                                    <p
                                        className="text-xs sm:text-sm"
                                        style={{ color: Colors.text }}
                                    >
                                        {(resume.size / 1024 / 1024).toFixed(2)} MB
                                    </p>

                                </div>

                            </div>



                        </div>
                    )
                }

            </div>

        </GlassCard>
    )
}

export default Upload