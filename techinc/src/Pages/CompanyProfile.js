//Company Profile Template Example for presentation
import React from 'react';
import '../Style/Profile.css'; 

function Profile2() {
  const userProfile = {
    name: 'Google',
    email: 'HR@google.com',
    profilePicture: 'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png',
    role: 'Company',
  };

  return (
    <div className="profile-container">
      <h1 className="profile-heading">Profile</h1>
      <div className="profile-card">
        <h2>{userProfile.name}</h2>
        <p>Email: {userProfile.email}</p>
        <p>Role: {userProfile.role}</p>
        {userProfile.profilePicture && (
          <img src={userProfile.profilePicture} alt="Profile" className="profile-picture" />
        )}
      </div>
    </div>
  );
}

export default Profile2;
