import React, {useContext} from 'react'
import {PRODUCTS} from '../../products'
import { ShopContext } from '../../context/ShopContext'
import CartItem from './CartItem'
import './cart.css'
import { useNavigate } from 'react-router-dom'

function Cart() {

  let navigate = useNavigate()

  const {addToCart, cartItems, getTotalCartAmount} = useContext(ShopContext)
  const totalAmount = getTotalCartAmount()

  return (
    <div className='cart'>
      <div><h1>Your cart items</h1></div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data ={product}/>
          }
        })}
      </div>
      {totalAmount > 0 ? (
      <div className="checkout">
        <p>Subtotal: ${totalAmount}</p>
        <button onClick={() => navigate('/')}>Continue Shopping</button>
        <button>Checkout</button>
      </div>) : (<h2>Your cart is empty</h2>)}
    </div>
  )
}

export default Cart