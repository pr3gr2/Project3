const { Schema, model } = require('mongoose');
const User = require('./User');
const Room = require('./Room');

const  chatSchema  =  new Schema(
    {
      message: {
        type: String,
        required: true
      },
      senderID: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
      roomID: {
        type: Schema.Types.ObjectId,
        ref: 'Room',
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
);

const  Chat  =  model("Chat", chatSchema);

module.exports  =  Chat;