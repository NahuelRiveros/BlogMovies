import React from "react";
import { CgAdd } from "react-icons/cg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 font-mono">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-y-0">
          {/* Sección 1: Sobre nosotros */}
          <div className="flex items-center flex-col">
            <h4 className="text-lg font-bold mb-4">Sobre nosotros</h4>
            <p className="text-sm leading-relaxed">
            Somos un grupo de estudiantes del último año de la Licenciatura en Sistemas de Información. Apasionados por la tecnología y la innovación, estamos comprometidos con el aprendizaje continuo y la búsqueda de soluciones creativas para los desafíos del mundo digital.
            </p>
          </div>
          {/* Sección 2: Enlaces rápidos */}
          <div className="flex flex-col items-center">
            <h4 className="text-lg font-bold mb-4">Enlaces rápidos</h4>
            <ul className="text-sm text-center flex flex-col gap-1">
              <li>
                <Link href="#" className="hover:text-gray-400 hover:border-b-2">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400 hover:border-b-2">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400 hover:border-b-2">
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/test"
                  className="bg-orange-700 hover:bg-orange-600 text-white font-bold p-0.5  rounded-lg flex items-center gap-2"
                >
                  Nuevo Post 
                </Link>
              </li>
            </ul>
          </div>
          {/* Sección 3: Contacto */}
          <div className="flex items-center flex-col">
            <h4 className="text-lg font-bold mb-4">Autores</h4>
            <p className="text-sm hover:text-gray-400 hover:border-b-2 cursor-pointer">Anahi Rios</p>
            <p className="text-sm hover:text-gray-400 hover:border-b-2 cursor-pointer">Aramis Mencia</p>
            <p className="text-sm hover:text-gray-400 hover:border-b-2 cursor-pointer">Bordon Raul</p>
            <p className="text-sm hover:text-gray-400 hover:border-b-2 cursor-pointer">Riveros Nahuel</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
