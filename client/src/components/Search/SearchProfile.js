
import React from 'react';
import profileData from "./profileList";
import { useState } from "react";
// import "./style.css";
// import "./App.css";


const Profiles = () => {
  // const { loading, data } = useQuery(QUERY_PROFILES);
  // const profiles = data?.profiles || [];
  const [searchTerm, setSearchTerm] = useState("")
  return (
    <main>
        <div>
          <h2><Profiles/></h2>
        </div>
         <div>
           
            <input type="text" placeholder="search..." onChange={event => setSearchTerm(event.target.value)} />

            {
              profileData.filter(val => {
                if (searchTerm === '') {
                  return val;
                } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return val;
                }
              }).map((val, key) => (
                <div className="box" key={key}>
                  <p>{val.name}</p>
                  <p>{val.email}</p>
                  {
                    val.skills && val.skills.map( (val, key) => {
                      return(
                        <>
                        { key ? ','  : '' } { val }
                        </>
                      )
                    })
                  }
                </div>
              ))
            }
            
          </div>
        
    </main>
  );
};

export default Profiles;




