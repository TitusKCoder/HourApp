const { Schema, model } = require ('mongoose');

const profileSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    match: [/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, 'Please enter a valid email address']
  },
  password: {
    type: String,
    required: true,
  },
  links: {
    type: String,
    trim: true
  },
  password: {
    type: String,
    requires: true,
    minlength: 5,
  },
  skills: [
    {
      type: String,
      trim: true,
    },
  ],
});

const Profile = model('Profile', profileSchema);

module.exports = Profile;
