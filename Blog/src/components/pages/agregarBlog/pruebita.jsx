import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function App() {
  const [MiText, setMiText] = useState("")
  const handleEditorChange = (content,editor) =>{
    setMiText(content)
    console.log('conteniudo',content)}
    const handleSubmit = () => {
      // Manejador de envío del formulario
      console.log("Contenido enviado:", MiText); // Muestra el contenido del editor en la consola
      setMiText(""); // Limpia el contenido del editor
    };
  return (
    <Editor
      apiKey="qmn10ooizrrpp3b4a0ncwcew2alrucgbgiclkb8qjt5x6vm8"
      init={{
        selector: "textarea", // change this value according to your HTML
        skin: window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "oxide-dark"
          : "oxide",
        content_css: window.matchMedia("(prefers-color-scheme: dark)").matches
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
      onEditorChange={handleEditorChange}
    />
  );
}
