import PrivateLayout from '../layout/PrivateLayout';
import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }){
  console.log('estoy en el app');
  return (
    <SessionProvider session={session}>
      <PrivateLayout>
        <Component {...pageProps} />
      </PrivateLayout>
    </SessionProvider>
  );
}

export default MyApp;
