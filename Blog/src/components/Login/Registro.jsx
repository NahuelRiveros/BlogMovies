import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

function RegisterForm() {
  const handleSubmit = (values, { setSubmitting }) => {
    // Aquí puedes manejar la lógica para registrar al usuario
    console.log("Valores del formulario de registro:", values);
    // Aquí puedes hacer una solicitud al backend para registrar al usuario
    // Por ejemplo, puedes utilizar axios para enviar los datos al servidor
    // axios.post('/api/register', values)
    setSubmitting(false);
  };

  return (
    <div className="flex  justify-center items-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl text-center font-bold mb-4">Registro</h2>
        <Formik
          initialValues={{ nombre: "",apellido: "", email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.nombre) {
              errors.nombre = "Obligatorio";
            }
            if (!values.apellido){
                errors.apellido = "Obligatorio"
            }
            if (!values.email) {
              errors.email = "Obligatorio";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Email invalido no contiene '.'' o '@'";
            }
            if (!values.password) {
              errors.password = "Obligatorio";
            }
            return errors;
          }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="font-mono">
              <div className="mb-4">
                <label htmlFor="nombre" className="block text-sm font-medium mb-1">Nombre</label>
                <Field type="text" name="nombre" className="w-full p-2 border rounded-md" />
                <ErrorMessage name="nombre" component="div" className="text-red-500 text-sm" />
              </div>
              <div className="mb-4">
                <label htmlFor="apellido" className="block text-sm font-medium mb-1">Apellido</label>
                <Field type="text" name="apellido" className="w-full p-2 border rounded-md" />
                <ErrorMessage name="apellido" component="div" className="text-red-500 text-sm" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <Field type="email" name="email" className="w-full p-2 border rounded-md" />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
                <Field type="password" name="password" className="w-full p-2 border rounded-md" />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
              </div>
              <button type="submit" disabled={isSubmitting} className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300">
                Register
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default RegisterForm;
