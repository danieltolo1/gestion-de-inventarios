import React, { useEffect } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { prisma } from '@prisma/client';



const PrivateLayout = ({ children }) => {
  const { data: session, status } = useSession();

  useEffect(() => {
    console.log(session);
    console.log('status', status);
  }, [session]);

  if (status === 'loading') return <div>Loading...</div>;

  if (!session) {
    signIn('auth0');
    
   
  } else {
    if (session.user.status === 'Pendiente') {
      return <div>Usted no ha sido autorizado para ingresar aun</div>;
    }
    return (
      <div className='flex flex-col'>
        {children}
      </div>
    );
  }
};

export default PrivateLayout;

