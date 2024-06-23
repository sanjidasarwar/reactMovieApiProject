import MovieSection from "../components/AllMovieList/MovieSection";
import VideoSection from "../components/AllVideo/VideoSection";

function Home() {
    return (  
       <>
           <MovieSection showButton={true} />
           <VideoSection />
       </>
    );
}

export default Home;