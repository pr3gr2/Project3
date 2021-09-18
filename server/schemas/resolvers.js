const { AuthenticationError } = require('apollo-server-express');
const { User, Chat, Room } = require('../models');
const { signToken } = require('../utils/auth');
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
let messages = [
  {
    _id: "121",
    senderID: "614606eebcbbb73e90ee41dd",
    message: "Test message",
  },  
  {
    _id: "122",
    senderID: "614606eebcbbb73e90ee41dd",
    message: "Test message2",
  }
];

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    users: async () => {
      return User.find()
        .select('-__v -password')
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
    },
    messages: async (parent, { username }) => {
      // return User.findOne({ username })
      //   .select('-__v -password')
      return messages
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    postMessage: async(parent, { senderID, message }) => {
      const _id = messages.length;
      messages.push({
        _id,
        senderID,
        message
      });
      return messages;
    }
  }
};

module.exports = resolvers;