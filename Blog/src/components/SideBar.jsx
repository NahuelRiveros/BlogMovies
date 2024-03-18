import React from "react";
import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import UserProfile from "./UserProfile";
import SidebarData from "./SidebarData";

function SideBar() {
  // Este toggle se activa con el icon Cheveonleft al acciona el OnClick
  const [toggle, setToggle] = useState(false);
  
  return (
    <div className={`${toggle ? " w-[20rem]" : "w-[5.8rem]"} bg-gradient-to-b from-orangey-yellow to-light-red h-[95%]
    rounded-3xl ml-3 p-6 border transition-all duration-500 border-solid max-[767px]:hidden
    border-orangey-yellow shadow-md shadow-orangey-yellow relative sidebar-container
    `}>
      <UserProfile toggle={toggle}/>
      
      <div
        className={ `${toggle ? "top-[35%]": "top-[40%]"} relative flex justify-center items-center left-[100%]
        w-10 h-10 bg-light-lavender  border-orangey-yellow border rounded-full cursor-pointer`}
        onClick={() => {
          setToggle(!toggle);
        }}
        // botton de despliegue
      >
        <FaChevronLeft
          className={`${
            toggle ? "rotate-180" : ""
          }  text-3xl transition-all duration-300`}
        />
      </div>
      <SidebarData toggle={toggle}/>
    </div>
  );
}

export default SideBar;
