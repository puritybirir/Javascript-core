/***
 * This file demonstrates how we can create a callback hell.
 */

let stocks = {
  Fruits : ["strawberry", "grapes", "banana", "apples"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"]
}

let order = (fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`${stocks.Fruits[fruit_name]} was selected`)
    call_production();
  }, 2000)
};


// look at the callback hell over here lol lol lol
let production = () => {
  setTimeout(() => {
    console.log("Production has started");

    setTimeout(() => {
      console.log("The fruit has been chopped");

      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

        setTimeout(() => {
          console.log("The machine has been started");

          setTimeout(() => {
            console.log(`Icecream was placed on the ${stocks.holder[0]}`)

            setTimeout(() => {
              console.log(`${stocks.toppings[0]} was added as a topping`)

              setTimeout(() => {
                console.log("Serve ice cream");
              }, 2000)
            },3000)
          }, 2000)
        },1000)
      },1000)
    }, 2000)
  }, 0000)
}

order(2, production);
