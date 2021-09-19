import React, { Component }  from 'react';
// import './App.css';
import './assets/css/index.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheckSquare, faCoffee);

function App() {
  return (
    
    <div className="container mainContainer">
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
          <div className="container messageContainer">
            <div className="row test1">
              abcd
            </div>
            <div className="row test2">
              <div className="col-1">

              </div>
              <div className="col-10">
                <textarea class="form-control messageBox" placeholder="Type your message here" id="floatingTextarea"></textarea>
              </div>
              <div className="col-1">
              <FontAwesomeIcon icon="check-square" />
              </div>
            
            
            </div>
          </div>
        </div>
        
      </div>

    </div>

    // <div className="container">
    //   <div className="row">
    //     <div className="col-4"></div>
    //     <div className="col-4" align="center">
    //       <img className ="Logo img-fluid" src={require(`./assets/images/Logo.png`)} alt="ChatBoxLogo"/>
    //     </div>
    //     <div className="col-4"></div>
    //   </div>
    //   <div className="row background">
    //     <div className="col-6">
    //       <form className="formSignUp">
    //         <h3 className ="formName">Sign Up</h3>
    //         <div class="mb-3">
    //           <input placeholder ="Password"type="password" class="form-control" id="exampleInputPassword1"/>
    //          </div>
    //          <div class="mb-3">
    //           <input placeholder ="Repeat Password"type="password" class="form-control" id="exampleInputPassword1"/>
    //          </div>
    //         <a href="#" className="nextButton">
    //           Start Chatting  
    //         </a>
    //         <p className="text">Already registered? <a href="#">Sign In</a>
    //         </p>
    //       </form>
    //     </div>
    //   </div>
    // </div>
    
  );
}

export default App;