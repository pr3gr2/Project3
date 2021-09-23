
import ReceiverMessages from './ReceiverMessages'
import SenderMessages from './SenderMessages'
import { ApolloClient, InMemoryCache, useMutation, useSubscription, gql} from '@apollo/client';
import { WebSocketLink } from "@apollo/client/link/ws";
// import {Container, Chip, Grid, TextField, Button} from '@material-ui/core';

import React from 'react';
import '../assets/css/index.css';
import Auth from '../utils/auth';
import { QUERY_ME, QUERY_ALLUSERS, GET_MESSAGES, CHAT_ROOM } from '../utils/queries';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee, faPaperPlane, faSmileBeam, faCubes, faBomb, faBicycle, faCannabis } from "@fortawesome/free-solid-svg-icons";
library.add(fab, faCheckSquare, faCoffee, faPaperPlane, faSmileBeam, faCubes, faBomb, faBicycle, faCannabis);



//code recommended to use but I could not get it to work ask nayan for resource he suggested to use 

// const link = new WebSocketLink({
//   uri: "ws://localhost:4000/subscriptions",
//   options: {
//     reconnect: true
//   }
// });


// export const client = new ApolloClient({
//     link, //websocket link
//     uri: 'http://localhost:4000/', //connect to server
//     cache: new InMemoryCache(),
//   });

  
  export const Chat = (props) =>{

    // console.log(data)
    return(
      <div>
        <div style={{width:"100%"}}>
          <p className="sender">
            <SenderMessages
                // senderID={senderID}
                // receiverID={receiverID}
            />
            <p>Uncomment to see </p>
          </p>
        </div>    
        <div style={{width:"100%",justifyContent:"flex-end", display:"flex"}}>
          <p className="receiver">
            {/* <ReceiverMessages/>   */}
            <p>Uncomment to see </p>
          </p>
        </div>     
      </div> 
    )
}














 {/* <div style={{width:"min-content"}}>
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
           </div> */}


{/* <div style={{width:"100%",justifyContent:"flex-end", display:"flex"}}>
             <p className="receiver">
               I would love to but my final project is due soon... 
             </p>
           </div> */}

{/* <div>
             <p className="sender">
               Yes, that sounds great! Good luck on that project fam!
             </p>
           </div>
           <div style={{width:"100%",justifyContent:"flex-end", display:"flex"}}>
             <p className="receiver">
               Thank you so much 🥰  
             </p>
           </div> */}