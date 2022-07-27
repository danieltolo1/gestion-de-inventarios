import Link from "next/link";
import React,  { useEffect, useState } from "react";
import '../styles/Home.module.css'
import '../public/ares1.png'
import { useQuery } from '@apollo/client';
import { GET_PRODUCTO, GET_COMPUTER } from './graphql/queries';
import "bootstrap/dist/css/bootstrap.min.css";
import SearchIcon from "../components/SearchIcon";









const InventarioOtros = () => {

    const [usuarios1, setUsuarios1] = useState([]);
    const [tablaUsuarios1, setTablaUsuarios1] = useState([]);
    const [busqueda1, setBusqueda1] = useState("");
    const{data,error,loading} = useQuery(GET_PRODUCTO);


    useEffect(() => {
        console.log(data);
        setTablaUsuarios1(data);
        if (error) {
          //error('Error consultando los usuarios');
        }
      }, [data], 
      );if (loading) return <div>Cargando....</div>;


        

      const handleChange1 = e =>{
        setBusqueda1(e.target.value);
        //console.log("Busqueda: "+e.target.value);
        filtrar1(e.target.value)
        console.log("este es usuarios", usuarios1);
      }

      
      

      const filtrar1 = (terminoBusqueda1) => {
        var resultadoBusqueda1 = tablaUsuarios1.products.filter((elemento1) =>{
            if(elemento1.product_type.description.toString().toLowerCase().includes(terminoBusqueda1.toLowerCase())
            || elemento1.location.city.toString().toLowerCase().includes(terminoBusqueda1.toLowerCase())
            || elemento1.state.description.toString().toLowerCase().includes(terminoBusqueda1.toLowerCase())
            || elemento1.internal_code.toString().toLowerCase().includes(terminoBusqueda1.toLowerCase())){
                return elemento1;
            }
        });
        setUsuarios1(resultadoBusqueda1);
        
       
      }
    
      
   
    return( 
        <div id='bodym' className='w-full max-w-screen-xl mx-auto px-4 sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto 2xl:mx-auto' >
    
        {/* Maquetacion del layout donde estara el contenido*/}
          
        <div className="w-auto sm:min-w-[40%] md:max-w-[65%] lg:min-w-[50%] xl:min-w-[50%]   h-[90vh] absolute 
         top-[50%] translate-y-[-50%] sm:translate-x-[30%] md:translate-x-[45%]  left-8  backdrop-blur-[3px] backdrop-saturate-50 rounded-[5px]
         flex flex-col sm:flex px-1 border xl:flex md:w-1/4 lg:w-1/4 ml-20 lg:ml-5 pl-0  xl:w-96">
    
    
                  {/* Maquetacion del Titulo de la pagina*/}
                  <div
              className="flex w-[100%] 2xl:w-[100%] space-x-2 py-2 mr-10 sm:text-center h-20"
              >
                     <div
                     className="flex  w-[90%] mx-auto text-center sm:flex flex-col text-lg text-white/80 space-y-0 
                     font-bold relative ml-1" > 
                     ARES GESTION DE MANTENIMIENTO E INVENTARIO
                      </div>
                      
                         
                  </div>
                  <div
                         className="flex  w-[90%] mx-auto text-center sm:flex flex-col text-lg text-white/80 space-y-0 
                         font-bold relative ml-1" > 
                         INVENTARIO DE IMPRESORAS, PANTALLAS, TECLADOS Y OTROS <br></br>
                         ________________________
                  </div>
                
            {/*div que empaqueta donde se mostrara la informacion */}
                 <div className="block md:flex-col sm:flex-col lg:flex-col xl:flex-col  2xl:flex-col overflow-y-auto
                                     content-center sm:content-between md:content-between lg:content-between  xl:content-between 2xl:content-between
                                     w-[98%] sm:w-[95%] md:w-[95%] lg:w-[95%]  xl:w-[95%] 2xl:w-[95%] space-x-2 py-2 xl:mr-10  lg:mr-8 2xl:mr-8 sm:text-center  rounded-[5px] ml-1 mr-1 mt-5 xl:ml-5  lg:ml-5 2xl:ml-5 md:ml-5 sm:ml-5 justify-center backdrop-saturate-125 bg-slate-300">
            {/* comienza el formulario */}
                  <form className="block md:flex sm:flex lg:flex xl:flex 2xl:flex 
                                      sm:content-between md:content-between lg:content-between  xl:content-between 2xl:content-between
                                     w-[99%] sm:w-[95%] md:w-[95%] lg:w-[95%]  xl:w-[95%] 2xl:w-[95%] space-x-2 py-2 xl:mr-10  lg:mr-8 2xl:mr-8 sm:text-center  rounded-[5px] mt-5 xl:ml-5  lg:ml-5 2xl:ml-5 md:ml-5 sm:ml-5 justify-center ">
                        
                            
                            <label className="block md:flex sm:flex lg:flex xl:flex 2xl:flex text-black font-bold text-center md:text-right mb-1 md:mb-0 pr-4 md:mr-0 " >
                                Producto a buscar
                            </label>
                           
                            <input className="      md:flex sm:flex lg:flex xl:flex 2xl:flex  
                                                    mr-2 ml-2 md:w-[100%] sm:w-[100%] lg:w-[100%] xl:w-[100%] 2xl:w-[100%] w-[95%]
                                                    md:ml-0 sm:ml-0 lg:ml-0 xl:ml-0 2xl:ml-0 bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-amber-400"
                                                    id="inline-full-name" value={busqueda1} onChange={handleChange1}/> 
                            
                            <div className="flex md:flex sm:flex lg:flex xl:flex 2xl:flex 
                                               justify-center  md:content-end sm:content-end  lg:content-end shadow  xl:content-end 2xl:content-end mt-2 ml-20 ">
                            <button className="btn btn-success">
                            <SearchIcon
                                className='w-6 h-6'
                                />
                            </button>
                    </div>
                        </form>

                    <div className=" md:flex sm:flex lg:flex xl:flex 2xl:flex  text-cyan-50 font-bold text-center md:text-right mb-1 md:mb-0 pr-4 md:mr-0">


                    
                               
                                 <table className='table table-sm table-bordered'>
                                <thead>
                                    <tr>
                                    <th>id</th>
                                    <th>Tipo De Producto</th>
                                    <th>Modelo</th>
                                    <th>Ciudad</th>
                                    <th>Ar. Trabajo</th>
                                    <th>Estado</th>
                                    <th>Observaciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                     {usuarios1 &&  usuarios1 ? (
                                    <>
                                        {usuarios1.map((usuario1) => {
                                        return (
                                           
                                             <tr key={usuario1.internal_code}>
                                             <td>{usuario1.internal_code}</td>
                                             <td>{usuario1.product_type.description}</td>
                                             <td>{usuario1.model}</td>
                                             <td>{usuario1.location.city}</td>
                                             <td>{usuario1.location.job_name}</td>
                                             <td>{usuario1.state.description}</td>
                                             <td>{usuario1.observation}</td>
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

export default InventarioOtros;