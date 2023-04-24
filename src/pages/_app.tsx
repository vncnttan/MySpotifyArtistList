import '@component/styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://127.0.0.1:8080/',
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
  <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
  )
}
