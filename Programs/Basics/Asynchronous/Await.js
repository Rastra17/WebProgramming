
let stocks = {
    Fruit: ["strawberry", "grapes", "banana", "apple"],
    Liquid: ["water", "ice"],
    Holder: ["cone", "cup", "stick"],
    Topping: ["chocolate", "peanuts"]
};

let isShopOpen = false;

let toppingChoice = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(
                console.log("-> Which topping would you love?")
            );
        }, 3000)
    })
};

async function kitchen() {
    console.log(`-> ${stocks.Fruit[0]} was selected`);
    console.log("-> Production has started");
    console.log("-> The fruit has been chopped");
    console.log(`-> ${stocks.Liquid[0]} and ${stocks.Liquid[1]} was added`);
    console.log("-> Starting the machine");
    console.log(`-> ${stocks.Holder[0]} is selected`);

    //This will run when the setTimeout function is timed out
    await toppingChoice();

    console.log(`-> ${stocks.Topping[0]} was used as topping`);
    console.log("-> Serve the ice cream");
}

kitchen();

//These lines of codes will run before the second half of kitchen function even when kitchen function is called before it
console.log("()- Doing the dishes");
console.log("()- Cleaning the tables");
console.log("()- Taking orders");
