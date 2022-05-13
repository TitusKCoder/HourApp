
const { AuthenticationError } = require('apollo-server-express')
const { Profile, Message } = require('../models');
const { signToken } = require('../utils/auth');
const {GooglePubSub} = require('@axelspringer/graphql-google-pubsub');
const pubsub = new GooglePubSub();

const subscribers = [];
const onMessageUpdates = (fn) => subscribers.push(fn);


const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find();
    },

    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
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
  Subscription: {
    messages: {
      subscribe: (parent,args, {pubsub} ) => {
        const channel = Math.random().toString(36).slice(2,15);
        onMessageUpdates(() => pubsub.publish(channel, {messages}));
        setTimeout(() => pubsub.publish(channel, {messages}), 0)
        return pubsub.asyncIterator(channel);
      }
    }
  }
};

module.exports = resolvers;
