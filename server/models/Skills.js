<<<<<<< HEAD
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
=======
import { Schema, model } from 'mongoose';


const SkillSchema = new Schema<SkillSchemaType>({
  value: Number,
  topicName: { type: String, index: 'text' },
  topicDescription: { type: String, index: 'text' },
});

export const TopicModel = model('Topic', SkillSchema);
>>>>>>> 6f7a5c3f11dfe3fa8c587fdd0d1455ba484f7f3a
