import React, { Component } from 'react';
// import './App.css';
import './assets/css/index.css'
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import LoginPage from './pages/loginpage';
import SignUpPage from './pages/signUpPage';
import './assets/css/index.css'//

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

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

export default App;
