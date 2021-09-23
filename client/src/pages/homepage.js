import React from 'react';
import '../assets/css/index.css';
import Auth from '../utils/auth';
import { Chat } from '../components/chat';
import { QUERY_ME, QUERY_ALLUSERS } from '../utils/queries';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Button } from 'react-bootstrap';
import { faCheckSquare, faCoffee, faPaperPlane, faSmileBeam, faCubes, faBomb, faBicycle, faCannabis } from "@fortawesome/free-solid-svg-icons";
library.add(fab, faCheckSquare, faCoffee, faPaperPlane, faSmileBeam, faCubes, faBomb, faBicycle, faCannabis);

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function HomePage() {
  const { data: userData } = useQuery(QUERY_ME);
  const { loading, data } = useQuery(QUERY_ALLUSERS);
  const users = data?.users || [];
  const loggedIn = Auth.loggedIn();

  //console.log(loggedIn)
  console.log(userData)
  //console.log(data)


  const ChatPage = () => {
    return (
      <Chat />
    )
  }

  ///main return code

  return (
    <div className="container mainContainer">
      <div align="center">
        <img className="Logo img-fluid" src={require(`../assets/images/Logo.png`)} alt="ChatBoxLogo" />
      </div>
      <div className="row">
        <div className="col-3 leftcol">
          <img className="userProfile img-fluid" src={require(`../assets/images/userStatic.png`)} alt="ChatBoxLogo" />
          <div className="userName">{loggedIn && userData ? <p className="col-12 col-lg-3 mb-3">{capitalizeFirstLetter(userData.me.username)} </p> : null}</div>
          <div className="row options">
            <div className="col">
           FRIENDS
            </div>
          </div>
          {/* I SUGEST WE CHANGE THE CODE BELOW FROM USER TO THE FREINDS ARRAY OF THE USER LOGGED IN  */}
          <div className="row">
          <div className=" messagesList">                 
            {/* {users.map(user => ( */}
                <ul className ="messagesPreview">
                  <a>     
                    <li className="messagesContainer">

                 <Button
                type='submit'
                id="startChatting"
                variant='success'
                onSubmit={ChatPage} 
                >
                {/* {capitalizeFirstLetter(user.username)} */}
                {loggedIn && userData ? <> {userData.me.friends} </> : null}
                {/* Trying to see if I can render only the firneds list. 
                Feel free to comment out the code on line 74 and 66 and 55 if it does not work and comment in line 67  */}
              </Button>
                    </li>
                  </a>
                </ul>
              {/* ))} */}
          </div>
        </div>
        </div>

        <div className="col-9 chatname">
          {loggedIn && userData ? <> {capitalizeFirstLetter(userData.me.username)} </> : null}
{/* Old label
Chat name */}
          <div className="container messageContainer">
            {ChatPage()}
            <div className="row test2">
              <div className="col-1 icons">
                <a href="#">
                  <FontAwesomeIcon icon="smile-beam" />
                </a>
              </div>
              <div className="col-10">
                <textarea className="form-control messageBox" placeholder="Type your message here" id="floatingTextarea">
                </textarea>
              </div>
              <div className="col-1 icons">
                <a href="#">
                  <FontAwesomeIcon icon="paper-plane" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default HomePage;