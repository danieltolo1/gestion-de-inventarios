import type { NextPage } from 'next'
import '../styles/Home.module.css'
import Link from 'next/link'; 
import '../public/fondo.png'
import Image from 'next/image';


const Home: NextPage = () => {
  return (
  
   <div>
    
      
    
    <Link href="/ejemplo">
      <p className='cursor-pointer align=center '> Click para segunda pagina</p>
    </Link>
    <div>
    <Image src='/fondo.png' layout='fill'/>
    </div>
    </div>
   
  )
}

export default Home
