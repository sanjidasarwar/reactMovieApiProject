import useFetchData from "../../hooks/useFetchData";
import { Link } from "react-router-dom";
import SingleItem from "./SingleItem"
import Pagination from "../Pagination";
import usePagination from "../../hooks/usePagination";

function ItemList({type, api}) {
    const { data:items } = useFetchData(api);

    const { currentPage, itemPerPage, currentData, totalPages, goToPage, handlePre, handleNext } = usePagination(
      items?.results ? items.results : [], 8
    )

    return ( 
      <div className="space-y-12">
        <div className="grid grid-cols-4 gap-4">
        {currentData.map((item) => (
          <Link to={`/${type}/${item.id}`} key={item.id}>
            <SingleItem item={item} key={item.id} />
          </Link>

        ))}
      </div>
      <Pagination currentPage={currentPage} itemPerPage={itemPerPage} totalPages={totalPages} goToPage={goToPage} handlePre={handlePre} handleNext={handleNext} />
      </div>
     );
}

export default ItemList;