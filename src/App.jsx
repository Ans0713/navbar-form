import React, { useState } from 'react'
import Navbar from './Component/Navbar/Navbar'
import Home from './Component/Home/Home';

const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <div className='container'>
      <Home theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App