import MovieList from "./MovieList";
import MovieNav from "./MovieNav";

function MovieSection({ showButton, nav=false, type, title }) {
  return (
    <section className="md:container md:mx-auto py-8">
      <div className="sectionHead flex justify-between mb-8">
        <h3 className="text-2xl font-bold text-white relative after:content-[''] after:absolute after:top-8 after:left-0 after:w-16 after:h-1 after:bg-white">
          {title}
        </h3>
        {
            nav && (
                <MovieNav />
            )
        }
      </div>

      <MovieList showButton={showButton} type={type} />
    </section>
  );
}

export default MovieSection;
