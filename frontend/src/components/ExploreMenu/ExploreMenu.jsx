import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            onClick={() =>
              setCategory((prev) => (prev === item.menu_name ? 'All' : item.menu_name))
            }
            key={index}
            className={`explore-menu-list-item ${category === item.menu_name ? 'active' : ''}`}
          >
            <div className="menu-img-wrapper">
              <img src={item.menu_image} alt={item.menu_name} />
            </div>
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;