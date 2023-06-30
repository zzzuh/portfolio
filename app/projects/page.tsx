import Project from "@/components/Project"

export default function Projects() {

    let bakeryDesc = "An e-commerce store with a focus in selling pastries and baked goods.\rAcademic project made with three other team members."
    let hopperDesc = "A simple web game based on the board game Hopper by ThinkFun. Personal project developed with React."

    return (
        <div className="flex justify-center items-center w-full h-screen p-4">
            <div className="flex flex-wrap justify-center w-full h-full items-center">
                <Project title="The Bakery" tools="Spring Boot | Angular" description={bakeryDesc} link="https://github.com/RIT-SWEN-261-04/team-project-2225-swen-261-04-c-bakery"></Project>
                <Project title="Hopper Webgame" tools="React" description={hopperDesc} link="https://github.com/zzzuh/hopper-webgame"></Project>
            </div>
        </div>
    )
}