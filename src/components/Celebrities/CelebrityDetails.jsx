import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";

function CelebrityDetails() {
    const {id} = useParams()
    const details= (fetchedData)=>{
       return fetchedData?.results?.find(person => person.id == id)
    }
    const { data:celebrity } = useFetchData(
        `https://api.themoviedb.org/3/person/popular?api_key=${import.meta.env.VITE_API_KEY}`, details
      );
      const image = `https://image.tmdb.org/t/p/original/${celebrity?.profile_path}` ;
  
console.log();
    return ( 
        <section className="flex justify-around flex-wrap py-5">
        <div className="max-w-sm">
          <img className="rounded" src={image} alt={celebrity?.name} />
        </div>
        <div className="max-w-2xl text-white text-lg dark:text-white">
          <h3 className="text-4xl font-bold my-3 text-center lg:text-left">{celebrity?.name}</h3>
          <p className="my-4">
            <span className="mr-2 font-bold">Gender:</span>
            <span>{celebrity?.gender ==1 ? 'Female': 'Male' }</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">Department:</span>
            <span>{celebrity?.known_for_department}</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">Popularity:</span>
            <span>{celebrity?.popularity}</span>
          </p>

          { celebrity?.known_for ? (
              <p className="my-7 flex flex-wrap gap-2">
              { celebrity?.known_for.map((item) => (
                <span className="mr-2 border border-gray-200 rounded dark:border-gray-600 p-2" key={item.id}>{item.title}</span>
              )) }
            </p>
            ) : "" }

        </div>
      </section>
     );
}

export default CelebrityDetails;