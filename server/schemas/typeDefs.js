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
  }

  type Auth {
    token: ID!
    user: User
  }

  type SubbedMessage {
    message: Message!
    type: String!
    participants: [ID!]
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    messages: [Message!]
    message(senderID: ID!): [Message!]
    rooms: [Room!]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    postMessage(senderID: ID!, recieverID: ID!, message: String!): Message
    addRoom(roomName: String!, participants: [ID!]!): Room
    addFriends(friendId: ID!): User
    removeFriend(friendId: ID!): User
  }

  type Subscription {
    newMessage: SubbedMessage!
  }
`;

module.exports = typeDefs;