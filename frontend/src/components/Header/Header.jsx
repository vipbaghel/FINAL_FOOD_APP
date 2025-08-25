import React from 'react';
import './Header.css';
import headerImg from '../../assets/header_img.png'; // Use your header image

const Header = () => {
  return (
    <div
      className="header"
      style={{
        backgroundImage: `url(${headerImg})`,
      }}
    >
      <div className="header-overlay">
        <div className="header-contents">
          <h2>Order Your Favourite Food Here</h2>
          <p>
            Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Satisfy your cravings and elevate your dining experience, one delicious meal at a time.
          </p>
          <button className="header-btn">View Menu</button>
        </div>
      </div>
    </div>
  );
};

export default Header;