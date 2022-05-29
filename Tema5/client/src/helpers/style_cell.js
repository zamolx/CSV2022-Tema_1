import Style from "./style";


class StyleCell extends Style {

    #styleCell() {
        return {
            listStyleType: this.listStyleType,
            width: this.widthCell,
            height: this.highCell,
            opacity: `${this.e[1].opacity}`,
            backgroundColor: this.backgroundColor,
            display: this.display,
        }
    }

    get styleCell() {
        return this.#styleCell();
    }
}

export default StyleCell;