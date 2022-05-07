import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_PROFILE } from '../../utils/mutations';
import { QUERY_PROFILES } from '../../utils/queries';

const ProfileForm = () => {
  const [name, setName] = useState('');
  const [skills, setskills] = useState('');

  const [addProfile] = useMutation(ADD_PROFILE, {
    update(cache, { data: { addProfile } }) {
      try {
        const { profiles } = cache.readQuery({ query: QUERY_PROFILES });

        cache.writeQuery({
          query: QUERY_PROFILES,
          data: { profiles: [...profiles, addProfile] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addProfile({
        variables: { name, skills},
      });

      setName('');
      setskills('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form 
        onSubmit={handleFormSubmit}
      >
        <div>
          <input  placeholder="Add profile " value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div>
          <button  type="submit"> Add Profile </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
