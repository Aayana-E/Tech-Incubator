import React, { useState } from 'react';
import '../Style/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Authenticate user and set loggedIn state to true
    // You can replace this with your authentication logic
    const isAuthenticated = true;
    if (isAuthenticated) {
      sessionStorage.setItem('isLoggedIn', 'true');
      console.log('Email:', email);
      console.log('Password:', password);
      window.location.href = '/profile';
    }
  };

  return (
    <div className='login-container'>
      <div className='login-form'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br />
          <label>
            Password:
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
          <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
