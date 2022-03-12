
let stocks = {
    Fruit : ["strawberry", "grapes", "banana", "apple"],
    Liquid : ["water", "ice"],
    Holder : ["cone", "cup", "stick"],
    Topping : ["chocolate", "peanuts"]
};

let isShopOpen = false;

async function order()
{
    try
    {
        await Trial;
    }
    catch(error)
    {
        console.log("Trial does not exist");
    }
    finally
    {
        console.log("Finished the try/catch block");
    }
}

order().then(() => {
    console.log("Final line of code");
});
