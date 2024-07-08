import React from 'react';
import footerLogo from '../assets/images/logo-footer.png';
import instagram from '../assets/images/instagram.png';
import twitter from '../assets/images/twitter.png';

function Footer() {
    return (
        <div className='p-5 footer'>
            <div className='row mx-auto text-center text-md-start'>
                <div className='col-12 col-md-4 col-lg-4 mb-3 mb-md-0'>
                    <ul className='d-flex flex-column align-items-center align-items-md-start'>
                        <div className="bg-white footer-logo"><img src={footerLogo} alt="Logo" /></div>
                        <div className='d-flex mt-3 ps-4 ps-sm-2 justify-content-center justify-content-md-start'>
                            <div className=""><img src={instagram} alt="Instagram" /></div>
                            <div className="mx-5"><img src={twitter} alt="Twitter" /></div>
                        </div>
                    </ul>
                </div>
                <div className='col-12 col-md-2 col-lg-2 mb-3 mb-md-0 m'>
                    <ul className='d-flex flex-column align-items-center align-items-md-start pe-3 pe-sm-0'>
                        <li><h6>ABOUT US</h6></li>
                        <li><p>Our Story</p></li>
                        <li><p>FAQs</p></li>
                        <li><p>Terms of Service</p></li>
                    </ul>
                </div>
                <div className='col-12 col-md-2 col-lg-2 mb-3 mb-md-0'>
                    <ul className='d-flex flex-column align-items-center align-items-md-start pe-3 pe-sm-0'>
                        <li><h6>HELP</h6></li>
                        <li><p>Get Help </p></li>
                        <li><p>Shipping</p></li>
                        <li><p>Delivery</p></li>
                        <li><p>Returns</p></li>
                        <li><p>Order Cancellation</p></li>
                    </ul>
                </div>
                <div className='col-12 col-md-2 col-lg-2 mb-3 mb-md-0'>
                    <ul className='d-flex flex-column align-items-center align-items-md-start pe-3 pe-sm-0'>
                        <li><h6>SHOP</h6></li>
                        <li><p>Shirts</p></li>
                        <li><p>Sweatshirts</p></li>
                        <li><p>Sneakers</p></li>
                        <li><p>Trousers</p></li>
                        <li><p>Shorts</p></li>
                    </ul>
                </div>
                <div className='col-12 col-md-2 col-lg-2'>
                    <ul className='d-flex flex-column align-items-center align-items-md-start pe-3 pe-sm-0'>
                        <li><h6>CONTACT US</h6></li>
                        <li><p>Email</p></li>
                        <li><p>Phone Number</p></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
