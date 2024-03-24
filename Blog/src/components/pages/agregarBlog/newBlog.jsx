import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import { FaBackspace } from "react-icons/fa";
import axios from "axios";

// Función para convertir la imagen a base64
const convertImageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        if (!file) {
            reject("No se ha seleccionado ningún archivo.");
        }

        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
            resolve(reader.result);
        };

        reader.onerror = (error) => {
            reject("Error al convertir la imagen a base64: " + error);
        };
    });
};

const AgregarPelicula = () => {
    const [cargando, setCargando] = useState(false);

    // Manejar la subida de la imagen
    const handleImageChange = async (event, setFieldValue) => {
        const file = event.currentTarget.files[0];
        try {
            const base64 = await convertImageToBase64(file);
            setFieldValue("image", base64); // Establecer el valor del campo "image" en base64
        } catch (error) {
            console.error(error);
        }
    };

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    };
    const handleSubmit = async (values, { resetForm }) => {
        // Aquí puedes enviar los datos del formulario al servidor, incluida la imagen en base64
        console.log("Valores del formulario:", values);
        http://localhost:8000/peliculas/
        // Simulación de carga
        setCargando(true);
        const urlInsertarPelicula = "http://localhost:8000/peliculas/"
        await axios.post(urlInsertarPelicula,values,config).then((res)=> {
            if (!res.data.error) {
                console.log(res.data)
            } else {
                console.log(res.data.error)
                // navigate('/')
            }
        })

        setTimeout(() => {
            setCargando(false);
            resetForm();
        }, 2000);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-2xl w-full p-6 bg-white rounded-lg shadow-2xl">
                <h2 className="text-2xl mb-6 text-center font-bold">
                    Crear Nueva Película
                </h2>
                <Formik
                    initialValues={{ tema: "", descripcion: "", image: "" }}
                    onSubmit={handleSubmit}
                >
                    {({ handleSubmit, setFieldValue }) => (
                        <Form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-2 font-mono"
                        >
                            <div className="flex gap-4 justify-start items-center">
                                <label>Título</label>
                                <Field
                                    type="text"
                                    name="tema"
                                    placeholder="Título de la Película"
                                    className="p-2 border rounded text-center w-[30rem]"
                                />
                            </div>
                            <div className="flex gap-4 justify-start items-center">
                                <label>Descripción</label>
                                <Field
                                    as="textarea"
                                    name="descripcion"
                                    placeholder="Descripción de la Película"
                                    className="p-2 border rounded w-[30rem] h-[150px] resize-none"
                                />
                            </div>
                            <div className="flex gap-4 justify-start items-center">
                                <input
                                    type="file"
                                    id="image"
                                    name="image"
                                    accept="image/*"
                                    onChange={(event) =>
                                        handleImageChange(event, setFieldValue)
                                    }
                                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mt-4 mx-3"
                                />
                            </div>
                            <div className="flex items-center justify-center gap-5">
                                <button
                                    type="submit"
                                    disabled={cargando}
                                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                                >
                                    {cargando ? "Cargando..." : "Ingresar Película"}
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
