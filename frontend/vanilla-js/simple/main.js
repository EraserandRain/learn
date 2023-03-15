function Calc() {
    this.read = (a, b) => {
        this.a = a
        this.b = b
    }
    this.sum = () => this.a + this.b
    this.mul = () => this.a * this.b
}



let calc = new Calc()
calc.read(2, 3)
console.log(calc.sum())
console.log(calc.mul())