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
    recieverID: ID!
    roomID: ID!
  }

  type Room {
    _id: ID!
    roomName: String!
    participants: [User!]
    messages: [Message]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    messages: [Message!]
    message(senderID: ID!): [Message!]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    postMessage(senderID: ID!, recieverID: ID!, message: String!): Message
    # addRoom(roomName: String!, admin: ID, participants: [ID!]]): Room
    addFriends(friendId: ID!): User
  }
`;

module.exports = typeDefs;