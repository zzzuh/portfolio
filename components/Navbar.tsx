import SocialButton from "./SocialButton"

export default function Navbar() {
    return <div className="w-full h-[9em] bg-[#BE8079]">
        <div className="flex justify-evenly items-center w-full h-full">
            <a href="/"><img src="logo.png"></img></a>
            <div className="flex justify-center items-center lg:gap-[110px] gap-7 text-[#E1E7C6] font-bold font-cuprum">
                <a href="/" className="text-lg sm:text-xl md:text-2xl lg:text-3xl">ABOUT</a>
                {/* <a href="/" className="lg:mr-20 mr-8 text-lg sm:text-xl md:text-2xl lg:text-3xl">ABOUT</a> */}
                <a href="/projects" className="text-lg sm:text-xl md:text-2xl lg:text-3xl">PROJECTS</a>
                <a href="/contact" className="text-lg sm:text-xl md:text-2xl lg:text-3xl">CONTACT</a>
            </div>
        </div>
    </div>
}