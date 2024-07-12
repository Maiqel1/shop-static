import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import { ShoppingCart } from 'phosphor-react';

function Product({ data }) {
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemAmount = cartItems[data.id];

    return (
        <div className=''>
            <img src={data.productImage} alt="" className='img-fluid productImg' />
            <div>
                <p><b>{data.productName}</b></p>
                <p>N{data.price}</p>
                <div className='addToCartDiv text-white d-flex justify-content-center' onClick={() => addToCart(data.id)}>
                    <ShoppingCart size={18} />
                    Add to cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
                </div>
            </div>
        </div>
    );
}

export default Product;