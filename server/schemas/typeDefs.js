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
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
  }

  type Query {
    messages: [Message!]
  }

  type Mutation {
    postMessage(profileName: String!, text: String!): Message
    login(email:String!, password: String!): Auth
    addProfile(name: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
