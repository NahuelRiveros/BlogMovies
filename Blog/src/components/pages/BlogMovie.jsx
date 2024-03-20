import React, { useEffect, useState } from 'react'
import { user } from '../../assets/img'
import { useLocation } from 'react-router-dom'
function BlogMovie() {
  
    
        
        const [movieDetalle, setMovieDetalle] = useState({})
        const MovieSelect = useLocation()
        //Manejar la cantidad del ADD
        useEffect (()=>{
            setMovieDetalle(MovieSelect.state.item)
        })
        console.log(movieDetalle)
        //El location contiene toda la informacion de la pelicula seleccionada

        //parametro utilizados
        //overview , original_title, release_date , poster_path
        //


        return (
            <div>
                <div className='max-w-screen-lg mx-auto my-10 flex max-[740px]:flex-col gap-10 justify-center items-center'>
                    <p className='font-bodyFont text-center text-4xl font-bold min-[740px]:hidden'>
                        {movieDetalle.original_title}
                    </p>
                    <div className='w-3/5 md:w-2/5 relative'>
                        <img className='w-full h-[400px] object-cover' src={`https://image.tmdb.org/t/p/original${movieDetalle.backdrop_path}`} alt={'Img_Movie'} />
                        {/* Aqui pordemos poner lo que necesitemos encaso de que sea oferta o algo parecido */}
                        <div className='top-5 right-0 absolute'>
                            <p className='bg-black text-white font-semibold font-bodyFont py-1 px-8'>
                                Genero
                            </p>
    
                        </div>
                    </div>
                    {/* aqui podria ir si este articulo es de mujero o hombre */}
    
                    <div className='w-3/5 flex flex-col justify-center gap-8'>
                        <div className='text-center'>
                            <p className='font-bodyFont text-4xl font-bold  max-[740px]:hidden'>
                            {movieDetalle.original_title}
                            </p>
                            <div className=' items-center  text-center  max-[740px]:hidden'>
                                <p className='text-2xl text-centerfont-mono'></p>
                                {/* en caso de otro cosas agregar sub titulos */}
                                
                            </div>
                        </div>
                        <div className='flex gap-2 items-center max-[720px]:justify-center text-base'>
                            <div className='flex'>
    
                              
    
                            </div>
                            
                        </div>
                        {/* <p className='text-base -mt-3 text-gray-500'>`{location.state.item.name} marca {location.state.item.brand} talle`</p> */}
                        {/* location.state.item del producto */}
                        <div className=' max-[740px]:flex-col items-center text-center'>
    
                            <p className='text-bold text-gray-500'>
                                Estreno: 
                                <span className='font-medium capitalize pl-1'>
                                {movieDetalle.release_date}
                                </span>
                            </p>
                            <p className='text-base text-gray-500'>
                                Popularidad:
                                <span className='font-medium capitalize pl-1'>
                                {movieDetalle.vote_average}
                                </span>
                            </p>
                            <p className='text-base text-gray-500'>
                                votos positivos:
                                <span className='font-medium capitalize pl-1'>
                                {movieDetalle.vote_count}
                                </span>
                            </p>
                            
                        </div>
                        {/* location.state.item del producto */}
                        <p className='text-base font-bodyFont -mt-3 text-gray-500'>{movieDetalle.overview}</p>
                            <p className='text-xs text-gray-500 '> (popularity {movieDetalle.popularity})
                            </p>
                        
                        
    
    
    
    
                    </div>
    
                </div>
                
            </div>
      )
    }
    
    export default BlogMovie
    
    