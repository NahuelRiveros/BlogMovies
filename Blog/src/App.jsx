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
import BlogMovie from "./components/pages/BlogMovie";
import axios from "axios";
import Comentario from "./components/pages/comments";
import Comentarios from "./components/pages/comment";


// Extraer peliculas
// const [datalistMovies, setDatalistMovies] = useState([]);


    let datalistMovies = []
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWY0NTBjZjljNjE0Zjc3Yzc2M2U2NGYxZmE5NTNlZSIsInN1YiI6IjY1Zjg2M2Y0NTk0Yzk0MDE3YzNhNjQ0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QTwpGhgZMKVQ_ZRgFlpIJ9qqAT-StQ-KmCWQt3KQmb4",
      },
    };

    function consulMovie() {
      return axios
        .request(options)
        .then(function (response) {
          return response.data.results;
        })
        .catch(function (error) {
          return console.error(error);
        });
    };
    
    

  
  
// Extraer peliculas


const Layout = () => {
  return (
    <div>
      <Nav />
      {/* //invetigar bien estas funciones */}
      <ScrollRestoration />
      <Outlet />
      {/* //invetigar bien estas funciones */}
      {/* <Footer /> */}
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Blog />,
        loader: consulMovie,
      },
      {
        path: '/pelicula/:id',
        element: <BlogMovie />
      },
      {path:'/test',
      element:<Comentarios/>}    
        // path:'/card',
        // element: <Pelicula/>
        // path: '/Producto/:id',
        // element: <MachArt />,
        // loader: productBDLoaderFilter,
      
    ]
  }])


function App() {



  return (
    <div >
      <RouterProvider router={router} />
    </div>

  )
}

export default App;
