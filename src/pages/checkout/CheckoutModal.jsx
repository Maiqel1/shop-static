import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import { CheckCircle } from 'phosphor-react';



function CheckoutModal({ isOpen, onClose, product }) {
    const { clearCart } = useContext(ShopContext);


    if (!isOpen) {
        return null;
    }

    return (
        <div className="modalOverlay" onClick={onClose}>
            <div className="modalContent p-5 d-flex flex-column justify-content-center align-items-center text-center" onClick={(e) => e.stopPropagation()}>
                <CheckCircle color={'green'} size={64} />
                <h3 className='my-4'>Congratulations! you have completed your payment</h3>
                <Link to={'/'}><button onClick={() => { clearCart() }} className='bg-primary p-2'>Go back to homepage</button></Link>
            </div>
        </div>
    );
}

export default CheckoutModal;
