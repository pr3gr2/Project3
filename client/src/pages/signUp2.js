import React from 'react';
import './assets/css/index.css';

function SignUp(){
    return(
        
    <div className="container">
    <div className="row">
      <div className="col-4"></div>
      <div className="col-4" align="center">
        <img className ="Logo img-fluid" src={require(`./assets/images/Logo.png`)} alt="ChatBoxLogo"/>
      </div>
      <div className="col-4"></div>
    </div>
    <div className="row background">
      <div className="col-6">
        <form className="formSignUp">
          <h3 className ="formName">Sign Up</h3>
          <div class="mb-3">
            <input placeholder ="Password"type="password" class="form-control" id="exampleInputPassword1"/>
           </div>
           <div class="mb-3">
            <input placeholder ="Repeat Password"type="password" class="form-control" id="exampleInputPassword1"/>
           </div>
          <a href="#" className="nextButton">
            Start Chatting  
          </a>
          <p className="text">Already registered? <a href="#">Sign In</a>
          </p>
        </form>
      </div>
    </div>
  </div>
    );
};

export default SignUp;