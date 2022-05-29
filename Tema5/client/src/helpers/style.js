class Style {

    constructor(e) {
        this.e = e;
        this.height = '80px';
        this.listStyleType = 'none';
        this.widthCell = '20px';
        this.highCell = '20px';
        this.backgroundColor = 'green';
        this.display = 'block';
    }

    #style() {
        return {
            width: `${this.e[1].width}`,
            height: this.height,
            opacity: `${this.e[1].opacity}`,
            backgroundColor: this.backgroundColor,
        }
    }

    get style() {
        return this.#style();
    }
}

export default Style;