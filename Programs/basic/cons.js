//A program to implement constructor without classes

//Constructor function
function Circle(radius)
{
    this.radius=radius;
    this.draw=function()
    {
        let area=(3.14*(radius*radius))
        console.log("The area of the circle is: "+area);
    }
}

//In JavaScript, a function is an object
const circle=new Circle(1);
circle.draw();