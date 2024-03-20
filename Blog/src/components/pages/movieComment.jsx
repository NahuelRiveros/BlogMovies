import React from 'react'
import { useFormik, Formik, Field, Form, ErrorMessage } from 'formik';
function MovieComment() {
    const InitialValues = {
        firtsname:"",
        secondname:"",
        comment:""
    }
    const formik = useFormik({
        InitialValues, onSubmit: (values)=>(

            console.log(values)
    )
    })
  return (
    <div className='flex justify-center bg-slate-700'>

            <form onSubmit={formik.handleSubmit} className='p-5'>
                <label className="block mb-2 text-lg  font-medium text-gray-900 dark:text-white text-center">Agregar un comentario sobre la pelicula</label>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    {/* NombreUno */}
                    <div>
                        <label htmlFor="firtsname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                        <input onChange={formik.handleChange} name='firtsname' type="text" id="nombreUno" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Anahi" required />
                    </div>
                    {/* NombreUno */}
                    {/* NombreDos */}
                    <div>
                        <label htmlFor="secondname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido</label>
                        <input onChange={formik.handleChange} name='secondname' type="text" id="nombreUno" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rios" required />
                    </div>
                    {/* NombreDOs */}
                    {/* Comentario */}
                    <div>
                        <label htmlFor="comment" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Su Comentario ...</label>
                        <textarea onChange={formik.handleChange} name='comment' type="text" id="nombreUno" className="bg-gray-50 border border-gray-300 text-gray-900 
                        text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                        h-300 p-2.5 w-300 dark:bg-gray-700 
                        dark:border-gray-600 dark:placeholder-gray-400 
                        dark:text-white dark:focus:ring-blue-500 
                        dark:focus:border-blue-500 " placeholder="Un lindo comentario..." required />
                    </div>
                    {/* Comentario */}
                    
                    
                </div>

                {/* BTN Envio */}
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar..</button>
            </form>

        </div>
  )
}

export default MovieComment
