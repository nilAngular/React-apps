import React, { useState,useEffect } from "react";
import MovieCard from "./Moviecard";
import { useContext } from "react";
import { MovieContext } from "./Moviecontext";

function Movies() {
  // setup basic pagination
  const [pageNo, setPageNo] = useState(1);
  const { watchlist, addToWatchList, removeFromWatchList } = useContext(MovieContext);
  // go next handler
  const handleNext = () => {
    setPageNo(pageNo + 1)
  };
  // go back handler
  const handlePrevious = () => {
    if(pageNo!=1)
    setPageNo(pageNo - 1)
  };

  const [movies, setMovies] = useState([]);

  useEffect(()=>{
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDE3ODc3ZTJkY2MyMDdjZDc1MTdjNzQxYzNhNzY5NCIsIm5iZiI6MTczNjM1MjU3OS43Nywic3ViIjoiNjc3ZWEzNDM3NzMyMjA5ZTE3YmIxNGNiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.ibfohC_PV0KqUGjFk6FVyIasAN1E9UPqJ-aqW65s4e0'
      }
    };
    
    fetch(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=${pageNo}`, options)
      .then(res => res.json())
      .then(res =>{
        setMovies(res.results)
        console.log(res)
      })
      .catch(err => console.error(err));
  },[pageNo])

  return (
    <div>
      <div className="text-2xl font-bold text-center m-5">
        <h1>Trending Movies</h1>
      </div>

        {/* Show movies here */}
        <div className="flex justify-evenly flex-wrap gap-8">
        {movies.map((movieObj, idx) => {
          return (
            <MovieCard key={idx} movieObject={movieObj} addToWatchList={addToWatchList} removeFromWatchList={removeFromWatchList} watchList={watchlist}></MovieCard>
          );
        })}
      </div>

      {/* Pagination */}
      <div className="bg-gray-400 p-4 h-[50px] w-full mt-8 flex justify-center gap-2">
        <div className="px-8" onClick={handlePrevious}>
          <i className="fa-solid fa-arrow-left cursor-pointer" ></i>
        </div>
        <div>{pageNo}</div>
        <div className="px-8" onClick={handleNext}>
          <i className="fa-solid fa-arrow-right cursor-pointer"></i>
        </div>
      </div>
    </div>
  );
}

export default Movies;