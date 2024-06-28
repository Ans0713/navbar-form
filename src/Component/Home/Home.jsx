import React, { useState } from 'react'
import Login from '../Login/Login';
import Navbar from '../Navbar/Navbar';

const Home = ({theme, setTheme}) => {
    const [username, setUsername] = useState('');

  return (
    <>
    {username===''?<Login username={username} setUsername={setUsername}/>:<Navbar username={username} theme={theme} setTheme={setTheme}/>}
    </>
  )
}

export default Home