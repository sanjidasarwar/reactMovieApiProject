import MovieList from "./MovieList";

function MovieSection() {
    return ( 
        <section className="md:container md:mx-auto py-8">
            <h3>All Movies</h3>
            <MovieList />
        </section>
    );
}

export default MovieSection;