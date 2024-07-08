import React from 'react'
import heroImg from '../assets/images/img9.png'


function Hero() {
  return (
    <>
      <div>
        <div className='row hero d-block d-sm-none mt-4 '>
          <div className=' col-12 col-md-6 hero-text '>
            <h2 className='col-12 col-sm-10'>Style Meets <span >Convenience,</span> Shop Seamlessly.</h2>
            <p className='col-12 col-sm-10'>Step into style with our curated collection of trendsetting sneakers and fashion-forward clothing.</p>
            <div className='d-flex col-12 col-sm-10'>
              <div className='heroDiv p-3 text-white'>Shop men</div>
              <div className='heroDiv text-white p-3 mx-3'>Shop Women</div>
            </div>
          </div>
          <div className='col-12 col-sm-6 mt-4'>
            <img src={heroImg} className='' alt="heroImg" />
          </div>
        </div>
      </div>


      <div className="heroLg d-none d-sm-block py-auto my-auto pt-5">
        <div className=' col-12 col-md-6 hero-text mt-5 '>
          <h2 className='mt-5 pt-5'>Style Meets <span >Convenience</span>,<br /> Shop Seamlessly.</h2>
          <p>Step into style with our curated collection of trendsetting sneakers and fashion-forward clothing.</p>
          <div className='d-flex '>
            <div className='heroDiv p-3 text-white'>Shop men</div>
            <div className='heroDiv text-white p-3 mx-3'>Shop Women</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero