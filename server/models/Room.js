const { Schema, model } = require('mongoose');
const User = require('./User');

const roomSchema = new Schema(
  {
    roomName: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    admin: {
      type: Schema.Types.ObjectId,
      ref: 'User'    
    },
    participants: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

roomSchema.virtual('participantsCount').get(function() {
  return this.participants.length;
});

const Room = model('Room', roomSchema);

module.exports = Room;
