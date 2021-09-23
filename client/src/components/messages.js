import { ApolloClient, InMemoryCache, useMutation, useSubscription, gql} from '@apollo/client';
import { WebSocketLink } from "@apollo/client/link/ws";
import {Container, Chip, Grid, TextField, Button} from '@material-ui/core';

import React from 'react';
import '../assets/css/index.css';
import Auth from '../utils/auth';
import { QUERY_ME, QUERY_ALLUSERS, GET_MESSAGES} from '../utils/queries';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee, faPaperPlane, faSmileBeam, faCubes, faBomb, faBicycle, faCannabis } from "@fortawesome/free-solid-svg-icons";
library.add(fab, faCheckSquare, faCoffee, faPaperPlane, faSmileBeam, faCubes, faBomb, faBicycle, faCannabis);



const Messages = () => {
    const { data } = useSubscription(GET_MESSAGES);
    if (!data) {
      return null;
    }
    return (
      <div style={{ marginBottom: '5rem' }}>
        {data.messages.map(({ id, user, text }) => {
          return (
            <div key={id} style={{ textAlign: 'right' }}>
              <p style={{ marginBottom: '0.3rem' }}>{user}</p>
              <Chip style={{ fontSize: '0.9rem' }} color='primary' label={text} />
            </div>
          );
        })}
      </div>
    );
  };







  

  export default Messages;
  