import React, { useContext } from 'react';
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/ShopContext';
import CartItem from './CartItem';
import './cart.css';
import { useNavigate } from 'react-router-dom';
import Products from '../shop/Products';
import Newsletter from '../../components/Newsletter';
import Footer from '../../components/Footer';

function Cart() {
  let navigate = useNavigate();
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  return (
    <div className='cart row'>
      <div className="col-12 col-md-8">
        <div className="cartHeader">
          <div className="headerItem">PRODUCT</div>
          <div className="headerItem">PRICE</div>
          <div className="headerItem">QUANTITY</div>
          <div className="headerItem d-none d-md-block">SUBTOTAL</div>
        </div>
        <div className="cartItems">
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] > 0) {
              return <CartItem key={product.id} data={product} />;
            }
          })}
        </div>
        <div className="total"></div>
      </div>
      {totalAmount > 0 ? (
        <div className="col-12 col-md-4 ">
          <h4>CART TOTALS</h4>
          <div className='d-flex justify-content-between'>
            <h4>SUBTOTAL</h4>
            <p className=''>N{totalAmount}</p>
          </div>
          <h4>SHIPPING</h4>
          <p>Shipping : <b>N35000</b></p>
          <p>SHIPPING TO KAFACHAN</p>
          <form className='d-flex'>
            <input type="text" className='col-8' placeholder='COUPON CODE' />
            <div className='p-3 bg-dark'>APPLY</div>
          </form>
          <h4>TOTAL</h4>
          <div className="col-12">
            PROCEED TO CHECKOUT
          </div>
        </div>) : (
        <h2>Your cart is empty</h2>
      )}
      <Products text={['Suggestions']} />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Cart;
