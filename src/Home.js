import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'
import shoe1 from './images/shoe1.png'
import shoe2 from './images/shoe2.png'
import shoe3 from './images/shoe4.png'
import shoe4 from './images/shoe5.png'

const Home = () => {
  return (
    <>
      <div className="home-body h-auto mx-0 px-0 box-border">
        <div className="navbar">
          <h1><i class="fa-brands fa-shopify"></i> Smash Boot</h1>
          <div className="nav">
            <a href="#">Home</a>
            <a href="#services">Services</a>
            <a href="#product">Product</a>
            <a href="#contact">Contact</a>
            <NavLink to={'/Buy'}>Buy</NavLink>
          </div>
        </div>

        <div className="head1">
          <img src={shoe1} alt="shoe1" />
          <div className="head1-content content1">
            <h1><i class="fa-brands fa-shopify"></i>  </h1>
            <h1><span>Smash</span> Boot Store</h1>
            <h2><span>50%</span> Off with your choice</h2>
          </div>  
          <div className="head1-content content2">
            <h1><span>Shoe</span> Store</h1>
            <h1>Your <span>Comfort</span></h1>
            <h1><span>Matters</span></h1>
            <button><NavLink to={'/Buy'}>Buy Now</NavLink></button>
          </div>
        </div>

        <div className="services" id='services'>
          <h1>Our Services&nbsp; <i class="fa-regular fa-handshake"></i></h1>
          <div className="services-box">
            <div className="service-box">
              <h1>Fulfil <span>Product</span></h1>
              <i class="fa-solid fa-face-smile"></i>  
            </div>
            <div className="service-box">
              <h1>Quick <span>Service</span></h1>
              <i class="fa-solid fa-headset"></i> 
            </div>
            <div className="service-box">
              <h1>Fast <span>Delivery</span></h1>
              <i class="fa-solid fa-truck-fast"></i>
            </div>
            <div className="service-box">
              <h1>Discount <span>Service</span></h1>
              <i class="fa-solid fa-sack-dollar"></i>  
            </div>
            <div className="service-box">
              <h1>Global <span>Sustain</span></h1>
              <i class="fa-solid fa-globe"></i>
            </div>
            <div className="service-box">
              <h1>Source <span>Company</span></h1>
              <i class="fa-brands fa-hive"></i> 
            </div>
            <div className="service-box">
              <h1>Service <span>Owner</span></h1>
              <i class="fa-solid fa-user-tie"></i> 
            </div>
          </div>
        </div>

        <div className="product" id='product'>
          <h1>Our Product&nbsp; <i class="fa-solid fa-shoe-prints"></i></h1>
          <div className="product-box">
            <NavLink to={'/Mens'} className="product-boxes">
              <img src={shoe2} alt="shoe" />
              <h1>Men's <span>Collection</span></h1>
            </NavLink>
            <NavLink to={'/Womens'} className="product-boxes">
              <img src={shoe3} alt="shoe" />
              <h1>Women's <span>Collection</span></h1>
            </NavLink>
          </div>
        </div>

        <div className="contact" id='contact'>
          <h1>Contact Us&nbsp; <i class="fa-solid fa-mobile-screen-button"></i></h1>
          <div className="contact-content">
            <div className="content-head">
              <h1><span>Get </span>Touch<span> With</span> Us&nbsp; <i class="fa-regular fa-thumbs-up"></i></h1>
              <h2>We are contribute you to be a part of our company&nbsp; <i class="fa-solid fa-bolt"></i></h2>
            </div>
            <form className='contact-form' action="https://formsubmit.co/3469harshsharma@gmail.com" method='POST' target='_blank'>
              <h1><i class="fa-brands fa-shopify"></i> Smash Boot</h1>
              <div className="input-here">
                <input name='Name' type="text" placeholder='Your Name 👤' required/>
              </div>
              <div className="line"></div>
              <div className="input-here">
                <input name='Email' type="email" placeholder='Your Email 📩' required/>
              </div>
              <div className="line"></div>
              <div className="input-here">
                <input name='Phone Number' type="number" placeholder='Your Phone Number 📱' required/>
              </div>
              <div className="line"></div>
              <div className="input-here">
                <button type='submit'>Submit</button>
              </div>
            </form>
          </div> 
        </div>

        <div className="footer">
          <h1><i class="fa-regular fa-copyright"></i> Smash Boot | All Right Reserved</h1>
        </div>
      </div>
    </>
  )
}

export default Home