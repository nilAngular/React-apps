import React, { useState,useContext } from "react";
import { MovieContext } from "./Moviecontext";
 
function MovieCard({
  movieObject,
}) {

  const { watchlist, addToWatchList, removeFromWatchList } = useContext(MovieContext);

  function isPresentInWatchlist() {
    for(let movieData of watchlist){
      if(movieData.id == movieObject.id) return true;
    }
    return false;
  }

  return (
    <div
      className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/w500/${movieObject.poster_path})`,
      }}
    >
      <div className="text-white w-full text-center text-xl p-2 bg-gray-900/70 rounded-lg">
        {movieObject.title}
      </div>
      
      {/* if this movie is added to watchlist ? X :  😍 */}
      {isPresentInWatchlist() ? (
        <div
          onClick={() => removeFromWatchList(movieObject.id)}
          className="m-4 pl-1 flex justify-center items-center h-8 w-8 rounded-lg bg-gray-900/60"
        >
          ❌
        </div>
      ) : (
        <div
          onClick={() => addToWatchList(movieObject)}
          className="m-4 pl-1 flex justify-center items-center h-8 w-8 rounded-lg bg-gray-900/60"
        >
          😍
        </div>
      )}
    </div>
  );
}

export default MovieCard;
