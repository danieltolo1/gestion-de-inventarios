import Link from "next/link";
import React from "react";

const test = () => {
   
    return( 
    <div>
        <div>  segunda pagina </div>
        <Link href='/'>
            <a>Ir al Home</a>
        </Link>
    </div>
    );
}; 

export default test;
