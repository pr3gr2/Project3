import React from 'react';
import '../assets/css/index.css';
import Auth from '../utils/auth';
import { QUERY_ME, QUERY_ALLUSERS } from '../utils/queries';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
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
  
  console.log(loggedIn)
  console.log(userData)
  console.log(data)

  return(
    <div className="container mainContainer">
      <div align="center">
        <img className ="Logo img-fluid" src={require(`../assets/images/Logo.png`)} alt="ChatBoxLogo"/>
      </div>
      <div className="row">
        <div className="col-3 leftcol">
          <img className ="userProfile img-fluid" src={require(`../assets/images/userStatic.png`)} alt="ChatBoxLogo"/>
          <p className="userName">{loggedIn && userData ? <div className="col-12 col-lg-3 mb-3">{capitalizeFirstLetter(userData.me.username)} </div>: null}</p>
        <div className="row options">
          <div className="col">
            <a href="#">CHAT</a>
          </div>
          <div className="col">
            <a href="#">USERS</a>
          </div>
          <div className="col">
            <a href="#">FRIENDS</a>
          </div>
        </div>
        <div className="row">
          <div className=" messagesList">                 
            {users.map(user => (
                <ul className ="messagesPreview">
                  <a>     
                    <li className="messagesContainer">
                      <p><FontAwesomeIcon icon="bomb" size="2x"/>   
                        <Link to={`/profile/${user.username}`}>{capitalizeFirstLetter(user.username)}</Link>
                      </p>
                    </li>
                  </a>
                </ul>
              ))}
          </div>
        </div>
      </div>
      <div className="col-9 chatname">
        Chat Name
        <Link to={`/chat/${user.username}`}>{capitalizeFirstLetter(user.username)}</Link>
        {/* <Link to={`/chat/${user.username}`}>{capitalizeFirstLetter(user.username)}</Link> */}

        {/* <div className="container messageContainer">
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
        </div> */}
      </div>
    </div>
  </div>
  );
};


export default HomePage;