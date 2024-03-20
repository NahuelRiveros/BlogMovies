
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import { user } from '../../assets/img';
import { AiOutlineDislike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import React from 'react';

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
        <button
          onClick={() => {
            onLike(comentario.id);
            console.log('Botón Like clickeado');
          }}
          className="text-gray-500 hover:text-blue-500 focus:outline-none"
        >
          {comentario.liked ? 'Unlike' : 'Like'}
        </button>
      </div>
    </div>
     
     
    </div>
  );
};

export default Comentario;

// const Comentarios = () => {
//   const [comentarios, setComentarios] = useState([]);

//   const handleSubmit = (values, { resetForm }) => {
//     const nuevoComentario = {
//       id: Date.now(),
//       contenido: values.comentario,
//       autor: {
//         nombre: 'Usuario',
//         imagen: 'https://via.placeholder.com/50',
//       },
//       fecha: new Date().toLocaleString(),
//       liked: false,
//     };
//     setComentarios([...comentarios, nuevoComentario]);
//     resetForm();
//   };

//   const handleLike = (id) => {
//     setComentarios((prevComentarios) =>
//       prevComentarios.map((comentario) =>
//         comentario.id === id ? { ...comentario, liked: !comentario.liked } : comentario
//       )
//     );
//   };

//   return (
//     <div>
//       <h2>Comentarios</h2>
//       <Formik initialValues={{ comentario: '' }} onSubmit={handleSubmit}>
//         {({ handleSubmit }) => (
//           <Form onSubmit={handleSubmit}>
//             <Field
//               as="textarea"
//               name="comentario"
//               className="w-full h-24 border border-gray-300 p-2 mb-2"
//               placeholder="Escribe tu comentario..."
//             />
//             <button
//               type="submit"
//               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//             >
//               Agregar comentario
//             </button>
//           </Form>
//         )}
//       </Formik>
//       <div>
//         {comentarios.map((comentario) => (
//           <Comentario key={comentario.id} comentario={comentario} onLike={handleLike} />
//         ))}
//       </div>
//     </div>
//   );
// };


