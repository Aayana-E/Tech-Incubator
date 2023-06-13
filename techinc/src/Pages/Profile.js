import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

function Profile() {
  const [userAttributes, setUserAttributes] = useState({});

  useEffect(() => {
    const fetchUserAttributes = async () => {
      try {
        const database = firebase.database();
        const userRef = database.ref('users').child('-NXjyzHCkrsthBqKqjg5'); // Replace with the actual user ID
        const snapshot = await userRef.once('value');
        const attributes = snapshot.val();
        setUserAttributes(attributes);
      } catch (error) {
        console.error('Error fetching user attributes:', error);
      }
    };

    fetchUserAttributes();
  }, []);

  return (
    <div className="profile-container">
      {/*<h2 className="profile-heading">Profile</h2>*/}
      <div className="profile-card">
        
        {Object.keys(userAttributes).length > 0 ? (
          <div>
            <ul className="profile-list">
              <li>
                {userAttributes.name}
              </li>
              <li>
                <strong>Email:</strong> {userAttributes.email}
              </li>
              <li>
                <strong>Role:</strong> {userAttributes.type}
              </li>
              
             
              <li>
               <img src={userAttributes.picture} alt="Profile Picture" className="profile-picture" />
              </li>
            </ul>
          </div>
        ) : (
          <p>Loading user profile...</p>
        )}
      </div>
    </div>
  );
}

export default Profile;
