import React, { useContext, useState } from 'react';
import { ShopContext } from '../../context/ShopContext';
import { ShoppingCart } from 'phosphor-react';
import ProductModal from './ProductModal';

function Product({ data }) {
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemAmount = cartItems[data.id];
    const [modalState, setModalState] = useState(false);

    const productImageUrl = data.photos && data.photos.length > 0
        ? `https://api.timbu.cloud/images/${data.photos[0].url}`
        : null
    const productPrice = data.current_price[0].NGN[0];

    return (
        <div>
            <img src={productImageUrl} alt={data.name} className='img-fluid productImg' onClick={() => setModalState(!modalState)} />
            <div>
                <p className=''><b>{data.name}</b></p>
                <p>N{productPrice}</p>
                <div className='addToCartDiv text-white d-flex justify-content-center' onClick={() => addToCart(data.id)}>
                    <ShoppingCart size={18} />
                    Add to cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
                </div>
            </div>
            <ProductModal isOpen={modalState} onClose={() => setModalState(false)} product={data} />
        </div>
    );
}

export default Product;
