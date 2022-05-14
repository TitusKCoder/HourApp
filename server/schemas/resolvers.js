
const { AuthenticationError } = require('apollo-server-express')
const { Profile, Message } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find();
    },

    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },
    me: async (parent, { profileId }) => {
      //console.log(context)
      if (!profileId) {
        throw new AuthenticationError('You need to be logged in!');
      }
      return Profile.findOne({ _id: profileId });
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
    addProfile: async (parent, { name, email, password,skills}) => {
      const profile = await Profile.create({ name, email, password,skills});
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
    
    addSkill: async (parent, { profileId, skill }, context) => {
      if (context.user) {
        return Profile.findOneAndUpdate(
          { _id: profileId },
          {
            $addToSet: { skills: skill },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeProfile: async (parent, { profileId }) => {
      return Profile.findOneAndDelete({ _id: profileId });
    },
    removeSkill: async (parent, { skill }, context) => {
      if (context.user) {
        return Profile.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { skills: skill } },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
