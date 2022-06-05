const Color = require('./colors');


class Matrix {
    
    #size = 3;
    #matrix;

    #addNote(note) {
        for (let row = 0; row < 3; row++) {
            for (let column = 0; column < 3; column++) {
                if (note.pos.row == row && note.pos.column == column) {
                    this.#matrix[row][column] = [note.note, new Color().color()]
                }
            }
        }
    }

    #emptyMatrix() {
        const matrix = [];
        for (let row = 0; row < this.#size; row++) {
            matrix[row] = [];
            for (let column = 0; column < this.#size; column++) {
                matrix[row][column] = [null, null];
            }
        }
        return matrix;
    }

    getMatrix(note) {
        this.#addNote(note);
        return this.#matrix;
    }

    matrix() {
        this.#matrix = this.#emptyMatrix();
        return this.#matrix;
    }
}

module.exports = Matrix;