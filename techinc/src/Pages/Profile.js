import { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const currentUser = await Auth.currentAuthenticatedUser();
        setUser(currentUser);
      } catch (error) {
        setUser(null);
        // Handle the error or redirect to the sign-in page
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.attributes.email}!</h1>
          {/* Display the email */}
          <p>Email: {user.attributes.email}</p>
        </div>
      ) : (
        <p>Loading user profile...</p>
      )}
    </div>
  );
}

export default Profile;
