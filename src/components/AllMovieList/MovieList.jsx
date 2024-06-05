import thumbnailImg from '../../assets/thumbnail.jpg'
import { IoMdStarOutline  } from "react-icons/io";
import { IoMdStar } from "react-icons/io";

function MovieList() {

    return ( 
        <div className="grid grid-cols-4 gap-4">
            <div>
                <img className='rounded-lg' src={thumbnailImg} alt="" srcSet="" />
                <h3 className='text-lg font-bold text-white'>Header 1</h3>
                <div>
                    <div className='flex'>
                        <IoMdStar className='text-yellow-500' />
                        <IoMdStar className='text-yellow-500' />
                        <IoMdStar className='text-yellow-500' />
                        <IoMdStar className='text-yellow-500' />
                        <IoMdStarOutline  className='text-white' />
                    </div>
                    <span className='text-xs font-bold text-white'>14K Voters</span>
                </div>
            </div>

        </div>
     );
}

export default MovieList;