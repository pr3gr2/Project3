// import React, { Component }  from 'react';
// import './App.css';
import './assets/css/index.css'
import NavBar from './components/NavBar';
import { Paper } from '@material-ui/core/';
import { ThemeProvider } from '@material-ui/core/styles';

function App() {
  return (
    
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
          <form className="form">
            <h3 className ="formName">Sign Up</h3>
            <div className="mb-3">
              <input type="text" class="form-control" placeholder="First Name" aria-label="Username"/>
            </div>
            <div className="mb-3">
              <input type="text" class="form-control" placeholder="Last Name" aria-label="Username"/>
            </div>
            <div className="mb-3">
              <input type="text" class="form-control" placeholder="Phone Number" aria-label="Username"/>
            </div>
            <div className="mb-3">
              <input placeholder ="Email"type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              <div id="emailHelp" className="form-text"></div>
            </div>
            <p className="privacyText">
              By clicking on next, you acknowledge that you have read and accepted our <a href="#"> Terms of Service</a> and the Privacy Policy.
            </p>
            <a href="#" className="nextButton">
              Next  
            </a>
          </form>
        </div>
      </div>
    </div>
    
  );
  <ThemeProvider theme={customTheme(darkMode)}>
  <Paper className={classes.root} elevation={0}>
    <NavBar />
  </Paper>
</ThemeProvider>
}

export default App;
