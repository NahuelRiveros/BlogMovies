
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import { user } from '../../assets/img';
import { AiOutlineDislike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import React from 'react';
import Puntuacion from './agregarBlog/puntuacionBlog/puntuacionBlog';
const Comentario = ({ comentario, onLike }) => {
  console.log('Información del comentario:', comentario);

  return (
    <div>
      
    
    <div className="flex items-center border-b border-gray-300 py-4">
      
      <img
        src={comentario.autor.imagen}
        alt={comentario.autor.nombre}
        className="w-10 h-10 rounded-full mr-4"
      />
      <div>
        <div className="flex items-center mb-2">
          <h4 className="font-bold mr-2">{comentario.autor.nombre}</h4>
          <span className="text-gray-500">{comentario.fecha}</span>
        </div>
        <p>{comentario.contenido}</p>
        <p
          
          className="text-gray-500 cursor-pointer hover:text-blue-500 focus:outline-none"
        >
         Puntuacion : {comentario.puntuacion}
          
        </p>
      </div>
    </div>
     
     
    </div>
  );
};

export default Comentario;