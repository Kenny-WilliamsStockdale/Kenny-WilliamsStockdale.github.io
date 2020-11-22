// Side Nav
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
// Add items to cart
// input params, item name, item price
function addToCart(itm, price) {
  // getting item from storage and building array with json
  let cart = JSON.parse(localStorage.getItem("cart"));
  // if cart array does not exist or pulled from storage
  if (!cart) {
    //create a new cart and input current item. Item name, item price and item quantitiy
    let cart = [[itm, price, 1]];
    //push the cart to storage
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart);
  } else {
    // storing the index of the searched item
    let searchIdx = null
    // searching for the item in the cart
    cart.forEach((arrItm, arrIdx) => {
      // looking at each index does the name value of this index = the item we are looking for
      if (arrItm[0] === itm) {
        //push the current index to the searchIdx variable
        searchIdx = arrIdx
      } 
    });
    // if the searchinx has a value, increment the cart items ammount by 1 
    if(searchIdx !== null) {
      cart[searchIdx][2] += 1
    } else {
      // add item to cart
      cart.push([itm, price, 1]);
    }
    //push the cart to storage
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart);
  }
}