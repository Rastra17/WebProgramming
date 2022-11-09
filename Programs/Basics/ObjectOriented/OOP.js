//A program to show OOP in javascript without classes

//This variable is an equivalent to class in other languages
let employee =
{
    //The variables below are properties and are assigned as key-value pairs
    baseSalary: 30_000,
    overTime: 10,
    rate: 20,
    getWage: function () //This function is a Getter method
    {
        return this.baseSalary + (this.overTime * this.rate);
    }
};

//Printing the getWage method inside the employee variable
console.log("The wage of the employee is: " + employee.getWage());