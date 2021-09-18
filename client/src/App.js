import React, { Component } from 'react';
// import './App.css';
import './assets/css/index.css'
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/loginpage';
import SignUpPage from './pages/signUpPage';
import './assets/css/index.css'//


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          {/* <LoginPage /> */}
          <Switch>
            <Route exact path='/' component={LoginPage} />
            <Route exact path='/signup' component={SignUpPage} />
            <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
          </Switch>
        </>
      </Router>
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
