import React, { useState } from 'react';
import axios from 'axios';


function App() {
  const [signupData, setSignupData] = useState({ username: '', password: '' });
  const [loginData, setLoginData] = useState({ username: '', password: '' });

  const handleSignup = async () => {
    try {
      await axios.post('http://localhost:8089/api/v1/user/signup', signupData);
      console.log('Signup successful');
    } catch (error) {
      console.error('Signup failed:', error.response ? error.response.data : error.message);
    }
  };
  
  const handleLogin = async () => {
    try {
      await axios.post('http://localhost:8089/api/v1/user/login', loginData);
      console.log('Login successful');
    } catch (error) {
      console.error('Login failed:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div>
      <h1>React MongoDB App</h1>

      <div>
        <h2>Signup</h2>
        <input
          type="text"
          placeholder="Username"
          value={signupData.username}
          onChange={(e) => setSignupData({ ...signupData, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={signupData.password}
          onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
        />
        <button onClick={handleSignup}>Signup</button>
      </div>

      <div>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={loginData.username}
          onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={loginData.password}
          onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default App;
