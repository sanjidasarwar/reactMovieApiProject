import useFetchData from "../../hooks/useFetchData";
import Movie from "./Movie";
import { Link, useNavigate } from "react-router-dom";


function MovieList({showButton=false}) {
  const limitedMovieData =(fetchedData)=>{
    return fetchedData.results.slice(0,8)
  }
  const { data:movieToShow } = useFetchData(
    `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}`, showButton ? limitedMovieData : ''
  );

  const navigate = useNavigate()
  const loadMoreData = ()=>{
    return navigate('movie')
  }
  const movies = showButton ? movieToShow : movieToShow?.results;
  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {movies?.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <Movie movie={movie} key={movie.id} />
          </Link>
        ))}
      </div>
      {showButton && (
      <div className="flex justify-center mt-5">
      <button className="inline-flex p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800" onClick={loadMoreData}>
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-transparent dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          View All
        </span>
      </button>
      </div>
      )}
    </div>
  );
}

export default MovieList;
