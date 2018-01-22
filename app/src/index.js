import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Posts from './Posts';



const client = new ApolloClient({
    link: new HttpLink({ uri: process.env.REACT_APP_API_ENDPOINT }),
    cache: new InMemoryCache()
  });

const query = gql`
  {
    allPosts {
      id
    }
  }
`

// query is now a GraphQL syntax tree object
console.log(query);


ReactDOM.render(
  <ApolloProvider client={client}>
    <p>this is the app</p>
    <Posts />
  </ApolloProvider>,
  document.getElementById('root')
)


registerServiceWorker();
