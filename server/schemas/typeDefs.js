const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    friendCount: Int
    friends:[User]
  }

  type Message {
    _id: ID!
    senderID: ID!
    message: String!
    # roomID: String!
    # createdAt: String!
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    messages: [Message!]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    postMessage(senderID: ID!, message: String!): [Message]
  }
`;

module.exports = typeDefs;