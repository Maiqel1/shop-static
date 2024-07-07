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
                        {PRODUCTS.map((product) => {
                            if (cartItems[product.id] > 0) {
                                return <CheckoutItem key={product.id} data={product} />;
                            }
                        })}
                        <div className="d-flex justify-content-between">
                            <p>Subtotal</p>
                            <p>N{totalAmount}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p>Shipping</p>
                            <p>N5000</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <form>
                        <h4>DELVERY DETALS</h4>
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
                        {PRODUCTS.map((product) => {
                            if (cartItems[product.id] > 0) {
                                return <CheckoutItem key={product.id} data={product} />;
                            }
                        })}
                        <div className="d-flex justify-content-between">
                            <p>Subtotal</p>
                            <p>N{totalAmount}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p>Shipping</p>
                            <p>N5000</p>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-9 mt-3 '>
                    <h4>PAYMENT</h4>
                    <div className='border border-black px-4 py-3 col-12 col-md-9 d-flex'>
                        <input type="radio" className="" checked />
                        <h5 className='ms-3'>Card Payment</h5>
                    </div>
                    <div className='border border-black px-4 py-3 col-12 col-md-9 d-flex'>
                        <input type="radio" className="" checked />
                        <h5 className='ms-3'>Bank Transfer</h5>
                    </div>
                    <div className='border border-black px-4 py-3 col-12 col-md-9 d-flex'>
                        <input type="radio" className="" checked />
                        <h5 className='ms-3'>Crypto Payment</h5>
                    </div>
                    <button className='btn-block btn-lg btn-success col-12 col-md-9 text-white mb-5'>Pay Now</button>
                </div>
            </div>
            <Newsletter />
            <Footer />
        </div>
    );
}

export default Checkout;
