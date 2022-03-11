
let stocks = {
    Fruit : ["strawberry", "grapes", "banana", "apple"],
    Liquid : ["water", "ice"],
    Holder : ["cone", "cup", "stick"],
    Topping : ["chocolate", "peanuts"]
};

let order = (FruitIndex, callbackProduction) => {

    setTimeout(() => {
        console.log(`-> ${stocks.Fruit[FruitIndex]} was selected`);
    
        callbackProduction();

    }, 4000);
    
};


//The sliding indentation format of setTimeout functions is callback hell. It is called "hell" because of the code is long and looks dirty.
let production = () => {

    setTimeout(() => {
        console.log("-> Production has started");
        
        setTimeout(() => {
            console.log("-> The fruit has been chopped");

            setTimeout(() => {
                console.log(`-> ${stocks.Liquid[0]} and ${stocks.Liquid[1]} was added`);

                setTimeout(() => {
                    console.log("-> Starting the machine");

                    setTimeout(() => {
                        console.log(`-> ${stocks.Holder[0]} is selected`);

                        setTimeout(() => {
                            console.log(`-> ${stocks.Topping[0]} was used as topping`);

                            setTimeout(() => {
                                console.log("-> Serve the ice cream");
                    
                            }, 2000);
                
                        }, 6000);

            
                    }, 4000);
        
                }, 2000);
    
            }, 2000);

        }, 4000);

    }, 1000);

};

order(0, production);
