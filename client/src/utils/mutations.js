import { gql } from '@apollo/client';
// Singup 
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// Login
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const POST_MESSAGE = gql`
mutation postMessage($senderID: ID!,$recieverID: ID!, $message: String!) {
  postMessage(senderID:$senderID, recieverID:$recieverID, message: $message) {
  	_id
    senderID
    message
  }
}
`;

export const ADD_FRIEND = gql`
mutation addFriends($friendId: ID!) {
  addFriends(friendId: $friendId) {
    _id
    username
    friendCount
    friends {
      _id
      username
    }
  }
}
`;

export const ADD_ROOM = gql`
mutation addRoom($roomName: String!,$participants: [ID!]!) {
  addRoom(roomName:$roomName, participants:$participants) {
		participants {
      _id
      username
    }
  }
}
`;

export const REMOVE_FRIEND = gql`
mutation removeFriend($friendId: ID!) {
  removeFriend(friendId: $friendId) {
    _id
    username
    friendCount
    friends {
      _id
      username
    }
  }
}
`;