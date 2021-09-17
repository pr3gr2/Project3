import React from 'react';
import '../assets/css/index.css'
import loginForm from '../components/loginForm';









function Login(){
    return (
    
        <div className="container">
          <div className="row">
            <div className="col-4"></div>
            <div className="col-4" align="center">
              <img className ="Logo img-fluid" src={require(`../assets/images/Logo.png`)} alt="ChatBoxLogo"/>
            </div>
            <div className="col-4"></div>
          </div>
          <div className="row background">
            <div className="col-6">
              <form  className="form">
                <h3 className ="formName">Login</h3>
                <div className="mb-3">
                  <input placeholder ="Email"type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <input placeholder ="Password" type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                  <label className="form-check-label" >Remember Me</label>
                </div>
                <a onSubmit={loginForm()} className="button" id = "startChatting">
                Start Chatting  
                </a>
                <p className="text">Not registered? <a href="#">Sign Up</a></p>
              </form>
            </div>
          </div>
        </div>
        
      );
};

export default Login; 