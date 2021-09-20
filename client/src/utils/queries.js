import { gql } from '@apollo/client';
//get the current logged in user 
export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      friends {
        _id
      }
      friendCount
    }
  }
`;
// find user by username
export const QUERY_USER= gql`
  query($username: String!){
    user(username: $username) {
      _id
      username
      email
      friends {
        _id
      }
      friendCount
    }
  }
`;
// get all users
export const QUERY_ALLUSERS= gql`
  {
    users {
      _id
      username
      email
      friends {
        _id
      }
      friendCount
    }
  }
`;

export const QUERY_ALL_MESSAGES= gql`
  {
    messages {
      _id
      senderID
      message
  }
}
`;

export const QUERY_SINGLE_MESSAGE= gql`
 query SingleMessage($senderID: ID!){
    message(senderID: $senderID) {
    	_id
   		message
    	senderID
  	}
  }
`;

export const QUERY_ALL_ROOMS= gql`
  query allRooms{
    rooms {
      _id
      roomName
      participants {
        _id
      }
    }
  }
`;