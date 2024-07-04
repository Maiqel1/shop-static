import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'

function Product({data}) {

  const {addToCart, cartItems} = useContext(ShopContext)
  const cartItemAmount = cartItems[data.id]
  // console.log(cartItemAmount);
  return (
    <div className='product'>
        <img src={data.productImage} alt="" />
        <div className="description">
            <p><b>{data.productName}</b></p>
            <p>${data.price}</p>
        </div>
        <button onClick={() => addToCart(data.id)} className="addToCartBttn">Add to cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
    </div>
  )
}

export default Product