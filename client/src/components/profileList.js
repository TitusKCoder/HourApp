import React from 'react';

const ProfileList = ({ profiles, title }) => {
  if (!profiles.length) {
    return 'No profiles';
  }

  return (

<div className="profile-container">
  <h2>Profiles</h2>
  <ul className ="profile-list">
    {profiles.map(profile => (
      <li key={profile._id} className="profile">
    
        <p>{profile.name} has {profile.skills}</p>
      </li>
    ))}
  </ul>      
</div>
   
  );
};

export default ProfileList;
