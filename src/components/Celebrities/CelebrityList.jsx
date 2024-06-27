import useFetchData from "../../hooks/useFetchData";
import Celebrity from "./Celebrity";
import { Link } from "react-router-dom";


function CelebrityList() {
    const { data:celebrities } = useFetchData(
        `https://api.themoviedb.org/3/person/popular?api_key=${import.meta.env.VITE_API_KEY}`
      );
    return ( 
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
        {celebrities?.results?.map((person) => (
          <Link to={`/celebrities/${person.id}`} key={person.id} className="sm:mx-auto">
            <Celebrity key={person.id} person={person} />
          </Link>
        ))}
      </div>
     );
}

export default CelebrityList;