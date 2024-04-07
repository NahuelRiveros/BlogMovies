import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import Comentario from './comments';
import axios from "axios";

const Comentarios = () => {
  const [comentarios, setComentarios] = useState({ listComentario: [] });
  const [User, setUserData] = useState("");
  const URI = "http://localhost:8000/comentarios/";
  
  useEffect(() => {
    setUserData({"id":localStorage.getItem("ID"),"usuario":localStorage.getItem("usuario")})
    obtenerComentarios();
  }, []);
  
  const obtenerComentarios = async () => {
    try {
      const uriComentariosL = "http://localhost:8000/comentariosE/";
      const jsonId = {idBlog: IdBlog}
      const response = await axios.post(uriComentariosL,jsonId);
      //const response = await axios.post(uriComentariosL);
      setComentarios(response.data);
      console.log(response.data)
    } catch (error) {
      console.error('Error al obtener comentarios:', error);
    }
  }

  const IdBlog = localStorage.getItem("id");

  const handleSubmit = async (values, { resetForm }) => {
    if (User.usuario) {
      const nuevoComentario = {
        idPelicula: IdBlog,
        comentarioCompleto: values.comentario,
        nombreAutor: User.usuario,
        fechaComentario: new Date().toLocaleString(),
        puntuacion: values.puntuacion,
      };
  
      try {
        await axios.post(URI, nuevoComentario);
        setComentarios({...comentarios, listComentario: [...comentarios.listComentario, nuevoComentario]});
        resetForm();
      } catch(err) {
        console.error('Error al agregar comentario:', err.message);
        alert("Ocurrió un error al agregar el comentario");
      }
    } else {
      alert("Debes iniciar sesión para comentar.");
    }
  };

  const handleLike = (id) => {
    setComentarios((prevComentarios) =>
      prevComentarios.map((comentario) =>
        comentario.id === id ? { ...comentario, liked: !comentario.liked } : comentario
      )
    );
  };

  return (
    <div className=''>
      <Formik initialValues={{ comentario: '', puntuacion: "" }} onSubmit={handleSubmit}>
        {({ handleSubmit }) => (
          <Form className='flex flex-col items-center justify-center' onSubmit={handleSubmit}>
            <Field
              as="textarea"
              name="comentario"
              className="w-[75%] sm:w-[50%]  h-32 max-h-52 p-2 mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 overflow-y-auto resize-none"
              placeholder="Escribe tu comentario..."
            />
            <div className='flex flex-col'>
              <label htmlFor="puntuacion" className='text-center'>Puntuación</label>
              <Field
                id="puntuacion"
                name="puntuacion"
                as="select"
                className="w-full p-2 mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Seleccionar</option>
                {[1, 2, 3, 4, 5].map(score => (
                  <option key={score} value={score}>{score}</option>
                ))}
              </Field>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Agregar comentario
            </button>
          </Form>
        )}
      </Formik>
      <div>
        {comentarios.listComentario.map((comentario,index) => (
          <Comentario key={index} comentario={comentario} onLike={handleLike} />
        ))}
      </div>
    </div>
  );
};

export default Comentarios;
