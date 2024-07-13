import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';


function CheckoutModal({ isOpen, onClose, product }) {
    const { clearCart } = useContext(ShopContext);


    if (!isOpen) {
        return null;
    }

    return (
        <div className="modalOverlay" onClick={onClose}>
            <div className="modalContent p-5" onClick={(e) => e.stopPropagation()}>
                <h3>Congratulations! you have completed your payment</h3>
                <Link to={'/'}><button onClick={() => { clearCart() }} className='text-center'>Go back to homepage</button></Link>
            </div>
        </div>
    );
}

export default CheckoutModal;
