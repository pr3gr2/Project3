import { ApolloClient, InMemoryCache, useMutation, useSubscription, gql} from '@apollo/client';
import { WebSocketLink } from "@apollo/client/link/ws";
import {Container, Chip, Grid, TextField, Button} from '@material-ui/core';

import React from 'react';
import '../assets/css/index.css';
import Auth from '../utils/auth';
import { QUERY_ME, QUERY_ALLUSERS, QUERY_SINGLE_MESSAGE_SENDER, QUERY_SINGLE_MESSAGE_RECEIVER} from '../utils/queries';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee, faPaperPlane, faSmileBeam, faCubes, faBomb, faBicycle, faCannabis } from "@fortawesome/free-solid-svg-icons";
library.add(fab, faCheckSquare, faCoffee, faPaperPlane, faSmileBeam, faCubes, faBomb, faBicycle, faCannabis);



const ReceiverMessages = () => {
 // return (
  //   <p>Something </p>
    
  //     );

  //   };


  const { data } = useSubscription(QUERY_SINGLE_MESSAGE_RECEIVER);
  if (!data) {
    return null;
  }
  return (
    <p> {data} </p>
  );






  
// Old CODE
  // return (
  //   <div style={{ marginBottom: '5rem' }}>
  //     {data.messages.map(({ id, user, text }) => {
  //       return (
  //         <div key={id} style={{ textAlign: 'right' }}>
  //           <p style={{ marginBottom: '0.3rem' }}>{user}</p>
  //           <Chip style={{ fontSize: '0.9rem' }} color='primary' label={text} />
  //         </div>
  //       );
  //     })}
  //   </div>
  // );

};






  

  export default ReceiverMessages;
  