import '@component/styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { useState } from 'react';
import { LanguageContext, dictionaryList } from '../lib/context/LanguageContext'
const client = new ApolloClient({
  uri: 'http://178.128.22.186:8080/query',
  cache: new InMemoryCache(),
});

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

export default function App({ Component, pageProps }: AppProps) {
  const [userLang, setUserLang] = useState('en')
  const provider = {
    userLang,
    dict: dictionaryList[userLang as keyof typeof dictionaryList],
    changeLang: () =>{
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

