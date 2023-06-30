interface Prop {
    title: string,
    tools: string,
    description: string,
    link: string
}

export default function Project(prop: Prop) {
    return (
        <div className="rounded-md drop-shadow-2xl bg-[#919D59] w-[400px] h-[250px] mx-[100px] text-center">
            <a href={`${prop.link}`} target="_blank" className="font-cuprum font-extrabold text-[#566165] mt-6 mb-[2px] text-[25px] underline">{prop.title}</a>
            <div className="font-cuprum text-[#E1E7C6] mb-1">{prop.tools}</div>
            <div className="font-cuprum font-bold text-white">{prop.description}</div>
        </div>
    )
}