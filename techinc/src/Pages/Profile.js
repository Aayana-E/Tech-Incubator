import React, { useEffect, useState } from 'react';
import { Auth, Hub } from 'aws-amplify';
import awsConfig from '../backend/aws-exports';

Auth.configure(awsConfig);

function Profile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const userData = await Auth.currentAuthenticatedUser();
        setUser(userData);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchUserData();
  }, []);

  useEffect(() => {
    Hub.listen('auth', (data) => {
      const { payload } = data;
      if (payload.event === 'signOut') {
        setUser(null);
      }
    });
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        user && (
          <div>
            <p>Username: {user.username}</p>
            <p>Email: {user.attributes.email}</p>
            <p>Address: {user.attributes.address}</p>
            <p>Birthdate: {user.attributes.birthdate}</p>
            {/* Add more attributes here */}
          </div>
        )
      )}
    </div>
  );
}

export default Profile;
