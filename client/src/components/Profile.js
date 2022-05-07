
import React from 'react';
import { useQuery } from '@apollo/client';

import { QUERY_PROFILES } from '../utils/queries';
import profileData from "./profileList";
import { useState } from "react";
const [searchTerm, setSearchTerm] = useState("")


const Profiles = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];

  return (
    <main>
        <div>
          <h2><Profiles/></h2>
        </div>
         <div>
            <input placeholder="search..." onChange={event => setSearchTerm(event.target.value)} />

            {
              profileData.filter(val => {
                if (searchTerm === '') {
                  return val;
                } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
                  return val;
                }
              }).map((val, key) => (
                <div className="" key={key}>
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




