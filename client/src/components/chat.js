
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
         <Messages/> 
           
           <div style={{width:"min-content"}}>
             <span className="sender">
              Hey
             </span>
           </div>
           
           <div style={{width:"100%",justifyContent:"flex-end", display:"flex"}}>
             <span className="receiver">
               Hey! How's it going?
             </span>
           </div>
           
           <div style={{width:"100%",justifyContent:"flex-end", display:"flex"}}>
             <span className="receiver">
               Heard you got a new car! 
             </span>
           </div>
           
           <div style={{width:"100%"}}>
             <p className="sender">
               Yes, I did. It is very fast and furious.Want to go for a spin? 🚗
             </p>
           </div>
           
           <div style={{width:"100%",justifyContent:"flex-end", display:"flex"}}>
             <p className="receiver">
               I would love to but my final project is due soon... 
             </p>
           </div>
           
           <div style={{width:"100%",justifyContent:"flex-end", display:"flex"}}>
             <p className="receiver">
               I am hoping it will be done by Thursday and we can definetly go after that if you are available.  
             </p>
           </div>
           <div>
             <p className="sender">
               Yes, that sounds great! Good luck on that project fam!
             </p>
           </div>
           <div style={{width:"100%",justifyContent:"flex-end", display:"flex"}}>
             <p className="receiver">
               Thank you so much 🥰  
             </p>
           </div>
         
      </div>
    )
}





