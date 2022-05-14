//needed

import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      email
      skills
      bio
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
      bio
    }
  }
`;

export const QUERY_PROFILE = gql`
  query profile($name: String!) {
    user(name: $name) {
      _id
      username
      email
      skills
      bio
    }
  }
`;

export const QUERY_ME = gql`
  query me($profileId: ID!) {
    me {
      _id
      name
      email
      links
      password
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
