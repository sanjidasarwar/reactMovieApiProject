import { IoMdStarOutline  } from "react-icons/io";
import { IoMdStar } from "react-icons/io";

function Movie({movie}) {
    const {id, original_title, poster_path, vote_count, vote_average} = movie
    const imgSrc = `https://image.tmdb.org/t/p/original/${poster_path}`
    return ( 
        <div key={id}>
                    <img className='rounded-lg' src={imgSrc} alt="" srcSet="" />
                    <h3 className='text-lg font-bold text-white title' title={original_title}>{original_title}</h3>
                    <div>
                        <div className='flex'>
                           {([...Array(Math.floor(vote_average/2))]).map((_, i)=>(
                                <IoMdStar className='text-yellow-500' key={i} />
                           ))} 
                           {([...Array(5-Math.floor(vote_average/2))]).map((_, i)=>(
                                <IoMdStarOutline  className='text-white' key={i} />
                           ))} 
                        </div>
                        <span className='text-xs font-bold text-white'>{vote_count} Votes</span>
                    </div>
        </div>
     );
}

export default Movie;