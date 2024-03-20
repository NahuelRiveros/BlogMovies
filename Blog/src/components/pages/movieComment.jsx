import React from 'react'
import { useFormik, Formik, Field, Form, ErrorMessage } from 'formik';
function MovieComment() {

    const handleSubmit = (values, { resetForm }) => {
        console.log('Nuevo comentario:', values.comentario);}
    
  return (
    <div className='text-center justify-center bg-slate-400'>
    <h2 className='text-sm font-mediumblock mb-2 font-medium text-gray-900 dark:text-white">Su Comentario '>Comentarios</h2>
    <Formik initialValues={{ comentario: '' }} onSubmit={handleSubmit}>
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit} className='flex items-center'>
          <Field
            as="textarea"
            name="comentario"
            className="w-[500px] h-24 p-2 mb-2 bg-gray-50 border border-gray-300 text-gray-900 
            text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Escribe tu comentario..."
          />
          <button
            type="submit"
            className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 items-center justify-center "
          >
            Agregar comentario
          </button>
        </Form>
      )}
    </Formik>
  </div>

    // className='flex justify-center bg-slate-700'>
    // className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
    // className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido</label>
    // className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Su Comentario ...</label>
    /* <textarea onChange={formik.handleChange} name='comment' type="text" id="nombreUno" className="bg-gray-50 border border-gray-300 text-gray-900 
    text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 

            
                // className="block mb-2 text-lg  font-medium text-gray-900 dark:text-white text-center">Agregar un comentario sobre la pelicula</label>
                // className="grid gap-6 mb-6 md:grid-cols-2">
                    
                 
                h-300 p-2.5 w-300 dark:bg-gray-700 
                dark:border-gray-600 dark:placeholder-gray-400 
                dark:text-white dark:focus:ring-blue-500 
                        dark:focus:border-blue-500 " placeholder="Un lindo comentario..." required /> */
                    
                    /* Comentario */
                    
                    
              

                /* BTN Envio */
                // <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar..</button>
            

        
  )
}

export default MovieComment
