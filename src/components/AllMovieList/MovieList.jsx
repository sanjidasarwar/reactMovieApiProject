import useFetchData from '../../hooks/useFetchData';
import Movie from './Movie';

function MovieList() {
    const {data} = useFetchData('https://api.themoviedb.org/3/discover/movie?api_key=38c57f89d17a1b837156825f22ed589a')

    // console.log(data);
    if (!data) return null;
    return ( 
        <div className="grid grid-cols-4 gap-4">
            {
                data.results.map(movie=>(
                    <Movie movie={movie} key={movie.id} />
                ))
            }
          

        </div>
     );
}

export default MovieList;