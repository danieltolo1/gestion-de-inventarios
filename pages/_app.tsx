import PrivateLayout from '../layout/PrivateLayout';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';
import Navbar from  '../components/NavBar'
import Image from 'next/image';
import test1 from '../pages/ejemplo'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  console.log('estoy en el app');
  
  return (
   <div> 
    <SessionProvider session={session}>
      
      <PrivateLayout>
        <Component {...pageProps} />
      </PrivateLayout>  
      <Navbar/>
      
     
    </SessionProvider>
    

  </div>
  
    
  );
}

export default MyApp;
