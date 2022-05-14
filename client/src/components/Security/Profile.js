// import React from "react";
// import { useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';


// import { QUERY_USER, QUERY_ME, QUERY_PROFILES } from '../../utils/queries';

// import Auth from '../../utils/auth';


// export default function Profile() {
//   const { username: userParam } = useParams();
//   const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, QUERY_PROFILES, {
//     variables: { username: userParam },
//   });

//   const user = data?.me || data?.user || {};
//   // navigate to personal profile page if username is yours
//   if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
//     console.log('logged in still ')
//     return;
//   }

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!user?.username) {
//     return (
//       <h4>
//         You need to be logged in to see this. Use the navigation links above to
//         sign up or log in!
//       </h4>
//     );
//   }

//     return (
//       <div>
//         <h1>Profile Page</h1>
//         <p>
//             logged in sucessfully 
//         </p>
//       </div>
//     );
//   }

//show all profiles 

// import React from 'react';
// import ProfileList from './profileList';
// import { useQuery } from '@apollo/client';
// import { QUERY_PROFILES } from '../../utils/queries';

// const Profile = () => {
//   const { loading, data } = useQuery(QUERY_PROFILES);
//   const profiles = data?.profiles || [];

//   return (
//     <main>
//       <div className="flex-row justify-center">
//         <div className="col-12 col-md-10 my-3">
//           {loading ? (
//             <div>Loading...</div>
//           ) : (
//             <ProfileList
//               profiles={profiles}
//               title="Connect With Each Other"
//             />
//           )}
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Profile;


//show single a profile

import React from 'react';
import '../Security/profile.css'
// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import SkillsList from '../../components/SkillsList';
import SkillForm from '../../components/SkillForm';

import { QUERY_SINGLE_PROFILE } from '../../utils/queries';

const Profile = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { profileId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_PROFILE, {
    // pass URL parameter
    variables: { profileId: profileId },
  });

  const profile = data?.profile || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2 className="card-header">
        {profile.name}'s friends have endorsed these skills...
      </h2>

      {profile.skills?.length > 0 && <SkillsList skills={profile.skills} />}

      <div className="my-4 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <SkillForm profileId={profile._id} />
      </div>
    </div>
  );
};

export default Profile;
