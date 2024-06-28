import React, { useState } from 'react';
import './Login.css';

const Login = ({ username, setUsername }) => {
  const [data, setData] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsername(data);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <label>Username:</label>
        <input 
          type="text" 
          id="username" 
          value={data}
          onChange={(e) => setData(e.target.value)} 
          required 
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
