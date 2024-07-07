import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';


function CheckoutItem({ data }) {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const itemSubtotal = (data.price * cartItems[data.id]).toFixed(2);
    const totalAmount = getTotalCartAmount();

    return (
        <div>
            <div className="d-flex justify-content-between">
                <div className="d-flex my-2">
                    <img className="cartImg" src={data.productImage} alt={data.productName} />
                    <p className='col-7 col-md-8'>{data.productName}</p>
                </div>
                <p> N{itemSubtotal}</p>
            </div>
        </div>
    )
}

export default CheckoutItem