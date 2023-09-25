import React from 'react'
import { NavLink } from 'react-router-dom'

const Buy = () => {
  return (
    <>
      <div className="buy-body">
        <div className="navbar buy-navbar">
          <h1><i class="fa-brands fa-shopify"></i> <span>S</span>mash <span>Boot</span></h1>
          <div className="nav buy-nav">
            <NavLink className='buy-navlink' to={'/'}>Home</NavLink>
            <NavLink className='buy-navlink' to={'/Mens'}>Men's Collection</NavLink>
            <NavLink className='buy-navlink' to={'/Womens'}>Women's Collection</NavLink>
            <NavLink className='buy-navlink' to={'/Buy'}>Buy</NavLink>
          </div>
        </div>
        
        <div className="buy-container">
          <div className="buy-content">
            <h1>Be a part for our company</h1>
            <h2>Let me know your desparate orders</h2>
            <h2>Precise Business Ahead</h2>
            <h2>Despirate Occuurence for your Orders</h2>
            <h2>50% Off for everything</h2>
            <p>Give your response here&nbsp; <i class="fa-solid fa-hand-point-right"></i></p>
            <p>Follow Us</p>
            <div className="buy-follow-link">
              <a href="#"><i class="fa-brands fa-instagram"></i></a>
              <a href=""><i class="fa-brands fa-linkedin"></i></a>
              <a href=""><i class="fa-brands fa-facebook"></i></a>
            </div>
          </div>
          <div className="buy-form">
            <form action="https://formsubmit.co/3469harshsharma@gmail.com" method='POST' target='_blank'>
              <div className="input-box">
                <h1><span>S</span>mash <span>Boot</span> <i class="fa-brands fa-shopify"></i></h1>
              </div>
              <div className="input-box">
                <label htmlFor="name">Enter Your Name&nbsp; <i class="fa-solid fa-user"></i></label>
                <input type="text" name='Name' placeholder='Your Name' required/>
              </div>
              <div className="form-line"></div>
              <div className="input-box">
                <label htmlFor="email">Enter Your Email&nbsp; <i class="fa-regular fa-envelope"></i></label>
                <input type="email" name='Email' placeholder='Your Email' required/>
              </div>
              <div className="form-line"></div>
              <div className="input-box">
                <label htmlFor="number">Enter Your Phone Number&nbsp; <i class="fa-solid fa-mobile-screen"></i></label>
                <input type="number" name='Phone' placeholder='Your Phone' required/>
              </div>
              <div className="form-line"></div>
              <div className="input-box">
                <label htmlFor="address">Enter Your Address / City&nbsp; <i class="fa-regular fa-address-card"></i></label>
                <input type="text" name='Address' placeholder='Your Address' required/>
              </div>
              <div className="form-line"></div>
              <div className="input-box">
                <label htmlFor="order">Give Your Order&nbsp; <i class="fa-brands fa-jedi-order"></i></label>
                <textarea name="Order" cols="30" rows="4" placeholder='Your Order Here' required></textarea>
              </div>
              <div className="form-line"></div>
              <div className="input-box">
                <button type='submit'>Order Now</button>
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

export default Buy