export default function Resume() {
    return (
        <div className="flex flex-col items-center p-8">
            <h2 className="font-cuprum text-[#E1E7C6]">Resume</h2>
            <iframe src="resume.pdf" height={1000} width={850}></iframe>
        </div>
        )
}