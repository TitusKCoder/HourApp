//needed

import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      email
      skills
      links
    }
  }
`;

export const QUERY_SKILLS = gql`
    query {
    skills {
      _id
      name
    }
  }
`;
export const GET_PROFILES = gql`
  query Profiles($profilesInput: profilesInputFilter) {
    profiles(input: $profilesInput) {
      id
      name
      email
      skills
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      skills
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      skills
      }
    }
`;



export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      skills
    }
  }
`;
