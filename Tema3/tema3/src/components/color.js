
const Color = (props) => {
    let myStyle = {
        background: `linear-gradient(${props.colors.join(',')})`,
    }

    const onRemoveColor = (color) => {
        props.removeColor(color)
        myStyle = {
            background: `linear-gradient(${props.colors ? props.colors.join(',') : '#ffffff'})`,
        }
    }

    return (
        <>
            <div className="color-example" style={myStyle}>
            </div>
            {props.colors.map((color) => (
                <div key={color} onClick={event => onRemoveColor(color)} className="cursor">{color} X</div>
            ))}
        </>
    )
}

export default Color;