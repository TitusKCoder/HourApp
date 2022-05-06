const { Profile, Skills } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find();
    },

    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },

    skills(parent, args, context, info) {
      const { name } = args;
      return context.db.skills
        .filter((skill) => skill.name == name)
    }
    // getSkills: async () => {
    //   return Skills.find();
    // },
    // searchSkills: async (parent, args) => {
    //   return Skills.find(args.search)
    // },
  },

  Mutation: {
    // addProfile: async (parent,args) => {
    //   return Profile.create({ name });
    // },

    addProfile: async (parent, args) => {
      const profile = await Profile.create(args);
      const token = signToken(profile);

      return { token, profile };
    },

    addSkill: async (parent, { profileId, skill }) => {
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
    },
    removeProfile: async (parent, { profileId }) => {
      return Profile.findOneAndDelete({ _id: profileId });
    },
    removeSkill: async (parent, { profileId, skill }) => {
      return Profile.findOneAndUpdate(
        { _id: profileId },
        { $pull: { skills: skill } },
        { new: true }
      );
    },
  },

};

module.exports = resolvers;
