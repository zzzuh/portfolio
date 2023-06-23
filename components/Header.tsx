interface Prop {
    title: string,
    description: string
}

export default function Header(prop: Prop) {
    return <div className="w-full">
        <div className="flex justify-center items-center w-full h-full">
            <h1>{prop.title}</h1>
        </div>
    </div>
}