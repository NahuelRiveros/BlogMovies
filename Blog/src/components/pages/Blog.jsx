import React, { useEffect, useState } from "react";
import axios from "axios";
const Blog = () => {
  const [responseDataList, setResponseDataList] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWY0NTBjZjljNjE0Zjc3Yzc2M2U2NGYxZmE5NTNlZSIsInN1YiI6IjY1Zjg2M2Y0NTk0Yzk0MDE3YzNhNjQ0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QTwpGhgZMKVQ_ZRgFlpIJ9qqAT-StQ-KmCWQt3KQmb4",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.results);
        setResponseDataList(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 px-10 md:px-15 lg:px-32 gap-2">
      {responseDataList.map((items, index) => (
        <div key={index} className="cursor-pointer">
            
            <h1 className="font-haken font-bold text-[22px]">{items.title}</h1>
            <img
              src={`https://image.tmdb.org/t/p/original${items.backdrop_path}`}
              alt="" className="rounded-3xl "
            />
            <h3 className="line-clamp-6 p-2">{items.overview}</h3>
            <h4 className="text-gray-500 font-haken">{items.release_date}</h4>

            
          
        </div>
      ))}
    </div>
  );
};

export default Blog;
