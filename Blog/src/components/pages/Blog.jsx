import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "../navbar/Search";
// import Search from "../navbar/Search";
import { useNavigate, useLoaderData } from "react-router-dom";
import { FaUser } from "react-icons/fa";
const Blog = () => {
  const loadMovies = useLoaderData();
  //const [movies,setDataMovies] = useState([])
  const [movies, setDataMovies] = useState([]);

  const navigate = useNavigate();
  console.log(loadMovies);
  //FUNCION REFORMAR EL NOMBRE DE LA RUTA Y DIRECCIONAR A OTRA PAGINA

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Filtrar los datos basados en el término de búsqueda
    const filtered = loadMovies.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchTerm, loadMovies]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  //Rutas al dar click en el evento
  const handleDetalles = (pMovie) => {
    let direccion = String(pMovie.nombrePelicula)
      .toLowerCase()
      .split(" ")
      .join("");
    console.log(pMovie);
    navigate(`/pelicula/${direccion}`, {
      state: {
        item: pMovie,
      },
    });
  };
  return (
    <div className="flex flex-col justify-center">
      {/* Buscado de peliculas por nombre */}
      <Search searchTerm={searchTerm} handleSearchChange={handleSearchChange}></Search>
      {/* Buscado de peliculas por nombre */}
      <div className=" text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 m-4 gap-4  ">
        {filteredData.map((item) => (
          <div key={item.id} className="cursor-pointer p-5 shadow-lg rounded-md bg-white hover:bg-gray-100 transition duration-300">
          <h1 className="font-bold text-xl mb-2">{item.nombrePelicula}</h1>
          <div onClick={() => handleDetalles(item)} className="relative">
            <img src={`data:image/png;base64,${item.imagen}`} alt="Poster Pelicula" className="rounded-md w-full" />
            {/* <img src={`https://image.tmdb.org/t/p/w500/${items.backdrop_path}`} alt={items.backdrop_path} className="rounded-3xl "/> */}
          </div>
          <p className="text-gray-700 mt-2">{item.descripcionPelicula}</p>
          <div className="flex items-center mt-2">
            <FaUser className="text-gray-500 mr-1" />
            <p className="text-gray-500">{item.autor}</p>
          </div>
          <p className="text-gray-500 text-sm mt-1">Publicado: {item.release_date}</p>
        </div>
        
        ))}
      </div>
    </div>
  );
};

export default Blog;
