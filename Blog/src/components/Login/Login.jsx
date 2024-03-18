import React, { useState } from "react";
import { FaLowVision } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { RiLockPasswordFill } from "react-icons/ri";
import { PiPasswordBold } from "react-icons/pi";
function Login() {
  const [showPass, setShowPass] = useState(false);
  console.log(showPass)
  return (
    <section
      className="font-haken font-bold text-center mx-auto bg-gradient-to-b from-orangey-yellow
    w-1/2 min-h-72"
    >
      <div className=" items-center  text-center  h-100 w-100">
        <p>Username</p>
        <input
          type="text"
          className="border rounded-md text-center"
          placeholder="ASDASD"
        />
        <p>Password</p>

        <div className=" pl-4 items-center flex justify-center">
        
          <input
            type={!showPass ? "password": "text"}
            className="border rounded-md text-center"
            placeholder="ASDASD"
          />
          <button onClick={()=>{setShowPass(!showPass)}} className="  text-red-700 ">
            { showPass?
            <RiLockPasswordFill /> : <PiPasswordBold className="" />
            }
                
          </button>
        </div>

        <div className="mx-auto flex gap-10 justify-center">
          <button className="border-b-4 border-green-teal/60 hover:bg-white delay-100 transition-all">
            Login
          </button>
          <button>regist</button>
        </div>
      </div>
    </section>
  );
}

export default Login;
