import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { FaBackspace } from "react-icons/fa";
import axios from "axios";

const AgregarPelicula = ({ onSubmit }) => {
    const uri="http://localhost:8000/peliculas/";
    const [cargando, setCargando] = useState(false);
    const [previewImage, setPreviewImage] = useState(null);
    const handleSubmit = async (values, { resetForm }) => {
        console.log(JSON.stringify(values,null,2))
        setTimeout(async () => {
            // Simular un proceso de carga
            setCargando(true);
            // Aquí se encuenta los datos del formularios para enviarlos al backend
            console.log(values)
            const response=await axios.post(uri,values);
            // Limpiar el formulario después de enviar
            resetForm();
            setCargando(false);
      }, 2000);
    };
    const handleImageChange = (event) => {
        const file = event.currentTarget.files[0];
        setPreviewImage(URL.createObjectURL(file));
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-2xl w-full p-6 bg-white rounded-lg shadow-2xl">
                <h2 className="text-2xl mb-6 text-center font-bold">Crear Nueva Pelicula</h2>
                    <Formik
                        initialValues={{ tema: "", descripcion: "", image: null }}
                        onSubmit={handleSubmit}
                    >
                        {({ handleSubmit,setFieldValue }) => (
                            <Form onSubmit={handleSubmit} className="flex flex-col gap-2 font-mono">
                                <div className="flex gap-4 justify-start items-center">
                                    <label>Título</label>
                                        <Field
                                            type="text"
                                            name="tema"
                                            placeholder="Titulo de la Pelicula"
                                            className="p-2 border rounded text-center w-[30rem]"
                                        />
                                </div>
                                <div className="flex gap-4 justify-start items-center">
                                    <label>Descripción</label>
                                    <Field
                                        as="textarea"
                                        name="descripcion"
                                        placeholder="Descripción de la Pelicula"
                                        className="p-2 border rounded w-[30rem] h-[150px] resize-none"
                                    />
                                </div>
                                <div className="flex gap-4 justify-start items-center">
                                    <input
                                        id="image"
                                        name="image"
                                        type="file"
                                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mt-4 mx-3"
                                        onChange={(event)=>{setFieldValue("image",event.currentTarget.files[0]);
                                        handleImageChange(event);
                                    }}
                                    />
                                    {previewImage && (
                                        <img src={previewImage} alt="Vista previa de la imagen" style={{ maxWidth: '100px' }} />
                                    )}
                                </div>
                                <div className="flex items-center justify-center gap-5">
                                    {/* Resto del formulario */}
                                    <button
                                        type="submit"
                                        disabled={cargando}
                                        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                                    >
                                        {cargando ? "Cargando..." : "Ingresar Pelicula"}
                                    </button>
                                    <Link
                                        className="flex items-center transition duration-500 h-10 w-10   p-2 hover:scale-110"
                                        to={"/"}
                                    >
                                        <FaBackspace className="text-4xl" />
                                    </Link>
                                </div>
                            </Form>
                        )}
                    </Formik>
            </div>
        </div>
    );
};

export default AgregarPelicula;
