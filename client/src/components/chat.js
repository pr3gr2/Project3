
import Messages from './messages'
import { ApolloClient, InMemoryCache, useMutation, useSubscription, gql} from '@apollo/client';
import { WebSocketLink } from "@apollo/client/link/ws";
import {Container, Chip, Grid, TextField, Button} from '@material-ui/core';

import React from 'react';
import '../assets/css/index.css';
import Auth from '../utils/auth';
import { QUERY_ME, QUERY_ALLUSERS, GET_MESSAGES } from '../utils/queries';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee, faPaperPlane, faSmileBeam, faCubes, faBomb, faBicycle, faCannabis } from "@fortawesome/free-solid-svg-icons";
library.add(fab, faCheckSquare, faCoffee, faPaperPlane, faSmileBeam, faCubes, faBomb, faBicycle, faCannabis);




const link = new WebSocketLink({
    uri: `ws://localhost:4000/`,
    options: {
      reconnect: true,
    },
});


export const client = new ApolloClient({
    link, //websocket link
    uri: 'http://localhost:4000/', //connect to server
    cache: new InMemoryCache(),
  });

  
  export const Chat = () =>{
    return(
      <div>
         <h3>Welcome to DevThoughts! A simple chat app for the GraphQL series!</h3>
         <Messages/> 
      </div>
    )
}


