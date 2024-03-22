import React, { useState }  from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';



const AgregarBlog = ({ onSubmit }) => {
    const [editorContent, setEditorContent] = useState('');
    
    const handleSubmit = (values, { resetForm }) => {
    // Llamar a la función onSubmit pasada como prop y pasarle los valores del nuevo blog
    console.log(values);
    // Limpiar el formulario después de enviar
    resetForm();
    // Restablecer el contenido del CKEditor a un valor predeterminado (por ejemplo, un texto vacío)
    setEditorContent('')
  };
  

  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='max-w-2xl w-full p-6 bg-white rounded-lg shadow-lg'>

      <h2 className='text-ext-2xl mb-6 text-center font-semibold'>Crear Nuevo Blog</h2>
      <Formik initialValues={{ tema: '', contenido: '' }} onSubmit={handleSubmit}>
        {({ handleSubmit, setFieldValue }) => (
          <Form onSubmit={handleSubmit} className={"flex flex-col"}>
            <Field
              type="text"
              name="tema"
              placeholder="Tema del blog"
              className="p-2 border rounded"
            />
            {/* <ErrorMessage name="tema" component="div" className="text-red-500" /> */}
            <CKEditor
                    editor={ ClassicEditor }
                    data={editorContent}
                    onReady={ (editor, event) => {

                        console.log('Editor is ready to use!', editor, event);
                        
                        
                    } }
                    onChange={ ( event , editor ) => {
                        const data = editor.getData();
                        setEditorContent(data)
                        const plainText = data.replace(/<\/?p>/g, '');
                        setFieldValue('contenido',plainText)
                        console.log( event , plainText);
                    } }
                   
                />
                <div className='flex justify-center'>

            <button
              type="submit"
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mt-4 "
            >
              Crear Blog
            </button>
                </div>
          </Form>
        )}
      </Formik>
        </div>
    </div>
  );
};

export default AgregarBlog;
