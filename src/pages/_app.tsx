import '@component/styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { useState } from 'react';
import { LanguageContext, dictionaryList } from '../lib/context/LanguageContext'
const client = new ApolloClient({
  uri: 'http://127.0.0.1:8080/query',
  cache: new InMemoryCache(),
});



export default function App({ Component, pageProps }: AppProps) {
  const [userLang, setUserLang] = useState('en')
  const provider = {
    userLang,
    dict: dictionaryList[userLang as keyof typeof dictionaryList],
    changeTheme: () =>{
      if(userLang == 'en'){
        setUserLang('id');
      } else {
        setUserLang('en');
      }
    }
  }


  return (

    <ApolloProvider client={client}>
      <LanguageContext.Provider value={provider}>
        <Component {...pageProps}/>
      </LanguageContext.Provider>
    </ApolloProvider>
  )
}

