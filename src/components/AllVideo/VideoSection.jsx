import { useEffect, useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

function VideoSection() {
        const getMovieId = (movies)=>{
          const id =movies.results.map(movie=>{
             return movie.id
          })
          return id
        }
        const { data:fetchedMovieId } = useFetchData(
          "https://api.themoviedb.org/3/discover/movie?api_key=38c57f89d17a1b837156825f22ed589a", getMovieId
        );

        const [moviesId, setMoviesId] = useState([])
        const [videosToShow, setVideosToShow] = useState([])
        console.log(videosToShow);

    useEffect(() => {
        if (moviesId?.length > 0) {
          const fetchVideos = async () => {
            const videoPromises = moviesId.map(id =>
              fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=38c57f89d17a1b837156825f22ed589a`)
                .then(response => response.json())
            );
      
            const videoResults = await Promise.all(videoPromises);
            setVideosToShow(videoResults.map(result => result.results));
          };
      
          fetchVideos();
        }

      }, [moviesId]);

    useEffect(()=>{
      setMoviesId(fetchedMovieId)
    }, [fetchedMovieId])

    return ( 
        <section className="md:container md:mx-auto py-8">
            <h3 className="text-2xl font-bold text-white relative after:content-[''] after:absolute after:top-8 after:left-0 after:w-16 after:h-1 after:bg-white mb-8">Trailers and Videos</h3>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
              
                {videosToShow.map((videoArray, index) => (
                    <SwiperSlide key={videoArray[0].id}>
                      {videoArray.length > 0 ? (
                          
                      <iframe height="415" className="w-full"
                      src={`https://www.youtube.com/embed/${videoArray[0].key}`}>
                      </iframe>
                          ) : (
                          <p>No video available for {videoArray[index].name}</p>
                          )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
       
     );
}

export default VideoSection;