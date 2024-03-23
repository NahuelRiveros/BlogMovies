import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { CgAdd } from "react-icons/cg";
function Nav() {
  const [click, setClick] = useState(false);
  const handelClick = () => {
    setClick(!click);
  };
  const contentNav = (
    <>
      <div className=" lg:hidden block absolute top-[6rem] w-full left-0 right-0 bg-slate-900 transition">
        <ul className="text-center text-xl p-20 flex flex-col justify-center">
          <Link  to="Home">
            <li className="my-4 py-4 border-b border-slate-800 hover:border-slate-700 hover:rounded">
              Home
            </li>
          </Link>
          <Link  to="Contact">
            <li className="my-4 py-4 border-b border-slate-800 hover:border-slate-700 hover:rounded">
              Contact
            </li>
          </Link>
          <Link  to="Login">
            <li className="my-4 py-4 border-b border-slate-800 hover:border-slate-700 hover:rounded">
              Login
            </li>
          </Link>
          <div className="flex justify-end items-center p-5">
          <Link  to="/test">
            <div className="bg-orange-700 rounded flex h-10 justify-center items-center p-2">
              <div className=" transition cursor-pointer font-mono  hover:border-orange-500 flex justify-center items-end">
                Nuevo Post
                <CgAdd className=" text-2xl" />
              </div>
            </div>
          </Link>
        </div>
        </ul>
        
      </div>
    </>
  );

  return (
    <nav>
      <div className="h-10vh flex justify-between z-50 bg-black text-white lg:py-5 px-20 py-4">
        <div className="flex flex-1 justify-start">
          <img
            src="data:image/png;base64,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"
            alt="Logo"
            className="w-[70px] rounded-full"
          />
        </div>
        <div className="lg:flex md:flex lg:flex-1 items center justify-end font-normal hidden">
          <div className="flex  items-center">
            <ul className="flex gap-8 mr-16 text-[22px]">
              <Link  to="/">
                <li className="hover:text-orange-600 transition cursor-pointer border-b-2 border-slate-300 hover:border-orange-500 ">
                  Home
                </li>
              </Link>
              <Link  to="Contact">
                <li className="hover:text-orange-600 transition cursor-pointer border-b-2 border-slate-300  hover:border-orange-500">
                  Contact
                </li>
              </Link>
              <Link  to="Login">
                <li className="hover:text-orange-600 transition cursor-pointer border-b-2 border-slate-300 hover:border-orange-500 ">
                  Login
                </li>
              </Link>
            </ul>
            <Link  to="/test">
              <div className="bg-orange-700 hover:scale-110 rounded flex h-10 justify-center items-center p-2">
                <div className=" transition cursor-pointer font-mono  hover:border-orange-500 flex justify-center items-end">
                  Nuevo Post
                  <CgAdd className=" text-2xl" />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div>{click && contentNav}</div>
        <button className="block sm:hidden transition" onClick={handelClick}>
          {click ? <FaTimes className="text-2xl"/> : <CiMenuFries className="text-2xl"/>}
        </button>
      </div>
    </nav>
  );
}

export default Nav;
