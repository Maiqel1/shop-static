import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';


function CheckoutItem({ data }) {
    const { cartItems } = useContext(ShopContext);
    const productImageUrl = data.photos.length > 0 && `https://api.timbu.cloud/images/${data.photos[0].url}`
    const productPrice = data.current_price[0].NGN[0];
    const itemSubtotal = (productPrice * cartItems[data.id]).toFixed(2);

    return (
        <div>
            <div className="d-flex justify-content-between">
                <div className="d-flex my-2">
                    <img className="cartImg" src={productImageUrl} alt={data.name} />
                    <p className='col-7 col-md-8 productName'>{data.name}</p>
                </div>
                <p className='productPrice'> N{itemSubtotal}</p>
            </div>
        </div>
    )
}

export default CheckoutItem