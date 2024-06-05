import AllMovies from "../components/AllMovieList/AllMovies";
import Hero from "../components/Hero";

function Home() {
    return (  
       <>
            <Hero />
            <main className='bg-[#13161F]'>
                <AllMovies />
            </main>
       </>
    );
}

export default Home;