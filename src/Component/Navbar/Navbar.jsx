import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useDebounce from '../../Hooks/useDebounce'; 
import './Navbar.css';
import search_icon_light from '../../assets/search-w.png';
import search_icon_dark from '../../assets/search-b.png';
import toggle_icon_light from '../../assets/day.png';
import toggle_icon_dark from '../../assets/night.png';

const Navbar = ({ username = 'User', theme, setTheme, searchQuery, setSearchQuery }) => {
  const [inputValue, setInputValue] = useState(searchQuery);
  const debouncedInputValue = useDebounce(inputValue, 300); 

  useEffect(() => {
    if (debouncedInputValue !== searchQuery) { 
      setSearchQuery(debouncedInputValue); 
    }
  }, [debouncedInputValue, searchQuery, setSearchQuery]);

  const toggleMode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleSearchChange = (event) => {
    setInputValue(event.target.value);
  };
  

  return (
    <>
      <div className={`navbar ${theme}`}>
        <ul>
          <li><Link to="/" onClick={() => setSearchQuery('')}>Home</Link></li>
          <li><Link to="/about" onClick={() => setSearchQuery('')}>About</Link></li>
          <li><Link to="/login" onClick={() => setSearchQuery('')}>Login</Link></li>
        </ul>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search"
            value={inputValue}
            onChange={handleSearchChange}
          />
          <img src={theme === 'light' ? search_icon_light : search_icon_dark} alt="Search Icon" />
        </div>

        <img
          onClick={toggleMode}
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


