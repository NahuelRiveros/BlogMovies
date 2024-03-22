import React, { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { Editor } from "@tinymce/tinymce-react";

const AgregarBlog = ({ onSubmit }) => {
  const editorRef = useRef(null); // Referencia al editor
  const [cargando, setCargando] = useState(false);
  const [contenidoEditor, setContenidoEditor] = useState(""); // Estado para almacenar el contenido del editor

  const handleSubmit = (values, { resetForm }) => {
    setTimeout(() => {
    //captura del text area
    const contenidoEditor = editorRef.current
      .getContent()
      .replace(/<\/?p>/g, "");

    // Combina los valores del formulario con el contenido del editor
    const nuevosValores = { ...values, contenido: contenidoEditor };
    
    
    // Aqui se encuentran los valores que van a la base de datos del nuevo Blog creado;
    console.log("los valores  son ", nuevosValores);

    // Limpiar el formulario después de enviar
    resetForm();
    if (editorRef.current) {
      editorRef.current.setContent("");
    }
    // Restablecer el contenido del CKEditor a un valor predeterminado (por ejemplo, un texto vacío)
    setCargando(false);
  }, 2000);
  };

  //codigo text area

  return (
    <div className="flex justify-center items-center h-screen shadow-lg">
      <div className="max-w-2xl w-full p-6 bg-white rounded-lg shadow-2xl">
        <h2 className="text-ext-2xl mb-6 text-center font-mono font-bold">
          Crear Nuevo Blog
        </h2>
        <Formik
          initialValues={{ tema: "", contenido: "" }}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit, setFieldValue }) => (
            <Form onSubmit={handleSubmit} className={"flex flex-col gap-2"}>
              <div className="flex gap-4 justify-start items-center">
                <label className="font-mono">Titulo</label>
                <Field
                  type="text"
                  name="tema"
                  placeholder="Tema del blog"
                  className="p-2 border rounded text-center w-[30rem]"
                />
              </div>
              {/* <ErrorMessage name="tema" component="div" className="text-red-500" /> */}
              <div className="h-full">
                <Editor
                  apiKey="qmn10ooizrrpp3b4a0ncwcew2alrucgbgiclkb8qjt5x6vm8"
                  init={{
                    selector: "textarea", // change this value according to your HTML
                    skin: window.matchMedia("(prefers-color-scheme: dark)")
                      .matches
                      ? "oxide-dark"
                      : "oxide",
                    content_css: window.matchMedia(
                      "(prefers-color-scheme: dark)"
                    ).matches
                      ? "dark"
                      : "default",
                    max_height: 300,
                    max_width: 500,
                    min_height: 100,
                    min_width: 400,
                    statusbar: false,
                    plugins:
                      " anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown",
                    toolbar:
                      "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
                    tinycomments_mode: "embedded",
                    tinycomments_author: "Author name",
                    mergetags_list: [
                      { value: "First.Name", title: "First Name" },
                      { value: "Email", title: "Email" },
                    ],
                    ai_request: (request, respondWith) =>
                      respondWith.string(() =>
                        Promise.reject("See docs to implement AI Assistant")
                      ),
                  }}
                  initialValue="Escriba su Comentario...!"
                  ref={editorRef}
                  onInit={(evt, editor) => (editorRef.current = editor)}
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={cargando}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mt-4 "
                >
                  {cargando ? 'Cargando...' : 'Crear Blog'}
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
