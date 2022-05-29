class NewMap {

    constructor(object) {
        this.object = object
    }

    #sumFrequency(obj) {
        return Object.values(obj).reduce((a, b) => Number(a) + Number(b), 0);
    }

    #sortFrequency(obj) {
        return Object.fromEntries(
            Object.entries(obj).sort(([, a], [, b]) => a < b)
        );
    }

    #returnNewMap() {
        const sortedObject = Object.assign({}, this.#sortFrequency(this.object));
        const sum = this.#sumFrequency(sortedObject)
        const newMap = new Map()
        Object.entries(sortedObject).map((element) => {
            let frequency = element[1] / sum
            let width = element[1] / sum * 100
            newMap.set(element[0], {
                'opacity': `${frequency.toFixed(4)}`,
                'width': `${width.toFixed(4)}%`
            })
        });
        return newMap;
    }

    get newMap() {
        return this.#returnNewMap();
    }
}

export default NewMap;

