import SearchIcon from "./SearchIcon";
import HomeIcon from "./HomeIcon"
import PostIcon from "./PostIcon"
import Link from 'next/link'; 
import PruebaIcon from './PruebaIcon'
import Corrective from './Corrective'
import AboutIcon from './AboutIcon'
import LogoutIcon from './LogoutIcon'
import ReportIcon from './ReportIcon'
import { useSession, signIn, signOut } from 'next-auth/react';







 export default function NavBar() {                                                                   //const NavBar = props =>{
    const {data: session, status} = useSession()
    
        console.log(session);
      
    
     if (status === 'loading') return <div>Loading...</div>;
    if (session) {

    return(
        

        <div
            className="bg-black/50 w-fit sm:min-w-[200px] h-[90vh] absolute 
            top-[50%] translate-y-[-50%] left-[2px] backdrop-blur-[3px] backdrop-saturate-50 rounded-[5px]
            flex flex-col sm:px-0 px-1 "
        >
            {/*Informacion del Usuario*/}
         <div
            className="flex w-[90%] mx-auto items-center space-x-3 py-2 "
         >   
            <div
            className="w-[40px] h-[40px] rounded-[50%] relative"
            >
                <img src={session.user.image}
                className="absolute rounded-[50%]"
                />

            </div>

            <div className="sm:flex hidden flex-col text-white/80 space-y-0 ">
                <div className="tex-lg font-[700]">
                    
                      {session.user.name}

                </div>
                <div className="text-[0.7em] text-white/90">
                      {session.user.email}
                </div>

            </div>

        </div>
        <hr
            className="text-gray-900 border-1 w-[100%]"
        />
        {/* Elemento Buscar */}
        <div
            className="sm:flex text-white/80 w-[90%] mx-auto mt-2 bg-white/10 rounded-[15px] px-2 py-1 hidden"
        >
            <SearchIcon
                className='w-6 h-6'
            />
            <input 
                className="w-[100px] flex-grow outline-none bg-transparent indent-2 placeholder-white/80"
                placeholder="Buscar...."
            />
         

        </div>

        {/*Seguimos con los Links*/ }
        <ul
            className="flex flex-col h-[100%] pb-2 mt-2 overflow-y-auto"
        >
            <Link href="/"  className='sm:hidden w-32 text-white'>
            <li
                className="flex text-white/80 items-center space-x-2 hover:bg-white/10 hover:cursor-pointer w-[90%]
                mx-auto rounded-[15px] p-2 group relative"
            >
                <HomeIcon
                    className= 'w-7 h-7 group-hover:text-white'
                />
                <span
                    className="sm:flex hidden text-sm group-hover:text-white font-[600]" 
                >
                        Inicio   
                </span>
                {/*Heramienta para ver ev moviles*/}
                <div
                    className="absolute group-hover:sm:hidden hidden group-hover:inline text-white/90 right-[-10%] top-1/2
                    translate-y-[-50%] translate-x-[100%]"
                >
                    Inicio
                </div>
            </li>
            </Link>
            <Link href="/inventario"  className='w-32 text-white'>
            <li
                className="flex text-white/80 items-center space-x-2 hover:bg-white/10 hover:cursor-pointer w-[90%]
                mx-auto rounded-[15px] p-2 group relative"
            >
                <PostIcon
                    className= 'w-7 h-7 group-hover:text-white'
                />
                <span
                    className="sm:flex hidden text-sm group-hover:text-white font-[600]"
                >
                   
        
                            Inventario
                    
                </span>
                {/*Heramienta para ver en moviles*/}
                <div
                    className="absolute group-hover:sm:hidden hidden group-hover:inline text-white/90 right-[-10%] top-1/2
                    translate-y-[-50%] translate-x-[100%]"
                >
                    Inventario
                </div>

            </li>
            </Link>
            <Link href="/manPreventivo"  className='w-32 text-white'>
            <li
                className="flex text-white/80 items-center space-x-2 hover:bg-white/10 hover:cursor-pointer w-[90%]
                mx-auto rounded-[15px] p-2 group relative"
            >
                <PruebaIcon
                    className= 'w-7 h-7 group-hover:text-white'
                />
                <span
                    className="sm:flex hidden text-sm group-hover:text-white font-[600]"
                >
                   
        
                            Mantenimientos Preventivos
                    
                </span>
                {/*Heramienta para ver en moviles*/}
                <div
                    className="absolute group-hover:sm:hidden hidden group-hover:inline text-white/90 right-[-10%] top-1/2
                    translate-y-[-50%] translate-x-[100%]"
                >
                    Mantenimientos Preventivos
                </div>

    
            </li>
            </Link>
            <Link href="/manCorrectivo"  className='w-32 text-white sm:flex hidden flex-col'>
            <li
                className="flex text-white/80 items-center space-x-2 hover:bg-white/10 hover:cursor-pointer w-[90%]
                mx-auto rounded-[15px] p-2 group relative"
            >
                <Corrective
                    className= 'w-7 h-7 group-hover:text-white'
                />
                <span
                    className="sm:flex hidden text-sm group-hover:text-white font-[600]"
                >
                   
        
                            Mantenimientos Correctivos
                    
                </span>
                {/*Heramienta para ver en moviles*/}
                <div
                    className="absolute group-hover:sm:hidden hidden group-hover:inline text-white/90 right-[-10%] top-1/2
                    translate-y-[-50%] translate-x-[100%]"
                >
                    Mantenimientos Correctivos
                </div>
            </li>
            </Link>
            <Link href="/reportes"  className='w-32 text-white sm:flex'>
            <li
                className="flex text-white/80 items-center space-x-2 hover:bg-white/10 hover:cursor-pointer w-[90%]
                mx-auto rounded-[15px] p-2 group relative"
            >
                <ReportIcon
                    className= 'w-7 h-7 group-hover:text-white'
                />
                <span
                    className="sm:flex hidden text-sm group-hover:text-white font-[600]"
                >

                            Reportes
                    
                </span>
                {/*Heramienta para ver en moviles*/}
                <div
                    className="absolute group-hover:sm:hidden hidden group-hover:inline text-white/90 right-[-10%] top-1/2
                    translate-y-[-50%] translate-x-[100%]"
                >
                    Reportes
                </div>

            </li>
            </Link>
            <Link href="/"  className='w-32 text-white'>
            <li
                className="flex text-white/80 items-center space-x-2 hover:bg-white/10 hover:cursor-pointer w-[90%]
                mx-auto rounded-[15px] p-2 group relative"
            >
                <AboutIcon
                    className= 'w-7 h-7 group-hover:text-white'
                />
                <span
                    className="sm:flex hidden text-sm group-hover:text-white font-[600]"
                >
        
                            Acerca de  
                </span>
                {/*Heramienta para ver en moviles*/}
                <div
                    className="absolute group-hover:sm:hidden hidden group-hover:inline text-white/90 right-[-10%] top-1/2
                    translate-y-[-50%] translate-x-[100%]"
                >
                    Acerca de
                </div>
            </li>
            </Link>
            <li
                className="flex text-white/80 items-center space-x-2 hover:bg-white/10 hover:cursor-pointer w-[90%]
                mx-auto rounded-[15px] p-2 group relative mt-auto"
            >
                <LogoutIcon
                    className= 'w-7 h-7 group-hover:text-white'
                />
                <span
                    className="sm:flex hidden text-sm group-hover:text-white font-[600]" onClick={() => {
                        signOut();
                      }}
                >
        
                            Salir
                    
                </span>
                {/*Heramienta para ver en moviles*/}
                <div
                    className="absolute group-hover:sm:hidden hidden group-hover:inline text-white/90 right-[-10%] top-1/2
                    translate-y-[-50%] translate-x-[100%]"
                >
                    Salir
                </div>

    
            </li>
        </ul>


    </div>


    )
                    }      
                    return (
                        signIn('auth0')
                      )          
}


//export default NavBar;