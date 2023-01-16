import React, { useState } from 'react';


function AddToCart({ item }) {
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);
  
  const handleAddToCart = () => {
    // Create a new object with the selected item and quantity
    const newItem = { item, quantity };
    console.log(item)
    // Add the new item to the cart
    setCart([...cart, newItem])
  };

  return (
    <div className='add-to-cart'>
      <div>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p>Price: {item.price}</p>
      </div>
      <div>
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
        />
      </div>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default AddToCart;
