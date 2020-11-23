// Side Nav Section Start
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
// Side Nav Section End

// cart Section Start
// Get from storage
let cart = JSON.parse(localStorage.getItem('cart'))


// load cart to DOM
cart.forEach( (itm, idx) => {
    // create a div element for item
    let rowElm = document.createElement('div')
    // adding class to div
    rowElm.classList.add('cart-row')
    rowElm.classList.add('delete')
    // creating id for that item based off the stored item name
    rowElm.id = `itemID-${itm[0]}`
    // filling div with this stuff.   setting the name price and ammount from stored cart doing it for each item
    rowElm.innerHTML = `
        <div class="cart-item cart-column">
            <span class="cart-item-title">${itm[0].replaceAll('_', " ")}</span>
        </div>
        <span class="cart-price cart-column">${itm[1]}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" id="valID-${itm[0]}" type="number" value="${itm[2]}" min="1" onclick="updateAmmount('valID-${itm[0]}')">
            <button class="btn btn-danger" type="button" onclick="removeItem('itemID-${itm[0]}')">REMOVE</button>
        </div>
    `
    // adding current element to DOM cart list
    document.getElementById('payment-cart-list').appendChild(rowElm)
} )
// Calculate the total price on page load
calcPrice()

// Remove Item
function removeItem(id) {
    // converting the generated id back into the original item name
    let itemName = id.slice(7)

    // cycling through each item in the cart
    cart.forEach( (arrItm, arrIdx) => {
        // if the current item is the removed item
        if(arrItm.includes(itemName)) {
            // remove current item
            cart.splice(arrIdx, 1)
            // cart length after removing item is 0 then remove cart from storage
            if (cart.length === 0) {
                // remove cart from storage
                localStorage.removeItem('cart')
            } else {
                // else update the cart in storage
                localStorage.setItem('cart', JSON.stringify(cart))
            }
            
        }
    })
    // remove the input element
    document.getElementById(id).remove()
    // update price
    calcPrice()
}

function calcPrice () { 
    // if nothing in cart total price is 0
    let totalPrice = 0
    // if cart exists and there is more than one itme in cart
    if (cart && cart.length > 0) {
        // cycle thought the cart
        cart.forEach (itm => {
            // add the price of each item times the amount then add to the total price counter
            totalPrice += (+itm[1].slice(1) * itm[2])
        })
    }
    // update the total price element
    document.getElementById('payment-total-price').textContent = `$${totalPrice}`
}

function updateAmmount(id) {
    // select element, get name from generated id 
    let elm = document.getElementById(id)
    let name = id.slice(6)

    // cycling through each item in the cart
    cart.forEach( (arrItm, arrIdx) => {
        // if current cart item is the input item
        if(arrItm.includes(name)) {
            // setting the item ammount to the value of the selected element
            cart[arrIdx][2] = +elm.value;            
        }
    })
    // calulate the total price
    calcPrice()
}
// Cart Section end

//payment Section Start
let fname = document.querySelector('.fname')
let email = document.querySelector('.email')
let adr = document.querySelector('.adr')
let city = document.querySelector('.city')
let state = document.querySelector('.state')
let zip = document.querySelector('.zip')

function myFunc(){
    // declares variables to match element ids
    const fullname = document.getElementById("fname")
    const email = document.getElementById("email")
    const adr = document.getElementById("adr")
    const city = document.getElementById("city")
    const state = document.getElementById("state")
    const zip = document.getElementById("zip")

    // local storage sets variables to store
    localStorage.setItem('fname', fullname.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('adr', adr.value);
    localStorage.setItem('city', city.value);
    localStorage.setItem('state', state.value);
    localStorage.setItem('zip', zip.value);
    alert("Thank you for your purchase!");

    //delete cart
    document.querySelector('.delete').remove();
    localStorage.removeItem('cart');
}