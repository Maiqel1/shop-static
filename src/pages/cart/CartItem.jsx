import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';

function CartItem({ data }) {
    const { addToCart, removeFromCart, cartItems, updateCartItemCount, removeCartItem } = useContext(ShopContext);
    const itemSubtotal = (data.price * cartItems[data.id]).toFixed(2);

    return (
        <div className='cartItem'>
            <div className="cartDiv col-12 col-lg-8">
                <div className='row'>
                    <div className='col-12 d-flex justify-content-between'>
                        <div className="col-6"><p>PRODUCT</p></div>
                        <div className="col-2"><p>PRICE</p></div>
                        <div className="col-2 me-4 me-sm-0"><p>QUANTITY</p></div>
                        <div className="col-2 d-none d-sm-none d-md-block d-lg-block "><p>SUBTOTAL</p></div>
                    </div>
                </div>
                <div className='cartItem row d-flex justify-content-between'>
                    <div className="col-6">
                        <div className="d-flex" >
                            <p className=" mt-3 pe-1 removeItemBtn" onClick={() => removeCartItem(data.id)}>X</p>
                            <img className="cartImg" src={data.productImage} alt={data.productName} />
                            <p className='mt-0 mt-sm-1 productName col-8'>{data.productName}</p>
                        </div>
                    </div>
                    <div className="col-2">
                        <p className='productPrice'>N{data.price}</p>
                    </div>
                    <div className="col-2 me-4 me-sm-0">
                        <div className='countHandler ps-5 '>
                            <button onClick={() => removeFromCart(data.id)}>-</button>
                            <input value={cartItems[data.id]} onChange={(e) => updateCartItemCount(+e.target.value, data.id)} />
                            <button onClick={() => addToCart(data.id)}>+</button>
                        </div>
                    </div>
                    <div className="col-2 d-none d-sm-none d-md-block d-lg-block">
                        <p className='d-none d-md-block'>N{itemSubtotal}</p>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default CartItem;