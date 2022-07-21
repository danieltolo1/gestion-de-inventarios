
import PrivateLayout from '../layout/PrivateLayout';
import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Navbar from  '../components/NavBar'
import Image from 'next/image';
import test1 from './manPreventivo'



//const httplink = createHttpLink({
//  uri:"http://192.168.0.4:3000/api/graphql/"

//})

const client = new ApolloClient({
  uri:"http://192.168.0.4:3000/api/graphql/",
  cache:new InMemoryCache()

})


function MyApp({ Component, pageProps: { session, ...pageProps } }) {

  console.log('estoy en el app');
  
  return (
   <div> 
    <ApolloProvider client={client}>
    <SessionProvider session={session}>
      <Navbar/>  
      <Component {...pageProps} />
      
    </SessionProvider>
    </ApolloProvider> 

  </div>
  
    
  );
}

export default MyApp;
