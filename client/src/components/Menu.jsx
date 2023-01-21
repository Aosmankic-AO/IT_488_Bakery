import React, { useState } from 'react';



const Menu = () => {

  const [items, setItems] = useState([
    { name: '1 Dozen Doughnuts', price: 20 },
    { name: '1/2 Dozen Doughnuts', price: 10 },
    { name: 'Whole Cake', price: 30 },
    { name: 'Half Cake', price: 20 },
    { name: 'Whole Cake', price: 30 },
  ]);

  const [cart, setCart] = useState([]);
  console.log(cart)
  
  // When add to cart is clicked
  const handleAddToCart = (item) => {
    setCart([...cart, item]);
    let addedItem = cart.find(i => i.name);
    
      
  }

  //Remove item from cart
  const handleRemoveFromCart = (item) => {
    setCart(cart.filter(i => i !== item));
  }

  // Get the total cost of items in cart
  const totalCost = cart.reduce((total, item) => total + item.price, 0);


  return (
    <div className='order-menu-container'>
    <h2>Menu</h2>
    <ul className='menu-list'>
      {items.map((item, index) => (
        <li key={index} className="menu-list-item">
          {item.name} - ${item.price}
          <button onClick={() => handleAddToCart(item)} className="add-cart-btn">Add to cart</button>
        </li>
      ))}
    </ul>
        {cart.length > 0 && (
          <>
          <h2>Cart</h2>
    <ul className='cart-list'>
      {cart.map((item, index) => (
        <li key={index} className='cart-list-item'>
          {item.name} - ${item.price}
          <button className='remove-btn'onClick={() => handleRemoveFromCart(item)}>Remove</button>
        </li>
      ))}
    </ul>
    <h3>Total:${totalCost}</h3>
        </>
        )}
  </div>
  );
};

export default Menu;
