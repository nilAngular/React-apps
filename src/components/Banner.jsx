import React from "react";
import { useState,useEffect } from "react";
function Banner() {
  const [bannerImage, setBannerImage] = useState(null);
  const [title, setTitle] = useState("")

  useEffect(()=>{
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDE3ODc3ZTJkY2MyMDdjZDc1MTdjNzQxYzNhNzY5NCIsIm5iZiI6MTczNjM1MjU3OS43Nywic3ViIjoiNjc3ZWEzNDM3NzMyMjA5ZTE3YmIxNGNiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.ibfohC_PV0KqUGjFk6FVyIasAN1E9UPqJ-aqW65s4e0'
        }
      };
      
      fetch(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=1`, options)
        .then(res => res.json())
        .then(res =>{
          setBannerImage(res.results[0].backdrop_path);
          setTitle(res.results[0].title)
          console.log(res)
        })
        .catch(err => console.error(err));
    },[])
  

  return (
    <div
      className="h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${bannerImage})`,
      }}
    >
      <div className="text-white w-full text-center text-2xl">
        {title}
      </div>
    </div>
  );
}

export default Banner;