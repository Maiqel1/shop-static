import React, { useContext } from 'react';

import { ShopContext } from '../../context/ShopContext';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Products from '../shop/Products';
import Newsletter from '../../components/Newsletter';
import Footer from '../../components/Footer';
import { Trash } from 'phosphor-react';


function Cart() {
  // eslint-disable-next-line
  let navigate = useNavigate();
  const { cartItems, getTotalCartAmount, clearCart, apiData } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <div className='cart row mt-4' >
      {apiData.map((product) => {
        if (cartItems[product.id] > 0) {
          return <CartItem key={product.id} data={product} />;
        }
      })}

      {totalAmount > 0 ? (<div className="cartTotal col-8 col-sm-8 col-md-6 col-lg-4 mt-5 mt-sm-5 mt-md-5 mt-lg-4">
        <button className='btn btn-danger btn-lg mb-5' onClick={clearCart}>Clear cart <Trash /></button>
        <h4>CART TOTALS</h4>
        <div className='d-flex justify-content-between my-3'>
          <h4>SUBTOTAL</h4>
          <h4>N{totalAmount}</h4>
        </div>
        <h4 className='my-3'>SHIPPING</h4>
        <h4>Shipping: <b>N5000</b></h4>
        <p style={{ fontSize: "14px" }}>SHIPPING TO <b>KAFACHAN</b></p>
        <form className='d-flex'>
          <input type="text" className='col-8' placeholder='COUPON CODE' />
          <button onClick={(e) => e.preventDefault()} className='p-3 ms-2 apply'>APPLY</button>
        </form>
        <div className='d-flex justify-content-between my-3'>
          <h4>TOTAL</h4>
          <h4>N{totalAmount + 5000}</h4>
        </div>
        <Link to="/checkout" className='checkoutBtnL'>
          <button className="checkoutBtn col-12 btn-lg btn-block" onClick={scrollToTop}>
            Proceed to Checkout
          </button>
        </Link>
      </div>) : <h2>Your cart is Empty</h2>}

      <Products text={['Suggestions']} />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Cart;
