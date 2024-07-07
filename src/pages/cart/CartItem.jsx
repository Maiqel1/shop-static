// import React from 'react'
// import './cart.css'
// import { ShopContext } from '../../context/ShopContext'
// import { useContext } from 'react'

// function CartItem({ data }) {
//   const { addToCart, removeFromCart, cartItems, updateCartItemCount } = useContext(ShopContext)

//   return (
//     <div className='cartItem d-flex justify-content-between'>
//       <div className="">
//         <p>PRODUCT</p>
//         <div className="d-flex"  >
//           <img className="cartImg" src={data.productImage} />
//           <p className="      ">{data.productName}</p>
//         </div>
//       </div>
//       <div>
//         <p>PRCE</p>
//         <p>${data.price}</p>
//       </div>
//       <div>
//         <p>Quantty</p>
//         <div className='countHandler'>
//           <button onClick={() => removeFromCart(data.id)}> -</button>
//           <input className='col-2' value={cartItems[data.id]} onChange={(e) => updateCartItemCount(+e.target.value, data.id)} />
//           <button onClick={() => addToCart(data.id)}> +</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CartItem
