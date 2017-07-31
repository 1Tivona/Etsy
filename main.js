// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  // Answer:
      let priceTotal = 0;
      for (let i = 0; i<data.length; i++){
        let sale= data[i]
        //console.log("" +sale.listing_id +":" + sale.price)

        priceTotal += sale.price
      }

      let avg = priceTotal/data.length;
      //  } let avg = priceTotal / data.price.length;
      console.log ("The average price is $" + avg.toFixed(2))

  }



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  // Answer:
  let items = []
  for (let i = 0; i<data.length; i++){
    let sale = data[i]
    //this is to include 14.00 and 18.00
    if (sale.currency_code == "USD" &&
        14.00 <= sale.price &&
        sale.price <= 18.00){
        // console.log("" +sale.title +":" + sale.price)
        items.push (sale.title);
      }

  }
  console.log (items)
  //console.log (items.length)
}




// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  // Answer:
  let itemsGBP = 0;
  for (let i = 0; i<data.length; i++){
    let sale = data[i]
    if (sale.currency_code == "GBP"){
      console.log ("" +sale.title + " costs " + sale.price + " pounds.")
    }
  }
}



// 4: Display a list of all items who are made of wood.
function question4 () {
  // Answer:
  let itemsW = 0
  for (i = 0; i<data.length; i++){
    let sale = data[i];
    sale.materials.forEach(function(element){
      if (element == "wood") {
        console.log (sale.title)
      }
    });
  }
}


//5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
// Answer:

  let itemsEight = []
  for (let i = 0; i<data.length; i++){
    let item = data[i];
      if (item.materials.length >= 8){
        console.log (item.title + " has " +
          item.materials.length + " materials: ")
        item.materials.forEach(function(element){


            console.log (" - " + element)
        });
      }

      }


}


//6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:
  let madeBy = 0;
  for (let i = 0; i<data.length; i++){
    let item = data[i]
    if (item.who_made === "i_did"){
      madeBy ++
    }

    }
    console.log (madeBy + " items were made by their sellers.")
  }
