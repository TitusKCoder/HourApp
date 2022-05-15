//needed

import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      email
    }
  }
`;

export const QUERY_PROFILE = gql`
  query profile($userID: ID!) {
    profile (profileId: $userID){
      _id
      name
      email
    }
  }
`;

export const QUERY_ME = gql`
  query me($profileId: ID!) {
    me {
      _id
      name
      email
      password
      }
    }
`;

export const GET_PROFILES = gql`
  query Profiles($profilesInput: profilesInputFilter) {
    profiles(input: $profilesInput) {
      id
      name
      email
    }
  }
`;







