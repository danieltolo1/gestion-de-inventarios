import Link from "next/link";
import React from "react";
import '../styles/Home.module.css'
import '../public/fondo.png'

const test1 = () => {
   
    return( 
    <div>
        <div>  segunda pagina </div>
        <Link href='/'>
            <a>Ir al Home</a>
        </Link>
    </div>
    );
}; 

export default test1;
