import React from 'react'
import { PRODUCTS } from '../../products'
import Product from './Product'
import './shop.css'

function Shop() {
  return (
    <div className='shop'>
      <div>
        <h1 className='shopTitle'>Stage 1 Shop</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => {
          return <Product data={product}/>
        })}
      </div>
    </div>
  )
}

export default Shop