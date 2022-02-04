import type { NextPage } from 'next'
import '../styles/Home.module.css'
import Link from 'next/link'; 
import '../public/fondo12.png'
import '../public/ares1.png'
import Image from "next/image";



const Home: NextPage = () => {
  return (
  
/*CSS y div del fondo */  

   
     
    
    
      
         <div   className="bg-black/40 w-fit sm:min-w-[700px] h-[90vh] absolute 
                top-[50%] translate-y-[-50%]  translate-x-[50%] left-[2px] backdrop-blur-[2px] backdrop-saturate-50 rounded-[5px]
                flex flex-col sm:px-1 px-1 border">


              {/* Maquetacion del Titulo de la pagina*/}
              <div
              className="flex w-[100%]  items-right space-x-1 py-2 mr-10 "
              >

                    
                     <div
                     className="flex w-[90%] mx-auto text-center sm:flex flex-col text-lg text-white/80 space-y-0 
                     font-bold relative underline ml-1" > 
                     ARES GESTION DE MANTENIMIENTO E INVENTARIO
                      </div>
                      <div
                     className="w-[70px] h-[70px]  relative  ml-16 mr-6"
                     >
                         <Image
                         className='absolute rounded-[10%] '
                         src='/ares1.png'
                         layout='fill'
                        />

                     </div>

              </div>
    
          </div>
         
  
   
  )
}

export default Home
