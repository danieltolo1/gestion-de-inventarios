import Link from "next/link";
import React,  { useEffect, useState } from "react";
import '../styles/Home.module.css'
import '../public/ares1.png'
import Image from "next/image";
import styled from "styled-components"
import DataTable from "react-data-table-component";
import { useQuery } from '@apollo/client';
import { GET_PRODUCTOS, GET_COMPUTER } from './graphql/queries';






const reportes = () => {

    const [usuarios, setUsuarios] = useState([]);
    const [tablaUsuarios, setTablaUsuarios] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    const{data,error,loading} = useQuery(GET_COMPUTER);


    useEffect(() => {
        console.log(data);
        setTablaUsuarios(data);
        if (error) {
          //error('Error consultando los usuarios');
        }
      }, [data], 
      );if (loading) return <div>Cargando....</div>;


        

      const handleChange = e =>{
        setBusqueda(e.target.value);
        //console.log("Busqueda: "+e.target.value);
        filtrar(e.target.value)
        
      }

      
      

      const filtrar = (terminoBusqueda) => {
        var resultadoBusqueda = tablaUsuarios.computers.filter((elemento) =>{
            if(elemento.internal_code.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            || elemento.location.city.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            || elemento.location.job_name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
                return elemento;
            }
        });
        setUsuarios(resultadoBusqueda);
        console.log("este es usuarios", usuarios);
       
      }
    
      
   
    return( 
        <div id='bodym' className='w-full max-w-screen-xl mx-auto px-4 sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto 2xl:mx-auto' >
    
        {/* Maquetacion del layout donde estara el contenido*/}
          
        <div className="w-auto sm:min-w-[40%] md:min-w-[40%] lg:min-w-[50%] xl:min-w-[50%]   h-[90vh] absolute 
         top-[50%] translate-y-[-50%] sm:translate-x-[30%] md:translate-x-[50%] lg:translate-x-[60%] xl:translate-x-[60%] left-8  backdrop-blur-[3px] backdrop-saturate-50 rounded-[5px]
         flex flex-col sm:flex px-1 border xl:flex md:w-1/4 lg:w-1/4 ml-20 pl-0 ">
    
    
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
                         className="flex  w-[90%] mx-auto text-center sm:flex flex-col text-lg text-white/80 space-y-0 
                         font-bold relative ml-1" > 
                         REPORTES<br></br>
                         ________________________
                  </div>
                
            {/*div que empaqueta donde se mostrara la informacion */}
                 <div className="block md:flex-col sm:flex-col lg:flex-col xl:flex-col  2xl:flex-col overflow-y-auto
                                     content-center sm:content-between md:content-between lg:content-between  xl:content-between 2xl:content-between
                                     w-[98%] sm:w-[95%] md:w-[95%] lg:w-[95%]  xl:w-[95%] 2xl:w-[95%] space-x-2 py-2 xl:mr-10  lg:mr-8 2xl:mr-8 sm:text-center  rounded-[5px] ml-1 mr-1 mt-5 xl:ml-5  lg:ml-5 2xl:ml-5 md:ml-5 sm:ml-5 justify-center backdrop-saturate-125 bg-sky-800">
            {/* comienza el formulario */}
                  <form className="block md:flex sm:flex lg:flex xl:flex 2xl:flex 
                                      sm:content-between md:content-between lg:content-between  xl:content-between 2xl:content-between
                                     w-[99%] sm:w-[95%] md:w-[95%] lg:w-[95%]  xl:w-[95%] 2xl:w-[95%] space-x-2 py-2 xl:mr-10  lg:mr-8 2xl:mr-8 sm:text-center  rounded-[5px] mt-5 xl:ml-5  lg:ml-5 2xl:ml-5 md:ml-5 sm:ml-5 justify-center ">
                        
                            
                            <label className="block md:flex sm:flex lg:flex xl:flex 2xl:flex text-cyan-50 font-bold text-center md:text-right mb-1 md:mb-0 pr-4 md:mr-0 " >
                                Producto a buscar
                            </label>
                           
                            <input className="      md:flex sm:flex lg:flex xl:flex 2xl:flex  
                                                    mr-2 ml-2 md:w-[100%] sm:w-[100%] lg:w-[100%] xl:w-[100%] 2xl:w-[100%] w-[95%]
                                                    md:ml-0 sm:ml-0 lg:ml-0 xl:ml-0 2xl:ml-0 bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-amber-400"
                                                    id="inline-full-name" value={busqueda} onChange={handleChange}/> 
                            
                            <div className="flex md:flex sm:flex lg:flex xl:flex 2xl:flex 
                                               justify-center  md:content-end sm:content-end  lg:content-end shadow  xl:content-end 2xl:content-end mt-2 ml-20 ">
                            <button className="  bg-black hover:bg-amber-400 item-center
                                             focus:shadow-outline focus:outline-none text-white font-bold py-2 px-2 rounded " type="button">
                                Buscar
                            </button>
                    </div>
                        </form>

                    <div className=" md:flex sm:flex lg:flex xl:flex 2xl:flex  text-cyan-50 font-bold text-center md:text-right mb-1 md:mb-0 pr-4 md:mr-0">


                    
                               
                                 <table className='tabla'>
                                <thead>
                                    <tr>
                                    <th>id</th>
                                    <th>Ubicacion</th>
                                    <th>Area Trabajo</th>
                                    <th>Ult Mantenimiento</th>
                                    </tr>
                                </thead>
                                <tbody>
                                     {usuarios &&  usuarios ? (
                                    <>
                                        {usuarios.map((usuario) => {
                                        return (
                                           
                                             <tr key={usuario.internal_code}>
                                             <td>{usuario.internal_code}</td>
                                             <td>{usuario.location.city}</td>
                                             <td>{usuario.location.job_name}</td>
                                             <td>{usuario.historial}</td>
                                             </tr>
                                          );
                                         })}
                                     </>
                                     ) : (
                                    <div>Sin Resultado de la busqueda</div>
                                        
                                    )} 
                                </tbody>
                                 </table>  
                                
                              
                    </div>
                 </div>

              </div>
              
        </div>
        
   
    );
}; 

export default reportes;