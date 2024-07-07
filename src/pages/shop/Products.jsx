import React from 'react';
import { PRODUCTS } from '../../products';
import Product from './Product';

function Products({ text }) {

  let location = window.location.pathname;

  return (
    <div className='products my-3'>
      <div className='d-flex my-4 mx-4 justify-content-between'>
        <h4>{text[0]}</h4>
        <p className={location === '/cart' && 'd-none'}>View More</p>
      </div>
      <div className='d-flex flex-column flex-md-row align-items-center justify-content-center flex-wrap'>
        {PRODUCTS.map((product) => (
          <div key={product.id} className='d-flex flex-column align-items-center flex-fill p-2'>
            <Product data={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
