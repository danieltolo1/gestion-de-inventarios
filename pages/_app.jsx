
import PrivateLayout from '../layout/PrivateLayout';
import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';
import Navbar from  '../components/NavBar'
import Image from 'next/image';
import test1 from './manPreventivo'


function MyApp({ Component, pageProps: { session, ...pageProps } }) {

  console.log('estoy en el app');
  
  return (
   <div> 
     
    <SessionProvider session={session}>
      <Navbar/>  
      <Component {...pageProps} />
      
    </SessionProvider>
  

  </div>
  
    
  );
}

export default MyApp;