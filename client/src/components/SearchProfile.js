
import React from 'react';
import { useState } from "react";
import {useQuery} from '@apollo/client';
import { QUERY_PROFILES } from './../utils/queries';


export default function Profiles() {
 

  const { loading, data } = useQuery(QUERY_PROFILES)
  const [searchTerm, setSearchTerm] = useState("")
  console.log({ loading });
  if (loading) return "Loading...";
  return (
    <main>
        <div>
          <h2><Profiles/></h2>
        </div>
         <div>
           
            <input type="text" placeholder="search..." onChange={event => setSearchTerm(event.target.value)} />

            {
              data.filter(val => {
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
