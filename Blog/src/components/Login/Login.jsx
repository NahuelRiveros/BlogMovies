import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { PiEyeSlashFill } from "react-icons/pi";
import { IoEyeSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";


function Login() {
  const [showPass, setShowPass] = useState(false);

  const navigate = useNavigate()
   const backToMovie = () => {
        navigate("/");
    }; 

  function generateRandomId() {
    // Generar un número aleatorio entre 1000 y 9999
    return Math.floor(Math.random() * 9000) + 1000;
  }

  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-mono font-bold text-center mb-6">Login</h2>
        <Formik
          initialValues={{ username: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.username) {
              errors.username = "Required";
            }
            if (!values.password) {
              errors.password = "Required";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              // alert(JSON.stringify(values, null, 2));
              // console.log("Valores del formulario:", values);
              console.log(values)
              localStorage.setItem("usuario", values.username )
              localStorage.setItem("ID",generateRandomId())
              setSubmitting(false);
              resetForm()
              backToMovie()
              
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="username" className="text-sm">
                  Username
                </label>
                <Field
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="border rounded-md p-2"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <div className="flex items-center relative">
                  <Field
                    type={showPass ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="border rounded-md p-2 flex-grow"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="outline-none absolute text-xl right-2 top-3 focus:outline-none"
                  >
                    {showPass ? <PiEyeSlashFill /> : <IoEyeSharp />}
                  </button>
                </div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                >
                  Login
                </button>
              </div>
            </Form>
          )}
        </Formik>

        <div className="mt-4 flex justify-center">
          <Link to={"/registro"} className="text-blue-500 hover:text-blue-700 text-sm transition-all duration-100 hover:scale-110">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
