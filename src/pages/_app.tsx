import '@component/styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { useState } from 'react';

const client = new ApolloClient({
  uri: 'http://127.0.0.1:8080/query',
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  
  let [FavList, setFavList] = useState(()=>{
    let localStorageJson = localStorage.getItem("favlist");
    let favlist = []
    if(localStorageJson){
      favlist = JSON.parse(localStorageJson)
    }

    return favlist
  });

  return (
  <ApolloProvider client={client}>
    <Component {...pageProps}/>
  </ApolloProvider>
  )
}

