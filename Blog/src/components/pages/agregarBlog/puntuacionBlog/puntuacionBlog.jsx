import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoReturnDownBackOutline } from "react-icons/io5";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

function Puntuacion() {
  const navigate = useNavigate();
  const [movieDetalle, setMovieDetalle] = useState({});
  const MovieSelect = useLocation();
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  useEffect(() => {
    setMovieDetalle(MovieSelect.state.item);
    // Recuperar likes y dislikes del almacenamiento local si existen
    const storedLikes = parseInt(localStorage.getItem("likes") || "0");
    const storedDislikes = parseInt(localStorage.getItem("dislikes") || "0");
    setLikes(storedLikes);
    setDislikes(storedDislikes);
  }, [MovieSelect.state.item]);

  const backToMovie = () => {
    navigate("/");
  };

  const handleLike = () => {
    setLikes((prevLikes) => prevLikes + 1);
    localStorage.setItem("likes", likes + 1);
    console.log("likes", dislikes)
  };

  const handleDislike = () => {
    setDislikes((prevDislikes) => prevDislikes + 1);
    localStorage.setItem("dislikes", dislikes + 1);
    console.log("dislikes", dislikes)
  };

  // Calcular el promedio de estrellas
  const averageRating = () => {
    const totalVotes = likes + dislikes;
    if (totalVotes === 0) return 0;
    console.log("primedio de votos",likes / totalVotes* 5)
    return (likes / totalVotes) * 5;
  };

  // Generar las estrellas basadas en el promedio de estrellas
  const renderStars = () => {
    const rating = averageRating();
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

  return (
    <div className="">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row gap-10 justify-center items-center">
        {/* Resto del código... */}
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex">
          <input value={"hola"} className="rounded-xl border text-center w-10 border-red-600 " type="text" />
        </div>
        <div className="flex items-center gap-1 text-yellow-500">
          {renderStars()}
        </div>
      </div>
      {/* Resto del código... */}
    </div>
  );
}

export default Puntuacion;
