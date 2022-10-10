/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(firstNumber, secondNumber) {
    this.number_1 = firstNumber;
    this.number_2 = secondNumber;

    this.sum = function () {
        return 'Sumos rezultatas:' + ' ' + Number(this.number_1 + this.number_2) + '.'
    };

    this.subtraction = function () {
        return 'Skirtumo rezultas:' + ' ' + Number(this.number_1 - this.number_2) + '.'
    };

    this.multiplication = function () {
        return 'Daugybos rezultatas:' + ' ' + this.number_1 * this.number_2 + '.'
    };

    this.division = function () {
        return 'Dalybos rezultatas:' + ' ' + this.number_1 / this.number_2 + '.'
    };
  
}
const arithmeticOperation = new Calculator(97, 11);
console.log(arithmeticOperation.number_1)
console.log(arithmeticOperation.number_2)
console.log(arithmeticOperation.sum())
console.log(arithmeticOperation.subtraction())
console.log(arithmeticOperation.multiplication())
console.log(arithmeticOperation.division())