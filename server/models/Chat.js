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
      receiverID: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
      date: {
        type: Date,
        default: Date.now
      },
      roomID: {
        type: Schema.Types.ObjectId,
        ref: 'Room',
      }
    },
    {
      timestamps: true
    }
);

const  Chat  =  model("Chat", chatSchema);

module.exports = Chat;