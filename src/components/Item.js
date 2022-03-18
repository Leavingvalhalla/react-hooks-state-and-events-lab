import React, { useState } from 'react';

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  function handleAddClick() {
    setInCart((inCart) => !inCart);
  }

  const cartClass = inCart ? 'in-cart' : '';
  const buttonText = inCart ? 'Remove From Cart' : 'Add to Cart';

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddClick} className="add">
        {buttonText}
      </button>
    </li>
  );
}

export default Item;
