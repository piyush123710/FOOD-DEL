import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/storeContext';

const Navbar = ({ setShowLogin, cartItemCount = 0 }) => {
  const [menu, setMenu] = useState('home');

  const menuItems = [
    { name: 'home', label: 'Home', to: '/' },
    { name: 'menu', label: 'Menu', href: '#explore-menu' },
    { name: 'mobile-app', label: 'Mobile App', href: '#app-download' },
    { name: 'contact-us', label: 'Contact Us', href: '#footer' },
  ];

  const handleSignInClick = () => {
    if (setShowLogin) {
      setShowLogin(true);
    } else {
      console.warn('setShowLogin function is not provided');
    }
  };

  return (
    <nav className="navbar">
      <Link to='/'><img src={assets.logo} alt="Logo" className="logo" /></Link>

      <ul className="navbar-menu">
        {menuItems.map((item) =>
          item.to ? (
            <li key={item.name}>
              <Link
                to={item.to}
                onClick={() => setMenu(item.name)}
                className={menu === item.name ? 'active' : ''}
              >
                {item.label}
              </Link>
            </li>
          ) : (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={() => setMenu(item.name)}
                className={menu === item.name ? 'active' : ''}
              >
                {item.label}
              </a>
            </li>
          )
        )}
      </ul>

      <div className="navbar-right">
        <button className="icon-btn" aria-label="Search">
          <img src={assets.search_icon} alt="Search" />
        </button>
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Basket" />
          </Link>
          {cartItemCount > 0 && (
            <div className='dot' aria-label={`${cartItemCount} items in basket`}></div>
          )}
        </div>
        <button onClick={handleSignInClick} aria-label="Sign In">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

