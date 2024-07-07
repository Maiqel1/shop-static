import React from 'react';
import product1 from "../../../src/assets/images/img4.png";
import product2 from "../../../src/assets/images/img1.png";
import product3 from "../../../src/assets/images/img2.png";
import product4 from "../../../src/assets/images/img3.png";
import { ShoppingCart } from 'phosphor-react';

function Products({ text }) {

  let location = window.location.pathname;

  return (
    <div className='products my-3'>
      <div className='d-flex my-4 mx-4 justify-content-between'>
        <h4>{text[0]}</h4>
        <p className={location === '/cart' && 'd-none'}>View More</p>
      </div>
      <div className='d-flex flex-column flex-md-row align-items-center justify-content-center mx-auto px-5'>
        <div className=''>
          <img src={product1} alt="" className='img-fluid' />
          <div>
            <p><b>Levi's - Slim Fit - Denim - Dark Indigo</b></p>
            <p>N35,000</p>
            <div className='addToCartDiv text-white d-flex justify-content-center'>
              <ShoppingCart size={18} />
              Add to cart
            </div>
          </div>
        </div>
        <div className='mx-0 mx-sm-5 my-4'>
          <img src={product2} alt="" className='img-fluid' />
          <div>
            <p><b>Levi's - Slim Fit - Denim - Dark Indigo</b></p>
            <p>N35.000</p>
            <div className='addToCartDiv text-white d-flex justify-content-center'>
              <ShoppingCart size={18} />
              Add to cart
            </div>
          </div>
        </div>
        <div className=''>
          <img src={product3} alt="" className='img-fluid' />
          <div>
            <p><b>Levi's - Slim Fit - Denim - Dark Indigo</b></p>
            <p>N35.000</p>
            <div className='addToCartDiv text-white d-flex justify-content-center'>
              <ShoppingCart size={18} />
              Add to cart
            </div>
          </div>
        </div>
        <div className='d-none d-sm-none d-md-none d-lg-block ms-5'>
          <img src={product4} alt="" className='img-fluid' />
          <div>
            <p><b>Levi's - Slim Fit - Denim - Dark Indigo</b></p>
            <p>N35.000</p>
            <div className='addToCartDiv text-white d-flex justify-content-center'>
              <ShoppingCart size={18} />
              Add to cart
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
