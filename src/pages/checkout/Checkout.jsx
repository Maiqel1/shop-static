import React, { useContext } from 'react';
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/ShopContext';
import CheckoutItem from './CheckoutItem';
import Newsletter from '../../components/Newsletter';
import Footer from '../../components/Footer';

function Checkout() {

    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    return (
        <div className="container checkout">
            <div className="row">
                {/* Checkout Items - Visible on Mobile */}
                <div className="col-12 d-block d-md-none mb-4">
                    <h4>CART</h4>
                    <div className="checkoutItems">
                        <div>
                            {PRODUCTS.map((product) => {
                                if (cartItems[product.id] > 0) {
                                    return <CheckoutItem key={product.id} data={product} />;
                                }
                            })}

                        </div>
                        <div className=" mt-3 checkoutDiv2 d-flex justify-content-between">
                            <p>Subtotal</p>
                            <p>N35,000</p>
                        </div>
                        <div className=" checkoutDiv2 d-flex justify-content-between">
                            <p>Shipping</p>
                            <p>N5,000</p>
                        </div>
                        <div className=" checkoutDiv3 d-flex justify-content-between">
                            <p>Total</p>
                            <p>N5,000</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <form>
                        <h4>DELIVERY DETAILS</h4>
                        <div className="mb-3">
                            <input type="email" className="form-control" placeholder="Email or phone number" />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="Country/Region" />
                        </div>
                        <div className="mb-3 d-flex">
                            <input type="text" className="form-control col-6 me-1" placeholder="First Name" />
                            <input type="text" className="form-control col-6" placeholder="Last Name" />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="Street" />
                        </div>
                        <div className="mb-3 d-flex">
                            <input type="text" className="form-control col-4" placeholder="City" />
                            <input type="text" className="form-control col-4 mx-1" placeholder="State" />
                            <input type="text" className="form-control col-4" placeholder="Postal code" />
                        </div>
                        <div className="mb-3">
                            <input type="number" className="form-control" placeholder="Phone number" />
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
                            {PRODUCTS.map((product) => {
                                if (cartItems[product.id] > 0) {
                                    return <CheckoutItem key={product.id} data={product} />;
                                }
                            })}
                        </div>
                        <div className="checkoutDiv2 d-flex justify-content-between">
                            <p>Subtotal</p>
                            <p>N35,000</p>
                        </div>
                        <div className="checkoutDiv2 d-flex justify-content-between">
                            <p>Shipping</p>
                            <p>N5000</p>
                        </div>
                        <div className="checkoutDiv3 d-flex justify-content-between">
                            <p>Total</p>
                            <p>N{totalAmount}</p>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-9 mt-3 '>
                    <h4>PAYMENT</h4>
                    <div className='border border-black cardPayment px-4 py-3 col-12 col-md-9 mt-3 d-flex align-items-center'>
                        <input type="radio" id="card" checked className="radio-input" />
                        <label htmlFor="card" className='ms-3 mb-0'>Card Payment</label>
                    </div>
                    <div className='border border-black bankTransfer px-4 py-3 col-12 col-md-9 d-flex align-items-center'>
                        <input type="radio" id="bank" checked className="radio-input" />
                        <label htmlFor="bank" className='ms-3 mb-0'>Bank Transfer</label>
                    </div>
                    <div className='border border-black cryptoPayment px-4 py-3 col-12 col-md-9 d-flex align-items-center'>
                        <input type="radio" id="crypto" checked className="radio-input" />
                        <label htmlFor="crypto" className='ms-3 mb-0'>Crypto Payment</label>
                    </div>
                    <button className='btn-block btn-lg col-12 col-md-9 text-white mb-5 mt-3 payNow'>Pay Now</button>
                </div>

            </div>
            <Newsletter />
            <Footer />
        </div>
    );
}

export default Checkout;
