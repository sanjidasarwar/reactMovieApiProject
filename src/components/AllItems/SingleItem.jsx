import { IoMdStarOutline  } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import Backup from "../../assets/backup.jpg"

function SingleItem({item}) {
    
    const {id, original_title, poster_path, vote_count, vote_average} = item
    const imgSrc = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : Backup ;

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

export default SingleItem;