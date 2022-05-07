import { Schema, model } from 'mongoose';


const SkillSchema = new Schema<SkillSchemaType>({
  value: Number,
  topicName: { type: String, index: 'text' },
  topicDescription: { type: String, index: 'text' },
});

export const TopicModel = model('Topic', SkillSchema);
