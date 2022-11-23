import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import App from './App'
import './index.css'

const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:8080/graphql",
    fetchOptions: {
      mode: 'no-cors'
    }
  }),
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
)
