interface Prop {
    title: string,
    image?: string
}

export default function Header(prop: Prop) {
    return <div className="w-full h-[30em] shadow-inner bg-[#F5F5F5]">
        <div className="flex justify-center items-center w-full h-full">
            <h1>{prop.title}</h1>
        </div>
    </div>
}