// This should be a better way to go about writing promises

let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apples"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

function time(ms) {
  return new Promise((resolve, reject) => {
    if(is_shop_open){
      setTimeout(resolve, ms);
    } else{
      reject(console.log("shop is closed"));
    }
  })
}

async function kitchen () {
  try{}
  catch(error){
    console.log("customer left", error)
  }
  finally{}
}

kitchen();

// start from 1:28:39
