import React from 'react'
import "./Hero.css"
import Navbar from '../../navbar/Navbar'

function Hero() {
  return (
    <>
    <section className='hero-section'>
        <Navbar/>
        <div className='hero-section-text'>
            <h1>Music <samp className='hero-section-text-spam' >For</samp> Everyone</h1>
            <button>Start learning</button>
        </div>
    </section>
    </>
  )
}

export default Hero