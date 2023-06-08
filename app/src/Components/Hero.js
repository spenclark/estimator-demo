import React from 'react'
import "./css/hero.css"

function Hero() {
  return (
    <div className='hero'>
        <h1 className='hero_title'>Never have uncertainty on a bid again</h1>
        <h4 className='sub_title'>EstimatorHero is an intelligent side-kick that uses public filing data to help you competitive your bid is with local business</h4>
        <button className='CallToActionButton'>
          Test your bid
        </button>
    </div>
  )
}

export default Hero