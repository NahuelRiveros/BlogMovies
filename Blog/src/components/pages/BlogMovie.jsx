import React, { useState } from 'react'
import { user } from '../../assets/img'
import { useLocation } from 'react-router-dom'
function BlogMovie() {
  
    
        
        const [detalles, setDetalles] = useState({})
        const MovieSelect = useLocation()
        //Manejar la cantidad del ADD
        let [baseCant, setBaseCant] = useState(1)
        //El location contiene toda la informacion del articulo que se selecciono, para mas info hacer console.log
        console.log(MovieSelect)
        
        return (
            <div>
                <div className='max-w-screen-lg mx-auto my-10 flex max-[740px]:flex-col gap-10 justify-center items-center'>
                    <p className='font-bodyFont text-4xl font-bold min-[740px]:hidden'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati inventore culpa, ratione dolorum sapiente quibusdam ea facere tenetur saepe laborum quam quasi, dignissimos facilis pariatur dicta incidunt reprehenderit soluta sed?
                    </p>
                    <div className='w-3/5 md:w-2/5 relative'>
                        <img className='w-full h-[400px] object-cover' src={``} alt={''} />
                        {/* Aqui pordemos poner lo que necesitemos encaso de que sea oferta o algo parecido */}
                        <div className='top-5 right-0 absolute'>
                            <p className='bg-black text-white font-semibold font-bodyFont py-1 px-8'>
                                marca
                            </p>
    
                        </div>
                    </div>
                    {/* aqui podria ir si este articulo es de mujero o hombre */}
    
                    <div className='w-3/5 flex flex-col justify-center gap-12'>
                        <div>
                            <p className='font-bodyFont text-4xl font-bold  max-[740px]:hidden'>
                                
                            </p>
                            <div className='flex items-center gap-5 mt-3'>
                                <p className='text-2xl font-mono'>Precio: $caro</p>
                                {/* En caso de tener ofertas */}
                                {/* <p className='text-2xl font-mono line-through'>{location.state.item.price}</p> */}
                            </div>
                        </div>
                        <div className='flex gap-2 items-center max-[720px]:justify-center text-base'>
                            <div className='flex'>
    
                              
    
                            </div>
                            <p className='text-xs text-gray-500'> (0 Vistas)
                            </p>
                        </div>
                        {/* <p className='text-base -mt-3 text-gray-500'>`{location.state.item.name} marca {location.state.item.brand} talle`</p> */}
                        {/* location.state.item del producto */}
                        <div className='flex max-[740px]:flex-col gap-5 items-center'>
    
                            <p className='text-base text-gray-500'>
                                Categoría:
                                <span className='font-medium capitalize pl-1'>
                                    D
                                </span>
                            </p>
                            <p className='text-base text-gray-500'>
                                Marca:
                                <span className='font-medium capitalize pl-1'>
                                    C
                                </span>
                            </p>
                            <p className='text-base text-gray-500'>
                                Color:
                                <span className='font-medium capitalize pl-1'>
                                    B
                                </span>
                            </p>
                            <p className='text-base text-gray-500'>
                                Talle:
                                <span className='font-medium capitalize pl-1'>
                                    A
                                </span>
                            </p>
                        </div>
                        {/* location.state.item del producto */}
                        <p className='text-base font-bodyFont -mt-3 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, laboriosam quidem. Repellendus reiciendis adipisci eos quis iusto exercitationem qui mollitia. Deleniti ratione asperiores at praesentium molestias beatae veniam placeat reiciendis.</p>
    
                        <div className='flex gap-2 justify-center'>
    
                            <div className='w-52 flex items-center justify-between gap-4 text-gray-500 border p-3 shadow-md'>
    
                                <div className='flex text-center'>
    
    
                                </div>
                                <p className='text-sm font-bodyFont'>Cantidad
                                </p>
    
    
                                <div className='flex item gap-4 text-sm font-semibold '>
    
                                    <button className='border text-lg h-5 font-normal px-2 flex 
                                    items-center justify-center
                                    hover:text-white 
                                    cursor-pointer 
                                    hover:bg-gray-700
                                    duration-300 active:bg-black' >-</button>
                                    <span>
                                        1
                                    </span>
                                    <button className='border text-lg h-5 font-normal px-2 flex 
                                    items-center justify-center
                                    hover:text-white 
                                    cursor-pointer 
                                    hover:bg-gray-700
                                    duration-300 active:bg-black'
                                        // onClick={() => setBaseCant(baseCant + 1)}
                                        
                                    >+</button>
                                </div>
                            </div>
    
                            <button className='bg-gray-700 text-white gap-1 flex py-3 px-6  active:bg-orange-700'>add</button>
                            <div className='absolute  '>
    
                               
                            </div>
    
                        </div>
    
    
    
    
                    </div>
    
                </div>
                
            </div>
      )
    }
    
    export default BlogMovie
    
    // <div className='border bg-slate-200 relative'>
    //   <div className='flex justify-center w-full h-58 cursor-pointer overflow-hidden'>
    //     <img className='w-[350px] h-[350px] object-cover group-hover:scale-110 duration-500'
    //       src={user} alt="productImg" />
    //   </div>
    //   {/* FOOTER CARD */}
    //   <div className='w-full boder-[1px] px-2
    //      py-5 '>
    //     <div className='flex justify-between items-center'>
    //       <div className='font-titleFont font-semibold'>
    //         <h2></h2>
    //       </div>
    //       <div className='flex gap-2 relative overflow-hidden'>
    //         <div className='flex gap-2 transform lg:group-hover:translate-x-24 transition-transform duration-500'>

    //           {/* SIRVE PARA OFERTAS <p className='line-through text-gray-500'>{product.price}</p> */}
    //           <p className='font-serif'>$</p>
    //         </div>
    //         <div >
    //           {/* Falta agregar una descipcion al producto */}
    //           <span className='lg:absolute z-20 w-[100px] lg:text-gray-400 lg:hover:text-orange-400 
    //           text-red-500 flex-item-center gap-1 -top-0.5 lg:transform lg:-translate-x-32 lg:group-hover:-translate-x-8 lg:transition-transform cursor-pointer lg:duration-500 '></span>
    //         </div>
    //       </div>
    //     </div>
    //     <div className='font-titleFont font-semibold'>
    //       <p className='rounded-full inline-block px-2 text-center bg-orange-600'></p>
    //     </div>
    //     <div className='font-titleFont font-semibold'>
    //       <p>Talle </p>
    //     </div>
    //     <div className='font-titleFont font-semibold'>
    //       <p>Categoria - </p>
    //       <p>Color - </p>
    //     </div>
    //     <div className='absolute top-4 right-0 bg-orange-600'>
    //       <p>Talle </p>
    //     </div>
    //   </div>

    //   {/* Alert */}
      
    // </div >