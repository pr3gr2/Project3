const { AuthenticationError } = require('apollo-server-express');
const {  } = require('../models');
const { signToken } = require('../utils/auth');
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    getUsers: async () => {
    const users = [
      {
        username: "john",
        email: "john@gmail.com"
      },
      {
        username: "jane",
        email: "jane@gmail.com"
      }
    ]
    return users;
    }
  }
};

module.exports = resolvers;