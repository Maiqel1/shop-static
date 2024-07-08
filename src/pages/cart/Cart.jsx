import React, { useContext } from 'react';
import product1 from "../../../src/assets/images/img2.png";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Products from '../shop/Products';
import Newsletter from '../../components/Newsletter';
import Footer from '../../components/Footer';

function Cart() {
  let navigate = useNavigate();

  return (
    <div className='cart row mt-4' >
      <div className="cartDiv col-12 col-lg-8">
        <div className='row'>
          <div className='col-12 d-flex justify-content-between'>
            <div className="col-6"><p>PRODUCT</p></div>
            <div className="col-2"><p>PRICE</p></div>
            <div className="col-2 me-4 me-sm-0"><p>QUANTITY</p></div>
            <div className="col-2 d-none d-sm-none d-md-block d-lg-block"><p>SUBTOTAL</p></div>
          </div>
        </div>
        <div className='cartItem row d-flex justify-content-between'>
          <div className="col-6">
            <div className="d-flex" >
              <p className='mt-3 pe-1'>X</p>
              <img className="cartImg" src={product1} />
              <p>Levi's - Slim Fit - Denim - Dark Indigo</p>
            </div>
          </div>
          <div className="col-2">
            <p>N35,000</p>
          </div>
          <div className="col-2 me-4 me-sm-0">
            <p className='ps-4'>1</p>
          </div>
          <div className="col-2 d-none d-sm-none d-md-block d-lg-block">
            <p>N35,000</p>
          </div>
        </div>
      </div>
      <div className="cartTotal col-8 col-sm-8 col-md-6 col-lg-4 mt-3 mt-sm-0">
        <h4>CART TOTALS</h4>
        <div className='d-flex justify-content-between my-3'>
          <h4>SUBTOTAL</h4>
          <h4>N35,000</h4>
        </div>
        <h4 className='my-3'>SHIPPING</h4>
        <h4>Shipping: <b>N35000</b></h4>
        <p style={{ fontSize: "14px" }}>SHIPPING TO <b>KAFACHAN</b></p>
        <form className='d-flex'>
          <input type="text" className='col-8' placeholder='COUPON CODE' />
          <div className='p-3 ms-2 apply'>APPLY</div>
        </form>
        <h4 className='my-3'>TOTAL</h4>
        <Link to="/checkout" className='checkoutBtnL'>
          <button className="checkoutBtn col-12 btn-lg btn-block">
            Proceed to Checkout
          </button>
        </Link>
      </div>
      <Products text={['Suggestions']} />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Cart;
