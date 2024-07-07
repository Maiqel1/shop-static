import React from 'react'
import { EnvelopeSimple } from 'phosphor-react'

function Newsletter() {
  return (
    <div className='newsletterDiv p-5 text-center'>
      <h4>Subscribe to our newsletter to get updates
        to our latest collection</h4>
      <p>Get 20% off your first order by subscribing to our newsletter</p>
      <form className='d-flex'>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text bg-white border-0">
              <EnvelopeSimple size={18} />
            </span>
          </div>
          <input
            type="email"
            className="form-control border-left-0"
            placeholder="Enter your email"
            aria-label="Email"
          />
        </div>
        <div className='newsBtn'>Subscribe</div>
      </form>
      <p className='pt-3'>You’ll be able to unsubscribe at any time.
        Read our Privacy Policy <b>here</b></p>
    </div>)

}

export default Newsletter