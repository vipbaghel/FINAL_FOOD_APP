import React, { useState } from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const year = new Date().getFullYear();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
    setEmail('');
  };

  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
        <div class="logo">
  <span class="symbol spark"></span>
  BiteBuddy 🍴
</div>
        
          <div className='footer-social-icons'>
            <div className="footer-social-icon"><img src={assets.facebook_icon} alt="Facebook" /></div>
            <div className="footer-social-icon"><img src={assets.twitter_icon} alt="Twitter" /></div>
            <div className="footer-social-icon"><img src={assets.linkedin_icon} alt="LinkedIn" /></div>
          </div>
        </div>
        <div className='footer-content-center'>
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className='footer-content-right'>
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-212-456-7890</li>
            <li>Contact@tamato.com</li>
          </ul>
          <form className="footer-newsletter" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Subscribe for updates"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <button type="submit">{submitted ? "Subscribed!" : "Subscribe"}</button>
          </form>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright {year} @ BiteBuddy.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;