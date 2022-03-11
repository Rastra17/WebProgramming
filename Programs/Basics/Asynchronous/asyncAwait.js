
let stocks = {
    Fruit : ["strawberry", "grapes", "banana", "apple"],
    Liquid : ["water", "ice"],
    Holder : ["cone", "cup", "stick"],
    Topping : ["chocolate", "peanuts"]
};

//The deciding factor of the code
// let isShopOpen = false;

// let order = () => {
//     return new Promise( (resolve, reject)=>{
//         if(isShopOpen)
//         {
//             resolve();
//         }
//         else
//         {
//             reject();
//         }
//     } )
// };

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
