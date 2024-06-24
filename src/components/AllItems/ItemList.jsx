import useFetchData from "../../hooks/useFetchData";
import { Link } from "react-router-dom";
import SingleItem from "./SingleItem"

function ItemList({type}) {
    const { data:items } = useFetchData(
        `https://api.themoviedb.org/3/discover/${type}?api_key=${import.meta.env.VITE_API_KEY}`
      );
      console.log(items);
    return ( 
        <div className="grid grid-cols-4 gap-4">
        {items?.results?.map((item) => (
          <Link to={`/${type}/${item.id}`} key={item.id}>
            <SingleItem item={item} key={item.id} />
          </Link>

        ))}
      </div>
     );
}

export default ItemList;