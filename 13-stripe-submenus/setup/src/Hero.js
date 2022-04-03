import React from 'react'
import phoneImg from './images/phone.svg'

const Hero = () => {
  return <section className="main">
    <div className="main__text">
      <h1>Payments <br /> infrastructure <br/>for the internet</h1>
      <h4>Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.</h4>
      <button className="main__start-btn">Start Now</button>
    </div>

    <div className="phone__wrapper">
      <img className='phone__img' src={phoneImg} />
    </div>
  </section>
}

export default Hero
