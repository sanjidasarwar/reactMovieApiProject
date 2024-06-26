import useFetchData from "../../hooks/useFetchData";
import { Link } from "react-router-dom";
import SingleItem from "./SingleItem";
import Pagination from "../Pagination";
import usePagination from "../../hooks/usePagination";
import { useSearchParams } from "react-router-dom";

function ItemList({ type, api }) {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const apiEndpoint = queryTerm ? `${api}&query=${queryTerm}` : api;

  const { data: items } = useFetchData(apiEndpoint);

  const {
    currentPage,
    itemPerPage,
    currentData,
    totalPages,
    goToPage,
    handlePre,
    handleNext,
  } = usePagination(items?.results ? items.results : [], 8);

  console.log(items?.results?.length, itemPerPage);
  return (
    <div className="space-y-12">
      {queryTerm && (
        <p className="text-2xl text-white dark:text-white">
          {items?.results?.length === 0
            ? `No result found for '${queryTerm}'`
            : `Result for '${queryTerm}'`}
        </p>
      )}
      <div className="grid grid-cols-4 gap-4">
        {currentData.map((item) => (
          <Link to={`/${type}/${item.id}`} key={item.id}>
            <SingleItem item={item} key={item.id} />
          </Link>
        ))}
      </div>
      {
        items?.results?.length> itemPerPage &&(
          <Pagination
          currentPage={currentPage}
          itemPerPage={itemPerPage}
          totalPages={totalPages}
          goToPage={goToPage}
          handlePre={handlePre}
          handleNext={handleNext}
        />
        )
      }
    </div>
  );
}

export default ItemList;
