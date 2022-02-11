import { prisma, PrismaClient } from '@prisma/client';
import React from 'react';
import safeJsonStringify from 'safe-json-stringify';


const prisma = new PrismaClient();

export async function getServerSideProps(){
    const productos= await prisma.producto.findMany({
        include:{
            inventario:{
                include:{
                    movimientoInventario:{
                        include:{
                            usuario:true,
                        },

                    },
                },
            },
        },
    });
    return{
        props:{productos: JSON.parse(safeJsonStringify(productos))},

    } 

}


const Productos = ({productos}) => {
   console.log('esta es la variable en el front', productos)
    return (
        <div>
            Estos son mis productos
            <div>Tabla de Productos</div>
            {productos &&
             productos.map((p) => {
                return <div key={p.id}>{p.nombre} {p.foto}</div>
                       
             })}
        </div>
            
    );
};


export default Productos;
