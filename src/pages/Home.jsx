import TrendingItemSection from "../components/Home/TrendingItemSection";
import VideoSection from "../components/Home/VideoSection";

function Home() {
    return (  
       <>
           <TrendingItemSection title="Trending Movies" type="movie" />
           <TrendingItemSection title="Trending TV Series" type="tv" />
           <VideoSection />
       </>
    );
}

export default Home;