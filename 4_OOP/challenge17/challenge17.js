class MesinHitung {
    constructor() {
        this.x = 1;
    }
    add(a) {
        this.x = this.x + a;
        return this;
    }
    subtract(a) {
        this.x = this.x - a;
        return this;
    }
    multiply(a) {
        this.x = this.x * a;
        return this;
    }
    divide(a) {
        this.x = this.x / a;
        return this;
    }
    exponent(a) {
        this.x = Math.pow(this.x, a);
        return this;
    }
    squareRoot() {
        this.x = Math.sqrt(this.x)
        return this;
    }
    square() {
        this.x = Math.pow(this.x, 2);
        return this;
    }
    result() {
        console.log(this.x)
    }
}
export default MesinHitung;