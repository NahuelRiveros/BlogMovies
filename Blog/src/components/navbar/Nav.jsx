import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { CgAdd } from "react-icons/cg";

function Nav() {
  const [click, setClick] = useState(false);

  const handleToggleClick = () => {
    setClick(!click);
  };

  const closeMenu = () => {
    setClick(false);
  };

  const contentNav = (
    <div className="lg:hidden left-0 right-0  absolute top-[3.8rem] w-full bg-gray-900 text-white transition">
      <ul className="text-center text-xl">
        <li className="my-4 py-4 border-b border-gray-700">
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li className="my-4 py-4 border-b border-gray-700">
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>
        <li className="my-4 py-4 border-b border-gray-700">
          <Link to="/login" onClick={closeMenu}>
            Login
          </Link>
        </li>
        <li className="my-4 py-4">
          <Link to="/NuevoBlog" onClick={closeMenu}>
            Nuevo Post
          </Link>
        </li>
      </ul>
    </div>
  );

  return (
    <nav className="bg-gray-900 text-white px-5">
      <div className="mx-auto flex justify-between items-center py-4 px-8 lg:px-0">
        <div>
          <img src="" alt="Logo" className="w-16 rounded-full" />
        </div>
        <div className="lg:flex items-center space-x-8">
          <ul className="hidden lg:flex gap-8 text-xl">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
          <div className="hidden lg:block">
            <Link
              to="/NuevoBlog"
              className="bg-orange-700 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2"
            >
              Nuevo Post <CgAdd className="text-xl" />
            </Link>
          </div>
        </div>
        <div className="block lg:hidden">
          <button onClick={handleToggleClick}>
            {click ? (
              <FaTimes className="text-2xl" />
            ) : (
              <CiMenuFries className="text-2xl" />
            )}
          </button>
        </div>
        {click && contentNav}
      </div>
    </nav>
  );
}

export default Nav;
