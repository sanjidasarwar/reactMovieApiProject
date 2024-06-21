import AllMovies from "../components/AllMovieList/MovieSection";
import VideoSection from "../components/AllVideo/VideoSection";
import Hero from "../components/Hero";

function Home() {
    return (  
       <>
            <Hero />
            <main className='bg-[#13161F]'>
                <AllMovies />
                <VideoSection />
            </main>
       </>
    );
}

export default Home;