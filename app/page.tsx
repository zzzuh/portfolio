import Cloud from "@/components/Cloud";
import Header from "@/components/Header";
import SocialButton from "@/components/SocialButton";

export default function Home() {
    return (
        <div className="w-full h-screen mx-auto p-2 flex justify-center items-center">
            <div className="text-center">
                <h1 className="py-4 text-[#E1E7C6] italic">Ze Jun Lin</h1>
                <h2 className="py-4 text-[#919D59] sm:max-w-[70%] m-auto">Third year computer science student at Rochester Institute of Technology</h2>
                <SocialButton></SocialButton>
            </div>
        </div>
    )
}
