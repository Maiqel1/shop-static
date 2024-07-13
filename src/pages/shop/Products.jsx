import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import Product from './Product';

function Products({ text }) {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const { apiData, currentPage, totalPages, setCurrentPage } = useContext(ShopContext);

  if (!apiData.length) {
    return <div>Loading...</div>;
  }

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className='products my-4 pb-2'>
      <div className='d-flex my-4 pt-3 mx-4 justify-content-between'>
        <h4 className=''>{text[0]}</h4>
        <p className={window.location.pathname === '/cart' ? 'd-none' : 'viewMoreP d-block d-sm-block d-md-none'}>View More</p>
        <button className={window.location.pathname === '/cart' ? 'd-none' : 'viewMore p-2 d-none d-sm-none d-md-block'}>View more</button>
      </div>
      <div className='row'>
        {apiData.map((product) => (
          <div key={product.id} className='col-12 col-sm-6 col-md-4 col-lg-3 my-4'>
            <Product data={product} />
          </div>
        ))}
      </div>
      <div className='pagination-controls d-flex justify-content-between my-4'>
        <button onClick={handlePrevPage} disabled={currentPage === 1} className='btn btn-primary'>
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={() => { handleNextPage(); scrollToTop() }} disabled={currentPage === totalPages} className='btn btn-primary'>
          Next
        </button>
      </div>
    </div>
  );
}

export default Products;
