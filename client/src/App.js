import React, { Component } from 'react';
// import './App.css';
import './assets/css/index.css'
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import './assets/css/index.css'//

function App() {
  return (

    <LoginPage />


  );
}

export default App;
