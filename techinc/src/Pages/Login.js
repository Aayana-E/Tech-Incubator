import React, { useState } from 'react';
import "../Style/Login.css"

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
 
  const handleSubmit = (event) => {
    event.preventDefault();
    //Signed in
    setLoggedIn(true);

    console.log('Email:', email);
    console.log('Password:', password);
  };


  
    if (loggedIn) {
      // Redirect the user to the test page
      // You can replace '/test' with the desired path
      window.location.href = '/test';
    }
 

  return (
    <div className='login-containter'>
      
      <div className='login-form'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit} >
        
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
