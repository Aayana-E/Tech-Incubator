import React from 'react';
import '../Style/Profile.css'; 

function Profile2() {
  const userProfile = {
    name: 'Mary Sue',
    email: 'marysue@gmail.com',
    profilePicture: 'https://i.pinimg.com/564x/5e/46/de/5e46de2cc3c337c1d5f385e6bb127ad3.jpg',
    role: 'Student',
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
