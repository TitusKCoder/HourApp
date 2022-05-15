
const { AuthenticationError } = require('apollo-server-express')
const { Profile, Message } = require('../models');
const { signToken } = require('../utils/auth');

const subscribers = []

const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find();
    },
    profile: async (parent, { profileId }) => {
      return await Profile.findOne({ _id: profileId });
     },
    messages: async () => {
      return Message.find();
    }
  },

  Mutation: {
    postMessage: async (parent, {profileName, text}) => {
      subscribers.forEach(fn => fn())
      return Message.create({profileName, text})
    },
    addProfile: async (parent, { name, email, password}) => {
      const profile = await Profile.create({ name, email, password});
      const token = signToken(profile);
      
      return { token, profile };
    },
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await profile.isCorrectPassword (password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }
      const token = signToken(profile);
      return { token, profile };
    },
  } 
};

module.exports = resolvers;
