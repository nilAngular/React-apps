import { createContext,useContext } from "react";
import { useState,useEffect } from "react";
export const Moviecontext = createContext();


export const MovieContextProvider = ({children}) =>{
    const [watchlist, setWatchlist] = useState([]);

    useEffect(() => {
      // Load watchlist from localStorage on initial render
      const storedWatchlist = localStorage.getItem("watchList");
      if (storedWatchlist) {
        setWatchlist(JSON.parse(storedWatchlist));
      }
    }, []);
  
    const addToWatchList = (movie) => {
      const updatedWatchlist = [...watchlist, movie];
      setWatchlist(updatedWatchlist);
      localStorage.setItem("watchList", JSON.stringify(updatedWatchlist));
    };
  
    const removeFromWatchList = (id) => {
      const updatedWatchlist = watchlist.filter((movie) => movie.id !== id);
      setWatchlist(updatedWatchlist);
      localStorage.setItem("watchList", JSON.stringify(updatedWatchlist));
    };
  
    return (
      <Moviecontext.Provider
        value={{
          watchlist,
          setWatchlist,
          addToWatchList,
          removeFromWatchList,
        }}
      >
        {children}
      </Moviecontext.Provider>
    );
}

export const useMovieContext = () =>{
    return useContext(Moviecontext)
}