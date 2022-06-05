export class Matrix {
    #size = 3;
    #matrix;

    #emptyMatrix() {
        const matrix = [];
        for (let row = 0; row < this.#size; row++) {
            matrix[row] = [];
            for (let column = 0; column < this.#size; column++) {
                matrix[row][column] = [null];
            }
        }
        return matrix;
    }

    matrix(){
        this.#matrix = this.#emptyMatrix();
        return this.#matrix;
    }
}
