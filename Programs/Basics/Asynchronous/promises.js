
let stocks = {
    Fruit: ["strawberry", "grapes", "banana", "apple"],
    Liquid: ["water", "ice"],
    Holder: ["cone", "cup", "stick"],
    Topping: ["chocolate", "peanuts"]
};

//The deciding factor of the code
let isShopOpen = false;

let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if (isShopOpen) {
            setTimeout(() => {
                resolve(work());
            }, time)
        }
        else {
            reject(console.log("-_- Sorry! We are closed"));
        }
    });
};

order(4000, () => console.log(`-> ${stocks.Fruit[0]} was selected`))
    .then(() => {
        return order(2000, () => console.log("-> Production has started"));
    })
    .then(() => {
        return order(2000, () => console.log("-> The fruit has been chopped"));
    })
    .then(() => {
        return order(2000, () => console.log(`-> ${stocks.Liquid[0]} and ${stocks.Liquid[1]} was added`));
    })
    .then(() => {
        return order(2000, () => console.log("-> Starting the machine"));
    })
    .then(() => {
        return order(2000, () => console.log(`-> ${stocks.Holder[0]} is selected`));
    })
    .then(() => {
        return order(6000, () => console.log(`-> ${stocks.Topping[0]} was used as topping`));
    })
    .then(() => {
        return order(2000, () => console.log("-> Serve the ice cream"));
    })

    .catch(() => {
        console.log(":) Come back another time");
    })

    .finally(() => {
        console.log("()- Working hours over, Good day!");
    });
