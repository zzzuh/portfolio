import SocialButton from "./SocialButton"

export default function Navbar() {
    return <div className="w-full h-[9em] bg-[#BE8079]">
        <div className="flex justify-evenly items-center w-full h-full">
            <div className="flex justify-center items-center lg:gap-[110px] gap-7 text-[#E1E7C6] font-bold font-cuprum">
                <a href="/" className="text-lg sm:text-xl md:text-2xl lg:text-3xl">HOME</a>
                <a href="/projects" className="text-lg sm:text-xl md:text-2xl lg:text-3xl">PROJECTS</a>
                <a href="/resume" className="text-lg sm:text-xl md:text-2xl lg:text-3xl">RESUME</a>
            </div>
        </div>
    </div>
}