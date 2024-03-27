import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import Comentario from './comments';
import axios from "axios";

const Comentarios = () => {
  const [comentarios, setComentarios] = useState([]);
  const [apiComentarios, setapiComentarios] = useState([]);
  const [MiText, setMiText] = useState("")
  const [User, setUserData] = useState("")
  const URI = "http://localhost:8000/comentarios/"
  const uriComentariosL ="http://localhost:8000/comentariosL/"
  const handleEditorChange = (content,editor) =>{
    setMiText(content)
    onchange(content)
    console.log('conteniudo',content)}
    localStorage.getItem("username")
//AQUI SE CARGA LOS DATOS DEL LOGEO
  useEffect(() => {
    setUserData({"id":localStorage.getItem("ID"),"usuario":localStorage.getItem("usuario")})
    obtenerComentarios()
    // setComentarios(axios.get(uriComentariosL))
  }, [])
  console.log("a",comentarios)
 
  const obtenerComentarios = async () => {
    try {
      const uriComentariosL = "http://localhost:8000/comentariosL/";
      const response = await axios.get(uriComentariosL);
      // console.log(response.data.jsonComentario)
      setComentarios(response.data);
    } catch (error) {
      console.error('Error al obtener comentarios:', error);
    }
  }
 


  const IdBlog= localStorage.getItem("id")
  const handleSubmit = async (values, { resetForm }) => {
    console.log('Nuevo comentario:', values.comentario, values.puntuacion);
    
    if (User.usuario) {
      const nuevoComentario = {
        idPelicula: IdBlog,
        comentarioCompleto: values.comentario,
        // autor: {
        //   nombre: User.usuario,
        // imagen: 'https://via.placeholder.com/50',
        // },
        nombreAutor: User.usuario,
        fechaComentario: new Date().toLocaleString(),
        puntuacion: values.puntuacion,
      };

      try {
        const response = await axios.post(URI, nuevoComentario)
        
      } catch(err) {
        console.log(err.message)
      }
      console.log(nuevoComentario)
      setComentarios([...comentarios, nuevoComentario]);
      resetForm();
    }else{
      alert("Debes logearte")
    }
    }

  const handleLike = (id) => {
    console.log('Cambio de like en comentario con ID:', id);
    setComentarios((prevComentarios) =>
      prevComentarios.map((comentario) =>
        comentario.id === id ? { ...comentario, liked: !comentario.liked } : comentario
      )
    );
  };
 

  return (
    <div className=''>
      
      <Formik initialValues={{ comentario: '', puntuacion: "" }} onSubmit={handleSubmit}
      >
        {({ handleSubmit }) => (
          <Form className='flex flex-col items-center justify-center' onSubmit={handleSubmit}>

            <Field
              as="textarea"
              name="comentario"
              className="w-[75%] sm:w-[50%]  h-32 max-h-52 p-2 mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 overflow-y-auto resize-none"
              placeholder="Escribe tu comentario..."
               
            />
            
            <div className='flex flex-col'>
            <label htmlFor="puntuacion" className='text-center'>Puntuacion</label>
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
              className=" bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Agregar comentario
            </button>
          </Form>
        )}
      </Formik>
      <div>
      {comentarios.jsonComentario && comentarios.jsonComentario.map((comentario, index) => (
  <Comentario key={comentario.idComentario} comentario={comentario} onLike={handleLike} />
))}
         
      </div>
    </div>
  );
};

export default Comentarios;