import React, { useContext, useState } from 'react';
import { ShopContext } from '../../context/ShopContext';
import CheckoutItem from './CheckoutItem';
import Newsletter from '../../components/Newsletter';
import Footer from '../../components/Footer';
import CheckoutModal from './CheckoutModal';

function Checkout() {
    const [modalState, setModalState] = useState(false);
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');

    const { cartItems, getTotalCartAmount, apiData } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    const checkFormData = () => {
        return (
            email.trim() !== '' &&
            country.trim() !== '' &&
            firstName.trim() !== '' &&
            lastName.trim() !== '' &&
            street.trim() !== '' &&
            city.trim() !== '' &&
            state.trim() !== '' &&
            postalCode.trim() !== '' &&
            phoneNumber.trim() !== '' &&
            paymentMethod !== ''
        );
    };

    const handlePayNowClick = () => {
        if (!checkFormData()) {
            alert('Please fill out all fields.');
        } else {
            setModalState(true);
        }
    };

    return (
        <div className="container checkout">
            <div className="row">
                {/* Checkout Items - Visible on Mobile */}
                <div className="col-12 d-block d-md-none mb-4">
                    <h4>CART</h4>
                    <div className="checkoutItems">
                        <div>
                            {apiData.map((product) => {
                                if (cartItems[product.id] > 0) {
                                    return <CheckoutItem key={product.id} data={product} />;
                                }
                            })}
                        </div>
                        <div className="mt-3 checkoutDiv2 d-flex justify-content-between">
                            <p>Subtotal</p>
                            <p>N{totalAmount}</p>
                        </div>
                        <div className="checkoutDiv2 d-flex justify-content-between">
                            <p>Shipping</p>
                            <p>N5,000</p>
                        </div>
                        <div className="checkoutDiv3 d-flex justify-content-between">
                            <p>Total</p>
                            <p>N{totalAmount + 5000}</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <form>
                        <h4>DELIVERY DETAILS</h4>
                        <div className="mb-3">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-control"
                                placeholder="Email or phone number"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                className="form-control"
                                placeholder="Country/Region"
                            />
                        </div>
                        <div className="mb-3 d-flex">
                            <input
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="form-control col-6 me-1"
                                placeholder="First Name"
                            />
                            <input
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="form-control col-6"
                                placeholder="Last Name"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                value={street}
                                onChange={(e) => setStreet(e.target.value)}
                                className="form-control"
                                placeholder="Street"
                            />
                        </div>
                        <div className="mb-3 d-flex">
                            <input
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                className="form-control col-4"
                                placeholder="City"
                            />
                            <input
                                type="text"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                className="form-control col-4 mx-1"
                                placeholder="State"
                            />
                            <input
                                type="text"
                                value={postalCode}
                                onChange={(e) => setPostalCode(e.target.value)}
                                className="form-control col-4"
                                placeholder="Postal code"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="number"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className="form-control"
                                placeholder="Phone number"
                            />
                        </div>
                        <div className="mb-3 d-flex">
                            <input type="checkbox" />
                            <p className='mt-2 ms-3'>Save this information for next time</p>
                        </div>
                    </form>
                </div>

                {/* Checkout Items - Hidden on Mobile */}
                <div className="col-12 col-md-6 d-none d-md-block">
                    <h4>CART</h4>
                    <div className="checkoutItems">
                        <div>
                            {apiData.map((product) => {
                                if (cartItems[product.id] > 0) {
                                    return <CheckoutItem key={product.id} data={product} />;
                                }
                            })}
                        </div>
                        <div className="checkoutDiv2 d-flex justify-content-between">
                            <p>Subtotal</p>
                            <p>N{totalAmount}</p>
                        </div>
                        <div className="checkoutDiv2 d-flex justify-content-between">
                            <p>Shipping</p>
                            <p>N5000</p>
                        </div>
                        <div className="checkoutDiv3 d-flex justify-content-between">
                            <p>Total</p>
                            <p>N{totalAmount + 5000}</p>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-md-9 mt-3 '>
                    <h4>PAYMENT</h4>
                    <div className='border border-black cardPayment px-4 py-3 col-12 col-md-9 mt-3 d-flex align-items-center'>
                        <input
                            type="radio"
                            id="card"
                            name="paymentMethod"
                            className="radio-input"
                            checked={paymentMethod === 'card'}
                            onChange={() => setPaymentMethod('card')}
                        />
                        <label htmlFor="card" className='ms-3 mb-0'>Card Payment</label>
                    </div>
                    <div className='border border-black bankTransfer px-4 py-3 col-12 col-md-9 d-flex align-items-center'>
                        <input
                            type="radio"
                            id="bank"
                            name="paymentMethod"
                            className="radio-input"
                            checked={paymentMethod === 'bank'}
                            onChange={() => setPaymentMethod('bank')}
                        />
                        <label htmlFor="bank" className='ms-3 mb-0'>Bank Transfer</label>
                    </div>
                    <div className='border border-black cryptoPayment px-4 py-3 col-12 col-md-9 d-flex align-items-center'>
                        <input
                            type="radio"
                            id="crypto"
                            name="paymentMethod"
                            className="radio-input"
                            checked={paymentMethod === 'crypto'}
                            onChange={() => setPaymentMethod('crypto')}
                        />
                        <label htmlFor="crypto" className='ms-3 mb-0'>Crypto Payment</label>
                    </div>
                    <button
                        className='btn-block btn-lg col-12 col-md-9 text-white mb-5 mt-3 payNow'
                        onClick={handlePayNowClick}
                    >
                        Pay Now
                    </button>
                </div>
            </div>
            <CheckoutModal isOpen={modalState} onClose={() => setModalState(false)} />
            <Newsletter />
            <Footer />
        </div>
    );
}

export default Checkout;
