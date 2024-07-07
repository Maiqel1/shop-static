import React from 'react'
import heroImg from '../assets/images/img9.png'
import heroImgLg from '../assets/images/img8.png'


function Hero() {
  return (
    <>
      <div>
        <div className='row hero d-block d-md-none '>
          <div className=' col-12 col-md-6 hero-text '>
            <h2>Style Meets <span >Convenience</span>,<br /> Shop Seamlessly.</h2>
            <p>Step into style with our curated collection of trendsetting sneakers and fashion-forward clothing.</p>
            <div className='d-flex'>
              <div className='heroDiv p-3 text-white'>Shop men</div>
              <div className='heroDiv text-white p-3 mx-3'>Shop Women</div>
            </div>
          </div>
          <div className='col-md-6'>
            <img src={heroImg} className='' alt="" />
          </div>
        </div>
      </div>
      <div className="heroLg d-none d-md-block">

      </div>
    </>
  )
}

export default Hero