class Color {

  #min = 130;
  #max = 255;

  color() {
    return this.#rgb();
  }

  #randomColor() {
    let difference = this.#max - this.#min;
    let randomNumber = Math.random();
    randomNumber = Math.floor(randomNumber * difference);
    randomNumber = randomNumber + this.#min;
    return randomNumber;
  }

  #rgb() {
    return `rgb(${this.#randomColor()}, ${this.#randomColor()}, ${this.#randomColor()})`;
  }
}

module.exports = Color