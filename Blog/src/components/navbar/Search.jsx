import React, { useState } from "react";
import banner from "../../assets/banner-peli.jpg";
import { BsSearch } from "react-icons/bs";


const Search = () => {
    const tags =[
        {id:1,name:"Terror"},
        {id:2,name:"Accion"},
        {id:3,name:"Comedia"},
        {id:4,name:"Fantasia"},
       
    ]
    const [activeIndex , setActiveIndex]=useState(0)
  return (
    
      <div className="flex justify-center  mt-8 flex-col  px-[100px] md:px-[150px]">
        <img src={banner} alt="" className="rounded-2xl h-[250px]" />
        <div className=" bg-white shadow-lg p-4 rounded-lg mt-[-20px] mx-[25%] flex items-center">
          <BsSearch className="text-[20px] text-gray-400" />
          <input
            type="text"
            placeholder="Buscar Pelicula"
            className="outline-none ml-1 w-full font-haken font-bold text-center"
          />
        </div>
        <div className="flex gap-5 justify-center md:mt-10">
            {tags.map((peli,index)=>(
             <ul onClick={()=>setActiveIndex(index)} className={`${index== activeIndex ? 
             'bg-green-teal rounded-2xl text-white':null} p-1 pb-1 cursor-pointer
             hover:scale-110 hover:border-[1px] border-green-teal transition-all
             duration-100 rounded-2xl ease-in-out`}>
                <li key={index} className=" ">{peli.name}</li>
                
             </ul>    
            ))}
        </div>
      </div>
    
  );
};

export default Search;
