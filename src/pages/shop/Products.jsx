import React from 'react';
import { PRODUCTS } from '../../products';
import Product from './Product';
// import { ShoppingCart } from 'phosphor-react';
// import { Link } from 'react-router-dom';


function Products({ text }) {

  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // };

  let location = window.location.pathname;

  return (
    <div className='products my-4 pb-2'>
      <div className='d-flex my-4 pt-3 mx-4 justify-content-between'>
        <h4 className=''>{text[0]}</h4>
        <p className={location === '/cart' ? 'd-none' : 'viewMoreP d-block d-sm-block d-md-none'}>View More</p>
        <button className={location === '/cart' ? 'd-none' : 'viewMore p-2 d-none d-sm-none d-md-block'}>View more</button>
      </div>
      <div className='d-flex flex-column flex-md-row align-items-center justify-content-center mx-auto px-5'>
        {PRODUCTS.map((product) => (
          <div key={product.id} className='mx-0 mx-sm-2 my-4'>
            <Product data={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
