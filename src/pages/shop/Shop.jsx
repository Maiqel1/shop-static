import React, { useEffect } from 'react'
import Hero from '../../components/Hero'
import Products from './Products'
import DisplaySection from '../../components/DisplaySection'
import CompleteOutfits from '../../components/CompleteOutfits'
import Newsletter from '../../components/Newsletter'
import Footer from '../../components/Footer'

function Shop() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToTop()
  }, [])

  return (
    <div className=''>
      <Hero />
      <Products text={["New In",]} />
      <DisplaySection />
      <Products text={['Sweatshirts & Jackets']} />
      <Products text={['Shirts']} />
      <CompleteOutfits />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Shop