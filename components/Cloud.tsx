interface Prop {
    width: number,
    height: number,
    shape: string
}

export default function Cloud(prop: Prop) {
    const style = {
        width: `${prop.width}px`,
        height: `${prop.height}px`,
        borderRadius: prop.shape === 'circle' ? '50%' : '8px',
        background: "url(cloud.png) #9f6f6f 25% / cover no-repeat",
        backgroundBlendMode: "hue"
    }

    return <div style={style}></div>
}