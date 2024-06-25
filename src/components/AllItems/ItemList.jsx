import useFetchData from "../../hooks/useFetchData";
import { Link } from "react-router-dom";
import SingleItem from "./SingleItem"

function ItemList({type, api}) {
    const { data:items } = useFetchData(api);

    console.log(items?.results);
    console.log(api);

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