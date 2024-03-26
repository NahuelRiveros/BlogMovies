import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import Comentario from './comments';

const Comentarios = () => {
  const [comentarios, setComentarios] = useState([]);
  const [MiText, setMiText] = useState("")
  const [User, setUserData] = useState("")
  const handleEditorChange = (content,editor) =>{
    setMiText(content)
    onchange(content)
    console.log('conteniudo',content)}
    localStorage.getItem("username")
//AQUI SE CARGA LOS DATOS DEL LOGEO
  useEffect(() => {
    setUserData({"id":localStorage.getItem("ID"),"usuario":localStorage.getItem("usuario")})
  }, [])
  
  const handleSubmit = (values, { resetForm }) => {
    console.log('Nuevo comentario:', values.comentario);
    if (User.usuario) {
      const nuevoComentario = {
        id: User.id,
        contenido: values.comentario,
        autor: {
          nombre: User.usuario,
          imagen: 'https://via.placeholder.com/50',
        },
        fecha: new Date().toLocaleString(),
        liked: false,
      };
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
      
      <Formik initialValues={{ comentario: '' }} onSubmit={handleSubmit}>
        {({ handleSubmit }) => (
          <Form className='flex flex-col items-center justify-center' onSubmit={handleSubmit}>
            <Field
              as="textarea"
              name="comentario"
              className="w-[75%] sm:w-[50%]  h-32 max-h-52 p-2 mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 overflow-y-auto resize-none"
              placeholder="Escribe tu comentario..."
               
            />
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
        {comentarios.map((comentario) => (
          <Comentario key={comentario.id} comentario={comentario} onLike={handleLike} />
        ))}
      </div>
    </div>
  );
};

export default Comentarios;