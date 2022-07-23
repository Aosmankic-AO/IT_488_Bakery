/** Check if the html document is done loading*/
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

/*******************************************************************************/

/**ready function that combines code for buttons and runs even if page is not loaded */
function ready() {
    /**Remove from cart button(s)*/
var remove_buttons = document.getElementsByClassName("btn-danger");

for(var i = 0; i < remove_buttons.length; i++) {
    var button = remove_buttons[i];
    button.addEventListener('click', removeCartItem)
  }

var quantity_user_input = document.getElementsByClassName("cart-quantity-input");

  for(var i = 0; i < quantity_user_input.length; i++) {
    var input = quantity_user_input[i];
    input.addEventListener('change', quantityChanged)
       
  }

  var addToCartButtons = document.getElementsByClassName("item-button");
  for(var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i]
    button.addEventListener("click", addToCart_clicked)
  }

document.getElementsByClassName("btn-purchase")[0].addEventListener('click', purchaseClicked);


}
/*******************************************************************************/
/*******************************************************************************/
/*******************************************************************************/
/** FUNCTIONS **/

/**Function to remove an item from the cart */
function removeCartItem(event) {
    var button_clicked = event.target;
    button_clicked.parentElement.parentElement.remove();
    update_total();
}

/**Function to check if the quantity of item in cart changed */
function quantityChanged(event) {
    var input = event.target
    // check if value in quantity is a valid input value (not 0 or negative number)
    if(isNaN(input.value || input.value <= 0)) {
        input.value = 1;
    }
    update_total();
}

/**Function to add item to cart */
function addToCart_clicked(event) {
    var button = event.target;
    var BakeryItem = button.parentElement.parentElement;
    // grab item name/title and price
    var title = BakeryItem.getElementsByClassName("item-title")[0].innerText;
    var price = BakeryItem.getElementsByClassName("price")[0].innerText;
    var image = BakeryItem.getElementsByClassName("item-image")[0].src;
    console.log(title, price, image);
    addItemToCart(title, price, image);
    update_total();
}

/**Function to add item to cart */
function addItemToCart(title, price, image){
    //adds a div to HTML, we want to add to cart-items
    var cartRow = document.createElement("div");
    cartRow.innerText = title;
    cartRow.classList.add("cart-row")
    var cartItems = document.getElementsByClassName("cart-items")[0];

    var cartRowContents =`
    <div class="cart-item cart-column">
        <img class="cart-item-image" src="${image}" width="100" height="100">
        <span class="cart-item-title">${title}</span>
    </div>
        <span class="cart-price cart-column">${price}</span>
    <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="1">
        <button class="btn  btn-danger" type="button">REMOVE</button>
    </div>`;
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

/**Function to purchase / checkout */
function purchaseClicked() {
    alert('Thank you for shopping with The Bakery!');
    var cartItems = document.getElementsByClassName("cart-items")[0];
    // Keep looping until the cart rows are empty (have no children)
    while(cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild);
    }
    update_total();
}

/*******************************************************************************/
/*******************************************************************************/
/*******************************************************************************/

/**Total Update*/
function update_total() {
    var cartItemsContainer = document.getElementsByClassName("cart-items")[0];
    var cartRows = cartItemsContainer.getElementsByClassName("cart-row");
    var total = 0;
    // loop through the rows in the shopping cart
    for(var i = 0; i < cartRows.length; i++) {
        var cart_row = cartRows[i];
        // price and quantity elements
        var price_element = cart_row.getElementsByClassName("cart-price")[0];
        var quantity_element = cart_row.getElementsByClassName("cart-quantity-input")[0];
        // grab the value inside of the price and quantity element
        // replace any inner text with dollar signs to be nothing
        // parse float will turn any string into a float (numbers with decimal points)
        var price = parseFloat(price_element.innerText.replace("$", ""));
        console.log(price_element);
        console.log(quantity_element);
        var quantity = quantity_element.value;
        total = total + (price * quantity);
        
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName("cart-total-price")[0].innerText = "$" + total;
}

/*******************************************************************************/