import { PrismaClient } from "@prisma/client";



const prisma = new PrismaClient();

const RutaApiProductos = async(req, res) => {
    if (req.method === 'GET'){

        console.log('hice un GET');
        const productos = await prisma.producto.findMany();
        res.status(200).json({productos})
    }
    if (req.method=== 'POST'){
        const prodcutoCreado = await prisma.producto.create({
            data: {
                nombre:"Pantalla",
                foto: "Foto Pantalla",
            },
            });

        res.status(200).json({prodcutoCreado})
    }

};



export default RutaApiProductos;