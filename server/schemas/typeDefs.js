const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Message {
    _id: ID!
    profileName: String
    text: String
  }

  type Profile {
    _id: ID!
    name: String
    email: String
    links: String
    password: String
    skills: [String]!
    bio:String
  }

  type Skill {
    _id: ID
    name: String
    profileId: ID
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    me(profileId: ID!): Profile
  }

  type Query {
    skill(id: ID!): Skill
    skills(name: String!): [Skill]!
  }

  type Query {
    messages: [Message!]
  }

  type Mutation {
    postMessage(profileName: String!, text: String!): Message
    login(email:String!, password: String!): Auth
    addProfile(name: String!, email: String!, password: String!): Auth
    addSkill(profileId: ID!, name: String!): Skill
    removeProfile(profileId: ID!): Profile
    removeSkill(profileId: ID!, skillId: ID!): Profile
  }

  type Subscription {
    messages: [Message!]
  }
`;

module.exports = typeDefs;
