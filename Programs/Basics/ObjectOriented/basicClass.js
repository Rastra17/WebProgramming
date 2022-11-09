//A program to practice parameterized constructor

class Calc {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;

        this.sum = function () {
            let add = this.num1 + this.num2;
            console.log("The sum of numbers is: " + add);
        };
    }
}

const display = new Calc(50, 50);
display.sum();