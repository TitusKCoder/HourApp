import { Schema, model } from 'mongoose';


const SkillSchema = new Schema<SkillSchemaType>({
  name: {type: String, required: true},
  profileId: {type: Schema.Types.ObjectId, ref: 'Profile', required: true}
});

export const TopicModel = model('Topic', SkillSchema);
