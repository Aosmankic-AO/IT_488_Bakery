import React, { useState } from 'react';
import AddToCart from './AddToCart';


const ItemList = () => {
  const [items] = useState([
    { name: '1/2 dozen Doughnuts', price: 9.99 },
    { name: '1 dozen Doughnuts', price: 14.99 },
    { name: 'Bagel', price: 1.99 },
    {name: 'Cake', price: 10.99}
  ]);

  return (
    <div className='order-menu'>
      {items.map((item, index) => (
        <div key={index}>
          <AddToCart item={item} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
