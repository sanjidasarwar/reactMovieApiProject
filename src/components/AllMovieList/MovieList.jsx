import { useEffect, useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import Movie from "./Movie";

function MovieList() {
  const { data } = useFetchData(
    "https://api.themoviedb.org/3/discover/movie?api_key=38c57f89d17a1b837156825f22ed589a"
  );

  console.log(data);

const loadMoreData = ()=>{
  setMovieToShow(data?.results)
}

const [movieToShow, setMovieToShow] = useState([])

useEffect(()=>{
  setMovieToShow(data?.results?.slice(0, 8))
}, [data])




  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {movieToShow?.map((movie) => (
          <Movie movie={movie} key={movie.id} />
        ))}
      </div>
      <div className="flex justify-center mt-5">
      <button className="inline-flex p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800" onClick={loadMoreData}>
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-transparent dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          View All
        </span>
      </button>
      </div>
    </div>
  );
}

export default MovieList;
