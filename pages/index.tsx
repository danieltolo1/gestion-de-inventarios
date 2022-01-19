import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Link from 'next/link'; 

const Home: NextPage = () => {
  return (
    <div className='bg-green-500'>
       <p> Primera Pagina</p>
       <Link href="/ejemplo">
       <p className='cursor-pointer'> Click para segunda pagina</p>
       </Link>

    </div>
  )
}

export default Home
