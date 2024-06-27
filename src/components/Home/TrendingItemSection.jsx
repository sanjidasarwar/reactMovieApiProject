import { Link } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import SingleItem from "../AllItems/SingleItem";
import { useEffect, useState } from "react";

function TrendingItemSection({ type, title }) {
  const [itemToShow, setItemToShow] = useState([])
  const [moreToShow, setMoreToShow] = useState(false)

  const { data: items } = useFetchData(
    `https://api.themoviedb.org/3/trending/${type}/day?api_key=${
      import.meta.env.VITE_API_KEY
    }`
  );
  const loadMoreData = ()=>{
    if(moreToShow){
      setItemToShow(items?.results?.slice(0, 8))
      setMoreToShow(false)
    }else{
      setItemToShow(items?.results)
      setMoreToShow(true)
    }
  }

  useEffect(()=>{
    setItemToShow(items?.results?.slice(0, 8))
  }, [items])

  return (
    <section className="mx-10 md:container mx-auto py-8">
      <div className="sectionHead flex justify-between mb-8">
        <h3 className="text-2xl font-bold text-white relative after:content-[''] after:absolute after:top-8 after:left-0 after:w-16 after:h-1 after:bg-white">
          {title}
        </h3>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 md:gap-4">
        {itemToShow?.map((item) => (
          <Link to={`/${type}/${item.id}`} key={item.id} className="sm:mx-auto">
            <SingleItem item={item} key={item.id} />
          </Link>
        ))}
        
      </div>
      <div className="flex justify-center mt-5">
          <button
            className="inline-flex p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
            onClick={loadMoreData}
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-transparent dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              {moreToShow ? 'View Less' : 'View All'}
            </span>
          </button>
        </div>
    </section>
  );
}

export default TrendingItemSection;
