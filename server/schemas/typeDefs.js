const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    email: String
    links: String
    password: String
    skills: [String]!
  }

  type skill {
    _id: ID
    name: String
  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
  }

  type Query {
    skill(id: ID!): Skill
    skills(name: Name): [Skill]!
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    login(email:String!, password: String!): Auth
    addProfile(name: String!): Profile
    addSkill(profileId: ID!, skill: String!): Profile
    removeProfile(profileId: ID!): Profile
    removeSkill(profileId: ID!, skill: String!): Profile
  }
`;

module.exports = typeDefs;
