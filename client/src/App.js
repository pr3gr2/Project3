import React, { Component } from 'react';
// import './App.css';
import './assets/css/index.css'
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import './assets/css/index.css'//

function App() {
  return (
    <ApolloProvider client={client}>
      <LoginPage />
    </ApolloProvider>
  );
}

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
  uri: '/graphql',
});



export default App;
