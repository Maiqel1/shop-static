import React from 'react'
import './cart.css'
import { ShopContext } from '../../context/ShopContext'
import { useContext } from 'react'

function CartItem({data}) {
  const {addToCart, removeFromCart, cartItems, updateCartItemCount} = useContext(ShopContext)

  return (
    <div className='cartItem'>
        <img src={data.productImage}/>
        <div className="description">
            <p><b>{data.productName}</b></p>
            <p>${data.price}</p>
            <div className='countHandler'>
                <button onClick={() => removeFromCart(data.id)}> -</button>
                <input value={cartItems[data.id]} onChange={(e) => updateCartItemCount(+e.target.value, data.id)} />
                <button onClick={() => addToCart(data.id)}> +</button>
            </div>
        </div>
    </div>
  )
}

export default CartItem