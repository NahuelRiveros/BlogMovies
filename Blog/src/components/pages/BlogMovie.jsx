import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoReturnDownBackOutline } from "react-icons/io5";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Comentarios from "./comment";
import Puntuacion from "./agregarBlog/puntuacionBlog/puntuacionBlog";
function BlogMovie() {
  const navigate = useNavigate();
  const [puntuacionGeneral, setPuntuacionGeneral] = useState(0);
  const [movieDetalle, setMovieDetalle] = useState({});

  //Formatear fecha de publicacion
  const fecha = new Date(movieDetalle.createdAt);
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  const fechaFormateada = fecha.toLocaleDateString("es-ES", options);
  //Formatear fecha de publicacion

  const MovieSelect = useLocation();

  useEffect(() => {
    setMovieDetalle(MovieSelect.state.item);
    setPuntuacionGeneral(MovieSelect.state.item.puntuacionGeneral);
  }, [MovieSelect.state.item]);
  
  const IdBlog = localStorage.getItem("id");

  const backToMovie = () => {
    navigate("/");
  };

  const renderStars = ( rating ) => {
    const starArray = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        starArray.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (i - 0.5 <= rating) {
        starArray.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        starArray.push(<FaStar key={i} className="text-gray-400" />);
      }
    }
    return starArray;
  };

  {
    console.log("AQUII",movieDetalle);
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row gap-10 justify-center items-center">
        <div className="w-full md:w-1/2 relative -z-10">
          <img
            className="w-full  h-auto object-cover rounded-lg"
            src={`data:image/png;base64,${movieDetalle.imagen}`}
            alt="Poster Pelicula"
          />
          {/* <div className="absolute  top-0 right-0 bg-black text-white font-semibold py-1 px-4 rounded-b-lg">
                        Género
                    </div> */}
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            {movieDetalle.nombrePelicula}
          </h2>
          <div className="text-center">
            <p className="text-lg text-gray-600">
              Estreno: {movieDetalle.descripcionPelicula}
            </p>
            <p className="text-lg text-gray-600 flex justify-center items-center">
              Popularidad: {renderStars(puntuacionGeneral)}
            </p>
            <p className="text-lg text-gray-700">{fechaFormateada}</p>
          </div>
          <div className="flex justify-center items-center gap-10">
            <button
              className="flex justify-center items-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300"
              onClick={backToMovie}
            >
              <IoReturnDownBackOutline className="text-xl" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4"></div>
      <div className="my-8">
        <label className="bg-black text-white font-bold text-lg py-4 px-8 rounded-t-lg block text-center">
          Comentarios
        </label>
        <div className="mt-4">
        <Comentarios /> 
        </div>
      </div>
    </div>
  );
}

export default BlogMovie;
