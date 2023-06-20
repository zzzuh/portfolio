export default function Navbar() {

    return <div className="w-full h-20 shadow-md">
        <div className="flex justify-center items-center w-full h-full lg:gap-20 text-4xl font-bold">
            <a href="/">Home</a>
            <a href="/projects">Project</a>
            <a href="/contact">Contact</a>
        </div>
    </div>
}