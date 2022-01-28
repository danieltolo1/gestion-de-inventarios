import Image from "next/image";
import SearchIcon from "./SearchIcon";
import HomeIcon from "./HomeIcon"
import PostIcon from "./PostIcon"
import Link from 'next/link'; 
import PruebaIcon from './PruebaIcon'
import Corrective from './Corrective'
import AboutIcon from './AboutIcon'
import LogoutIcon from './LogoutIcon'
import { signOut } from 'next-auth/react';



const NavBar = props=>{
    return(
        <div
            className="bg-black/50 w-fit sm:min-w-[200px] h-[90vh] absolute 
            top-[50%] translate-y-[-50%] left-[2px] backdrop-blur-[3px] backdrop-saturate-50 rounded-[5px]
            flex flex-col sm:px-0 px-1"
        >
            {/*Informacion del Usuario*/}
         <div
            className="flex w-[90%] mx-auto items-center space-x-3 py-2 "
         >   
            <div
            className="w-[70px] h-[70px] rounded-[50%] relative"
            >
                <Image
                    src='/ares1.png'
                    className='absolute rounded-[50%]'
                    layout="fill"
                />

            </div>

            <div className="sm:flex hidden flex-col text-white/80 space-y-0 ">
                <div className="tex-lg font-[700]">
                    Nombre de Personaje
                </div>
                <div className="text-[0.7em] text-white/90">
                    correo@gmail.com
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
            className="flex flex-col h-[100%] pb-2 mt-2"
        >
            <li
                className="flex text-white/80 items-center space-x-2 hover:bg-white/10 hover:cursor-pointer w-[90%]
                mx-auto rounded-[15px] p-2 group relative"
            >
                <HomeIcon
                    className= 'w-7 h-7 group-hover:text-white'
                />
                <span
                    className="text-sm group-hover:text-white font-[600]" 
                >
                    <Link href="/"  className='w-32 text-white'>
               
                        Inicio
                    </Link>
                </span>
                {/*Heramienta para ver ev moviles*/}
                <div
                    className="absolute group-hover:sm:hidden hidden group-hover:inline text-white/90 right-[-10%] top-1/2
                    translate-y-[-50%] translate-x-[100%]"
                >
                    Inicio
                </div>

    
            </li>
            <li
                className="flex text-white/80 items-center space-x-2 hover:bg-white/10 hover:cursor-pointer w-[90%]
                mx-auto rounded-[15px] p-2 group relative"
            >
                <PostIcon
                    className= 'w-7 h-7 group-hover:text-white'
                />
                <span
                    className="text-sm group-hover:text-white font-[600]"
                >
                   <Link href="/ejemplo"  className='w-32 text-white'>
        
                            Inventario
                    </Link>
                </span>
                {/*Heramienta para ver en moviles*/}
                <div
                    className="absolute group-hover:sm:hidden hidden group-hover:inline text-white/90 right-[-10%] top-1/2
                    translate-y-[-50%] translate-x-[100%]"
                >
                    Inventario
                </div>

    
            </li>
            <li
                className="flex text-white/80 items-center space-x-2 hover:bg-white/10 hover:cursor-pointer w-[90%]
                mx-auto rounded-[15px] p-2 group relative"
            >
                <PruebaIcon
                    className= 'w-7 h-7 group-hover:text-white'
                />
                <span
                    className="text-sm group-hover:text-white font-[600]"
                >
                   <Link href="/ejemplo"  className='w-32 text-white'>
        
                            Mantenimientos Preventivos
                    </Link>
                </span>
                {/*Heramienta para ver en moviles*/}
                <div
                    className="absolute group-hover:sm:hidden hidden group-hover:inline text-white/90 right-[-10%] top-1/2
                    translate-y-[-50%] translate-x-[100%]"
                >
                    Mantenimientos Preventivos
                </div>

    
            </li>
            <li
                className="flex text-white/80 items-center space-x-2 hover:bg-white/10 hover:cursor-pointer w-[90%]
                mx-auto rounded-[15px] p-2 group relative"
            >
                <Corrective
                    className= 'w-7 h-7 group-hover:text-white'
                />
                <span
                    className="text-sm group-hover:text-white font-[600]"
                >
                   <Link href="/ejemplo"  className='w-32 text-white'>
        
                            Mantenimientos Correctivos
                    </Link>
                </span>
                {/*Heramienta para ver en moviles*/}
                <div
                    className="absolute group-hover:sm:hidden hidden group-hover:inline text-white/90 right-[-10%] top-1/2
                    translate-y-[-50%] translate-x-[100%]"
                >
                    Mantenimientos Correctivos
                </div>

    
            </li>
            <li
                className="flex text-white/80 items-center space-x-2 hover:bg-white/10 hover:cursor-pointer w-[90%]
                mx-auto rounded-[15px] p-2 group relative"
            >
                <AboutIcon
                    className= 'w-7 h-7 group-hover:text-white'
                />
                <span
                    className="text-sm group-hover:text-white font-[600]"
                >
                   <Link href="/ejemplo"  className='w-32 text-white'>
        
                            Acerca de
                    </Link>
                </span>
                {/*Heramienta para ver en moviles*/}
                <div
                    className="absolute group-hover:sm:hidden hidden group-hover:inline text-white/90 right-[-10%] top-1/2
                    translate-y-[-50%] translate-x-[100%]"
                >
                    Acerca de
                </div>

    
            </li>
            <li
                className="flex text-white/80 items-center space-x-2 hover:bg-white/10 hover:cursor-pointer w-[90%]
                mx-auto rounded-[15px] p-2 group relative mt-auto"
            >
                <LogoutIcon
                    className= 'w-7 h-7 group-hover:text-white'
                />
                <span
                    className="text-sm group-hover:text-white font-[600]" onClick={() => {
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


export default NavBar;