import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';

function CartItem({ data }) {
  const { addToCart, removeFromCart, cartItems, updateCartItemCount, removeCartItem } = useContext(ShopContext);
  const itemSubtotal = (data.price * cartItems[data.id]).toFixed(2);

  return (
    <div className='cartItem'>
      <div className="cartProduct position-relative">
        <button className="removeItemBtn" onClick={() => removeCartItem(data.id)}>x</button>
        <img className="cartImg" src={data.productImage} alt={data.productName} />
        <p className=''>{data.productName}</p>
      </div>
      <p className='productPrice'>N{data.price}</p>
      <div className='countHandler'>
        <button onClick={() => removeFromCart(data.id)}>-</button>
        <input value={cartItems[data.id]} onChange={(e) => updateCartItemCount(+e.target.value, data.id)} />
        <button onClick={() => addToCart(data.id)}>+</button>
      </div>
      <p className='d-none d-md-block'>N{itemSubtotal}</p>
    </div>
  );
}

export default CartItem;
