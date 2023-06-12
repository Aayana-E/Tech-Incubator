import React, { useEffect, useState } from 'react';
import firebaseConfig from '../backend/firebaseConfig';
import 'firebase/compat/database';
import firebase from 'firebase/compat/app';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function Profile() {
  const [userAttributes, setUserAttributes] = useState({});

  useEffect(() => {
    const fetchUserAttributes = async () => {
      try {
        const database = firebase.database();
        const userRef = database.ref('users').child('userId'); // Replace 'userId' with the actual user ID
        const snapshot = await userRef.once('value');
        const attributes = snapshot.val();

        if (attributes) {
          setUserAttributes(attributes);
        } else {
          console.error('User attributes not found');
        }
      } catch (error) {
        console.error('Error fetching user attributes:', error);
      }
    };

    fetchUserAttributes();
  }, []);

  return (
    <div>
      <h2>Profile</h2>
      {Object.keys(userAttributes).length > 0 ? (
        <div>
          <h3>Attributes</h3>
          <ul>
            <li>
              <strong>custom:Type:</strong> {userAttributes['custom:Type']}
            </li>
            <li>
              <strong>email:</strong> {userAttributes.email}
            </li>
            <li>
              <strong>name:</strong> {userAttributes.name}
            </li>
            <li>
              <strong>picture:</strong> <img src={userAttributes.picture} alt="Profile Picture" />
            </li>
            <li>
              <strong>sub:</strong> {userAttributes.sub}
            </li>
          </ul>
        </div>
      ) : (
        <p>Loading user profile...</p>
      )}
    </div>
  );
}

export default Profile;
