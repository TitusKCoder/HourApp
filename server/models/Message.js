const { Schema, model } = require ('mongoose');


const messageSchema = new Schema({
    profileName: {
        type: String,
        // required: true
    },
    text: {
        type: String,
        // required: true 
    }
  });

  const Message = model('Message', messageSchema);

  module.exports = Message