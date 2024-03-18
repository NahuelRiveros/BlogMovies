import React from "react";
import { MdMemory } from "react-icons/md";
import { MdAddReaction } from "react-icons/md";
import { BsIncognito } from "react-icons/bs";
import { FaLowVision } from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <section className="w-[90%] max-w-md font-haken bg-white shadow-2xl md:flex md:max-w-4xl md:rounded-2xl ">
      <article className="md:rounded-2xl md:w1/2 md:grid md:content-center rounded-b-2xl p-10 text-center text-white bg-gradient-to-b from-light-slate-blue to-light-royal-blue">
        <p className="text-xl font-bold text-light-lavender">Your Result</p>
        <div
          className="w-36 aspect-square bg-gradient-to-b from-violet-blue to-persian-blue
        rounded-full mx-auto my-8 grid content-center md:w-56"
        >
          <p className="text-5xl md:text-7xl font-bold mb-2">76</p>
          <p className="font-bold text-light-lavender">100%</p>
        </div>
        <h3 className="text-3xl mg-4 font-bold">Solead Lopéz</h3>
        <p className="text-light-lavender">
          You scored higher than 65% of the people wo have taken these tests.
        </p>
      </article>
      <article className="p-10 grid gap-6 md:w-1/2">
        <h3 className="text-xl font-bold"> Summary </h3>
        <div className="bg-light-red/5 rounded-xl text-center flex py-4 px-6 items-center">
          <MdAddReaction className="text-xl" />
          <p className="ml-3 text-light-red text-lg">Reaction</p>
          <p className="ml-auto font-bold text-dark-gray-blue">
            <span>80</span>
            <span className="text-dark-gray-blue/70">/ 100</span>
          </p>
        </div>
        <div className="bg-orangey-yellow/5 rounded-xl text-center flex py-4 px-6 items-center">
          <MdMemory className="text-xl" />
          <p className="ml-3 text-orangey-yellow text-lg">Memory</p>
          <p className="ml-auto font-bold text-dark-gray-blue">
            <span>92</span>
            <span className="text-dark-gray-blue/70">/ 100</span>
          </p>
        </div>
        <div className="bg-violet-blue/5 flex rounded-xl text-center py-4 px-6 items-center">
          <BsIncognito className="text-xl" />
          <p className="ml-3 text-violet-blue text-lg">Verbal</p>
          <p className="ml-auto text-dark-gray-blue font-bold">
            <span>79</span>
            <span className="text-dark-gray-blue/70">/ 100</span>
          </p>
        </div>
        <div className="bg-green-teal/10 flex rounded-xl py-4 px-6 items-center text-center">
          <FaLowVision />
          <p className="text-lg text-green-teal ml-3">Vision</p>
          <p className="ml-auto font-bold ">
            <span>68</span>
            <span className="text-dark-gray-blue/70">/ 100</span>
          </p>
        </div>

        <Link
          to={"#"}
          className=" text-xl text-center bg-slate-600 rounded-lg hover:bg-gradient-to-b   from-violet-blue to-cobalt-blue text-white font-bold"
        >
          Continue
        </Link>
      </article>
    </section>
  );
}

export default Footer;
