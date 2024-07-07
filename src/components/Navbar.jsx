import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, MagnifyingGlass, User } from 'phosphor-react'
import logo from '../assets/images/logo.png'

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-[#FFFFFF]">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to="/" className="navbar-brand mx-auto d-lg-none" >
            <img src={logo} alt="Logo" className="navbar-logo" />
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">New In</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Men</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Women</a>
              </li>
            </ul>
            <Link to="/" className="navbar-brand mx-auto d-none d-lg-block" >
              <img src={logo} alt="Logo" className="navbar-logo" />
            </Link>
            <ul className="navbar-nav ms-auto d-none d-lg-flex">
              <li className="nav-item">
                <a className="nav-link" href="#search"><MagnifyingGlass size={18} /></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">NGN</a>
              </li>
              <li className="nav-item">
                <a className="nav-link"><Link to={"/cart"}><ShoppingCart size={18} /></Link></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#user"><User size={18} /></a>
              </li>
            </ul>
          </div>
          <div className="d-lg-none d-flex ms-auto">
            <a className="nav-link" href="#">NGN</a>
            <a className="nav-link mx-3"><Link to={"/cart"}><ShoppingCart size={18} /></Link></a>
          </div>
        </div>
      </nav>
    </>

  )
}

export default Navbar