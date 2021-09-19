import React from 'react';
import './assets/css/index.css';

function Messages() {
    return(
        <div className="container">
      <div align="center">
      <img className ="Logo img-fluid" src={require(`./assets/images/Logo.png`)} alt="ChatBoxLogo"/>
      </div>
      
      <div className="row">
        
        <div className="col-3 leftcol">
        <img className ="userProfile img-fluid" src={require(`./assets/images/userStatic.png`)} alt="ChatBoxLogo"/>
        <p className="userName">Test User</p>
          <div className="row options">
            <div className="col">
              <a href="#">CHAT</a>
            </div>
            <div className="col">
              <a href="#">USERS</a>
            </div>
            <div className="col">
              <a href="#">GROUPS</a>
            </div>
            <div className="col messagesList">
              <p>xxx</p>
            </div>
          </div>
        </div>
        <div className="col-9 chatname">
          Chat Name
          <div className="messageCenter">
            
          </div>
        </div>
        
      </div>

    </div>
    );
};

export default Messages; 