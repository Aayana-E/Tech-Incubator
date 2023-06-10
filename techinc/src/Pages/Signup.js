import React, { useState } from 'react';
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';
import UserPool from '../backend/UserPool';
import firebaseConfig from '../backend/firebaseConfig';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import '../Style/Signup.css';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebase.database();


function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [picture, setPicture] = useState('');
  const [type, setType] = useState('Student');

  const onSubmit = async (event) => {
    event.preventDefault();

    const attributeList = [
      new CognitoUserAttribute({ Name: 'name', Value: name }),
      new CognitoUserAttribute({ Name: 'email', Value: email }),
      new CognitoUserAttribute({ Name: 'picture', Value: picture }),
      new CognitoUserAttribute({ Name: 'custom:Type', Value: type }),
    ];

    // Sign up the user in AWS Cognito works
    UserPool.signUp(email, password, attributeList, null, (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('Signup successful:', data);

      // Save user data to Firebase
      firebase
        .database()
        .ref('users')
        .push({
          name: name,
          email: email,
          picture: picture,
          type: type,
        })
        .then(() => {
          console.log('User data saved to Firebase');
          window.location.href = "/profile"; 
        })
        .catch((error) => {
          console.error('Failed to save user data to Firebase:', error);
          // Handle Firebase error
        });
    });
  };

  return (
    <div className='signup-container'>
      <form onSubmit={onSubmit} className='signup-form'>
        <h1>Signup</h1>

        <div className='input-field'>
          <label>
            Name
            <input value={name} onChange={(event) => setName(event.target.value)} />
          </label>
        </div>

        <div className='input-field'>
          <label>
            Email
            <input value={email} onChange={(event) => setEmail(event.target.value)} />
          </label>
        </div>

        <div className='input-field'>
          <label>
            Password
            <input value={password} onChange={(event) => setPassword(event.target.value)} type='password' />
          </label>
        </div>

        <div className='input-field'>
          <label>
            Picture URL
            <input value={picture} onChange={(event) => setPicture(event.target.value)} />
          </label>
        </div>

        <div className='input-field'>
          <label>
            Type
            <select value={type} onChange={(event) => setType(event.target.value)}>
              <option value='Company'>Company</option>
              <option value='Student'>Student</option>
            </select>
          </label>
        </div>

        <button type='submit'>Signup</button>
      </form>
    </div>
  );
}

export default Signup;
