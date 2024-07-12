import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';


function CheckoutItem({ data }) {
    const { cartItems } = useContext(ShopContext);
    const itemSubtotal = (data.price * cartItems[data.id]).toFixed(2);

    return (
        <div>
            <div className="d-flex justify-content-between">
                <div className="d-flex my-2">
                    <img className="cartImg" src={data.productImage} alt={data.productName} />
                    <p className='col-7 col-md-8 productName'>{data.productName}</p>
                </div>
                <p className='productPrice'> N{itemSubtotal}</p>
            </div>
        </div>
    )
}

export default CheckoutItem