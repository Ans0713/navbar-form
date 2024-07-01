import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import search_icon_light from '../../assets/search-w.png';
import search_icon_dark from '../../assets/search-b.png';
import toggle_icon_light from '../../assets/day.png';
import toggle_icon_dark from '../../assets/night.png';

const Navbar = ({ username = 'User', theme, setTheme }) => {
  const toggle_mode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <div className={`navbar ${theme}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>

        <div className="search-box">
          <input type="text" placeholder="Search" />
          <img src={theme === 'light' ? search_icon_light : search_icon_dark} alt="Search Icon" />
        </div>

        <img
          onClick={toggle_mode}
          src={theme === 'light' ? toggle_icon_light : toggle_icon_dark}
          alt="Toggle Icon"
          className="toggle-icon"
        />
      </div>
      <div className="hello">Hello, How are you {username}?</div>
    </>
  );
};

export default Navbar;
