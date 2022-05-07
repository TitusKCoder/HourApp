import React,{useState,useEffect} from 'react';
import './App.css';

function App() {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('profileeeds.json'
    ,{
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(profileData) {
        console.log(profileData);
        setData(profileData)
      });
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="App">
     {
       data && data.length>0 && data.map((profile)=><p>{profile.skills}</p>)
     }
    </div>
    
  );
}

export default App;



// import React from 'react';

// const ProfileList = ({ profiles, title }) => {
//   if (!profiles.length) {
//     return 'No profiles';
//   }

//   return (

// <div className="profile-container">
//   <h2>Profiles</h2>
//   <ul className ="profile-list">
//     {profiles.map(profile => (
//       <li key={profile._id} className="profile">
    
//         <p>{profile.name} has {profile.skills}</p>
//       </li>
//     ))}
//   </ul>      
// </div>
   
//   );
// };

// export default ProfileList;
