import { InMemoryCache, createHttpLink, ApolloClient } from '@apollo/client/core';
import { createApolloProvider } from '@vue/apollo-option';

const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:3000/graphql'
});

const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({
  cache,
  link: httpLink
});

export const provider = createApolloProvider({
  defaultClient: apolloClient
});
