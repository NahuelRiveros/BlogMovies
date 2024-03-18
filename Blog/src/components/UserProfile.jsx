import React from "react";

import { user } from "../assets/img";
const UserProfile = ({ toggle }) => {

  // USER INFO carta de presentacion
  return (
    <div>
       {/* toggle 1 */}
      <div className={`flex gap-4 items-center ${toggle ? " bg-white rounded-xl p-2" : "bg-none transition-all duration-300 delay-200"}`}>
        <div className={`${toggle?  "min-w-[3.5rem] min-h-[3.5rem]": "w-full h-full"}`}>
          <img src={user} alt="" className="w-full h-full rounded-full object-cover" />
        </div>
        {/* toggle 2  */}
        <div className={`${toggle? "" : "hidden delay-200"}`}>
            <h3 className="text-xl font-haken color ">Soledad López</h3>
            <span className="text-[0.75rem] opacity-60"> Nahuel@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
