const { Schema, model } = require('mongoose');

const skillSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    id: {
      type: Number
    },
    classes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'profile'
      }
    ]
  }
);

const Profile = model('Profile', skillSchema);

module.exports = Profile;
