import Link from "next/link";
import React from "react";
import '../styles/Home.module.css'
import '../public/ares1.png'
import Image from "next/image";

const reportes = () => {
   
    return( 
        <div id='bodym' className='w-full max-w-screen-xl mx-auto px-4 sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto 2xl:mx-auto' >
    
        {/* Maquetacion del layout donde estara el contenido*/}
          
        <div className="w-auto sm:min-w-[40%] md:min-w-[40%] lg:min-w-[50%] xl:min-w-[50%]   h-[90vh] absolute 
         top-[50%] translate-y-[-50%] sm:translate-x-[30%] md:translate-x-[50%] lg:translate-x-[60%] xl:translate-x-[60%] left-8  backdrop-blur-[3px] backdrop-saturate-50 rounded-[5px]
         flex flex-col sm:flex px-1 border xl:flex md:w-1/4 lg:w-1/4 ml-20 mr-6">
    
    
                  {/* Maquetacion del Titulo de la pagina*/}
                  <div
              className="flex w-[100%] 2xl:w-[100%] space-x-2 py-2 mr-10 sm:text-center h-20"
              >
                     <div
                     className="flex sm:tex-sm  sm:text-center  md:text-base lg:text-lg xl:text-2xl 2xl:text-3xl text-cyan-50 lg:pr-20 xl:pr-20 2xl:pl-20" > 
                     ARES GESTION DE MANTENIMIENTO E INVENTARIO
                      </div>
                      <div
                     className=" sm:w-[0%] md:w-[30%] lg:w-[10%]  xl:w-[10%] 2xl:w-[10%] h-[100%] xl:ml-7 2xl:ml-20 relative  items-right   "
                     >
                         <Image
                         className='absolute rounded-[20%] xl:ml-7 2xl:ml-20 items-right  '
                         src='/ares1.png'
                         layout='fill'
                        />

                     </div>
                         
                  </div>
                  <div
                         className="flex w-[90%] mx-auto text-center sm:flex flex-col text-lg text-white/80 space-y-0 
                         font-bold relative ml-1" > 
                         REPORTES
                  </div>
              </div>
        </div>
        
   
    );
}; 

export default reportes;