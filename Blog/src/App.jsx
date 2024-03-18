import { useState } from "react";
import Nav from "./components/navbar/Nav";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import {
  Link,
  Outlet,
  ScrollRestoration,
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
import Login from "./components/Login/Login";
import Blog from "./components/pages/Blog";
import Search from "./components/navbar/Search";
function App() {
  return (
    <>
      <div className="bg-slate-900 relative z-10">
        <Nav />
      </div>
        
        {/* <div className="w-full  h-screen object-cover flex items-center"> */}
          {/* <SideBar /> */}
      <Routes>
        {/* <Route  path="/" element={<Footer />}></Route> */}
        <Route  path="/home" element={<Search />}></Route>
        {/* <Route path="/Login" element={<Login />}></Route> */}
      </Routes>
      <Blog/>
        {/* </div> */}
    </>
  );
}

export default App;
