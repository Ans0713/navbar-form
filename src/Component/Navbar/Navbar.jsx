import React from 'react';
import './Navbar.css';
import search_icon_light from '../../assets/search-w.png';
import search_icon_dark from '../../assets/search-b.png';
import toggle_icon_light from '../../assets/day.png';
import toggle_icon_dark from '../../assets/night.png';

const Navbar = ({username,theme,setTheme}) => {
    const toggle_mode = ()=> {
        theme=== "light"? setTheme('dark') : setTheme('light');
    }
  return (
    <>
   
    <div style={theme=== "light"?{backgroundColor:"lightcoral"}:{backgroundColor:"rgb(118, 33, 33)"}} className='navbar'>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Login</li>
        <li>Navbar</li>
      </ul>

      <div className='search-box'>
        <input type="text" placeholder='Search'/>
        <img src={search_icon_light} alt="Search Icon" />
      </div>
      

      <img onClick={()=>{toggle_mode()}} src={theme=== "light"? toggle_icon_light : toggle_icon_dark} alt="Toggle Icon" className='toggle-icon'/>
    </div>
    <div className="hello">hello, How are you {username}</div>
    </>
  );
}
export default Navbar; 
