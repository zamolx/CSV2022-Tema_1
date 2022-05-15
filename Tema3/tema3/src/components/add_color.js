import { useState } from "react";

const AddColor = (props) => {
    const [color, setColor] = useState("#000000")

    const handleClick = () => {
        props.handleClick(color)
    }
    const updateColor = (event) => {
        setColor(event.target.value)
    }
    return (
        <>
            <input type="color" value={color} onChange={updateColor}></input>
            <button onClick={handleClick}>Add</button>
        </>
    )
};

export default AddColor;