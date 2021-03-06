import type { NextPage } from 'next'
import '../styles/Home.module.css'
import Link from 'next/link'; 
import '../public/ares1.png'
import '../public/compu.jpg'
import Image from "next/image";
import Card from "../components/Card"
import Card2 from "../components/Card2"
import Card3 from "../components/Card3"
import Card4 from "../components/Card4"



const Home: NextPage = () => {
  return (
  
/*CSS y div del fondo */  

    
      
         <div   className=" sm:min-w-[10%] md:min-w-[40%] lg:min-w-[50%] xl:min-w-[50%]   h-[90vh] absolute 
         top-[50%] translate-y-[-50%] sm:translate-x-[30%] md:translate-x-[50%] lg:translate-x-[60%] xl:translate-x-[60%] left-8  backdrop-blur-[3px] backdrop-saturate-50 rounded-[5px]
         flex flex-col sm:flex px-1 border xl:flex  lg:w-1/4 ml-20 mr-6">


              {/* Maquetacion del Titulo de la pagina*/}
              <div
              className="flex w-[100%] 2xl:w-[100%] space-x-2 py-2 mr-10 sm:text-center h-20"
              >
                     <div
                     className="flex sm:tex-sm  sm:text-center  md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl text-cyan-50 md:ml-20 md:pr-20 lg:pr-20 xl:pr-20 2xl:pl-20" > 
                     ARES GESTION DE MANTENIMIENTO E INVENTARIO
                      </div>
                      <div
                     className=" sm:w-[0%] md:w-[15%] lg:w-[20%]  xl:w-[15%] 2xl:w-[10%]  h-[100%] md:ml-20 xl:ml-7 2xl:ml-20 relative  items-right   "
                     >
                         <Image
                         className='absolute rounded-[20%] xl:ml-7 2xl:ml-20 items-right  '
                         src='/ares1.png'
                         layout='fill'
                        />

                     </div>
                    

              </div>
              <div className='flex -m-2 flex-wrap overflow-y-auto mt-6 mb-6 ml-2 mr-2 object-center' >
                <Link href="/inventario" >
                <div className=' sm:w-1  md:w-1/2 lg:w-1/2 px-1 object-center hover:bg-white/10 hover:cursor-pointer rounded-[15px]'>
                  
                  <Card />
                  
                </div>
                </Link>
                <Link href="/manPreventivo" >
                <div className=' sm:w-1  md:w-1/2 lg:w-1/2 px-1 object-center hover:bg-white/10 hover:cursor-pointer rounded-[15px]'>
                  <Card2 />
                </div>
                </Link>
                <Link href="/manCorrectivo" >
                <div className=' sm:w-1  md:w-1/2 lg:w-1/2 px-1 object-center hover:bg-white/10 hover:cursor-pointer rounded-[15px]'>
                  <Card3 />
                </div>
                </Link>
                <Link href="/reportes" >
                <div className='sm:w-1  md:w-1/2 lg:w-1/2 px-1 object-center hover:bg-white/10 hover:cursor-pointer rounded-[15px]'>
                  <Card4 />
                </div>
                </Link>

              </div>


          </div>
         
  
   
  )
}

export default Home
