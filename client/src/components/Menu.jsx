import React, { useState } from 'react';

  
const Menu = () => {

  const menuItems = [
    { id: 1, name: '1 Dozen Doughnuts', price: 9.99 },
    { id: 2, name: 'Half Dozen Doughnuts', price: 5.99 },
    { id: 3, name: 'Half Dozen Bagels', price: 7.99 },
    // Add more items here
  ];
  

  const [cart, setCart] = useState([]);

  const handleAddToCart = item => {
    //check if the item already exists in cart by id
    const existingItem = cart.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = item => {
    setCart(cart.filter(i => i !== item));
  };

  /**Handling the checkout submission */
  const handleCheckout = async () => {
    console.log(cart)
    try {
      const response = await fetch('http://localhost:3001/orders', {
          method: 'POST',
          body: JSON.stringify({items: cart, total: totalCost}),
          headers: { 'Content-Type': 'application/json' },
      });
      await response.json();
      alert('Thank you for your purchase! An email confirmation has been sent.');
      window.location.reload();
  } catch (err) {
      console.error(err);
  }
  };
 

  // Get the total cost of items in cart
  const totalCost = cart.reduce((total, item) => total + item.price, 0);


  return (
    <div className='order-container'>

    <div className='menu'>
    <h2>Menu</h2>
    
    <ul>
        {menuItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button className='menu-btn' onClick={() => handleAddToCart(item)}>Add to cart</button>
          </li>
        ))}
      </ul>
    </div>
        {cart.length > 0 && (
          <>
          <div className='cart'>
          <h2>Cart</h2>
          <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price} - Quantity : {item.quantity}
            <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
          </div>
    <h3>Total: ${totalCost}</h3>
    <button className='checkout-btn' onClick={handleCheckout}>Checkout</button>
        </>
        )}
  </div>
  );
};

export default Menu;
