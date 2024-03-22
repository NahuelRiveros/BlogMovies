import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "../navbar/Search";
import { useNavigate, useLoaderData} from "react-router-dom";
import { FaUser } from "react-icons/fa";
const Blog = () => {
  const loadMovies = useLoaderData()
  const [movies,setDataMovies] = useState([])


  const navigate = useNavigate()
  
  //FUNCION REFORMAR EL NOMBRE DE LA RUTA Y DIRECCIONAR A OTRA PAGINA
  
  // console.log(rootId)
  //Rutas al dar click en el evento
  const handleDetalles = (pMovie) => {
    let direccion = String(pMovie.title).toLowerCase().split(' ').join('');
    console.log(pMovie)
    navigate(`/pelicula/${direccion}`, {
      state: {
        item: pMovie,
      }
    })
  }

  return (
    <div>
      <Search></Search>
      <div className="text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 px-10 md:px-15 lg:px-32 gap-2">
        {loadMovies.map((items, index) => (
          <div key={index} className="cursor-pointer p-5 shadow-lg rounded">
            <h1 className="font-haken font-bold text-[22px]">{items.title}</h1>
            <div onClick={()=>handleDetalles(items)}>

            <img
              src={`https://image.tmdb.org/t/p/original${items.backdrop_path}`}
              alt=""
              className="rounded-3xl "
            />
            </div>
            <h3 className="line-clamp-6 p-2">{items.overview}</h3>
            <p className="mb-2 text-gray-400"><FaUser className="inline-flex items-center mr-2"></FaUser>Autor</p>
            
            <p className="text-gray-400 font-haken text-sm">Publicado: {items.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
