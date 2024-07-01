import React, { useState } from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar'; 
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';

const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <Router>
      <Navbar theme={theme} setTheme={setTheme} username="" /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;

