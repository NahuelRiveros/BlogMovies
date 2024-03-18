import React from "react";
import { datas } from "./data";

const SidebarData = ({ toggle }) => {
 
  return (
    <div className="">
      {datas.map((data)=>(
        // toggle 1
        <div  key={data.id} className={`${toggle ? "p-4":"p-2 mt-9 delay-400"} 
        flex items-center mt-2  delay-400 rounded-lg cursor-pointer hover:bg-white 
        transition-all duration-300 `}>
          {/* toggle 2 */}
           <div className={`${toggle ? "":""} text-ligh text-[1.5rem] text-center items-center`}>{data.icon}</div>
           {/* toggle 3 */}
           <div className={`${toggle ? "":"hidden delay-200"} font-haken font-bold mx-5 text-[1rem] text-2xl whitespace-pre`} >{data.Text}</div>
        </div>
      ))}
    </div>
  );
};

export default SidebarData;
