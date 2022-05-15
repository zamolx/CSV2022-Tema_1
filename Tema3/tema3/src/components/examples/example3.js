import { useState } from "react";
import Color from "../color";
import AddColor from "../add_color";

const Example3 = () => {
    const [colors, setColors] = useState([])
    const addColor = (color) => {
        if (colors.includes(color)) return;
        const newColors = [...colors];
        newColors.push(color);
        setColors(newColors);
    }
    const removeColor = (deleteColor) => {
        const newColors = colors.filter((color) => color !== deleteColor);
        setColors(newColors);
    }

    return (
        <div className="example">
            Example3
            <AddColor handleClick={addColor} />
            <Color colors={colors} removeColor={removeColor} />
        </div>)
}
export default Example3;