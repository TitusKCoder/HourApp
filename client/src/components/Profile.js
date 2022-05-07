
import React from 'react';
import { useQuery } from '@apollo/client';

import { QUERY_PROFILES } from '../utils/queries';
import profileData from "../../../server/seeders/profileSeeds.json";
import { useState } from "react";
const [search, setSearch] = useState("")


const Profiles = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];

  return (
    <main>
        <div>
          <h2><Profiles/></h2>
        </div>
         <div>
            <input placeholder="Enter Profile name" onChange={event => setSearch(event.target.value)} />

            {
              profileData.filter(profile => {
                if (query === '') {
                  return profile;
                } else if (profile.name.toLowerCase().includes(search.toLowerCase())) {
                  return profile;
                }
              }).map((profile, index) => (
                <div className="" key={index}>
                  <p>{profile.name}</p>
                  <p>{profile.skills}</p>
                </div>
              ))
            }
          </div>
        
    </main>
  );
};

export default Profiles;




// import React,{useState,useEffect} from 'react';
// import './App.css';

// function App() {
//   const [data,setData]=useState([]);
//   const getData=()=>{
//     fetch('profileeeds.json'
//     ,{
//       headers : {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//        }
//     }
//     )
//       .then(function(response){
//         console.log(response)
//         return response.json();
//       })
//       .then(function(profileData) {
//         console.log(profileData);
//         setData(profileData)
//       });
//   }
//   useEffect(()=>{
//     getData()
//   },[])
//   return (
//     <div className="App">
//      {
//        data && data.length>0 && data.map((profile)=><p>{profile.skills}</p>)
//      }
//     </div>
//   );
// }

// export default App;
