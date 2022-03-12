
let stocks = {
    Fruit : ["strawberry", "grapes", "banana", "apple"],
    Liquid : ["water", "ice"],
    Holder : ["cone", "cup", "stick"],
    Topping : ["chocolate", "peanuts"]
};

//The deciding factor of the code
let isShopOpen = true;

function time(ms)
{
    return new Promise( (resolve, reject) => {
        if(isShopOpen)
        {
            setTimeout(resolve, ms);
        }
        else
        {
            reject(console.log("-_- Sorry! We are closed"))
        }
    } )
}

async function kitchen()
{
    try
    {
        await time(2000);
        console.log(`-> ${stocks.Fruit[3]} was selected`);

        await time(4000);
        console.log("-> Production has started");

        await time(3000);
        console.log("-> The fruit has been chopped");

        await time(1000);
        console.log(`-> ${stocks.Liquid[0]} and ${stocks.Liquid[1]} was added`);

        await time(4000);
        console.log("-> Starting the machine");

        await time(2000);
        console.log(`-> ${stocks.Holder[0]} is selected`);

        await time(2500);
        console.log(`-> ${stocks.Topping[0]} was used as topping`);

        await time(5000);
        console.log("-> Serve the ice cream");
    }
    catch(error)
    {
        console.log(":) Come back another time");
    }
    finally
    {
        console.log("()- Working hours over, Good day!");
    }
}

kitchen();
