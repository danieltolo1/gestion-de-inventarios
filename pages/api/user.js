
import { PrismaClient } from "@prisma/client";




const prisma = new PrismaClient();

const RutaApiUsuarios = async(req, res) => {
    if (req.method === 'GET'){

        console.log('hice un GET');
        const usuario = await prisma.user.findFirst({
            
        });
        res.status(200).json({usuario})
    }
   

};


;


export default RutaApiUsuarios;