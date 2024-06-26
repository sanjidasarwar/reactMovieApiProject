import { Outlet, useLocation } from "react-router-dom";
import ItemList from "./ItemList";
import ItemNav from "./ItemNav";

function ItemSection({title}) {
  const location= useLocation()
  const isSearchRoute = location.pathname.includes('search');
  
    return ( 
        <section className="md:container md:mx-auto py-8">
          {
            !isSearchRoute && (
              <div className="sectionHead flex justify-between mb-8">
              <h3 className="text-2xl font-bold text-white relative after:content-[''] after:absolute after:top-8 after:left-0 after:w-16 after:h-1 after:bg-white">
                {title}
              </h3>
                <ItemNav />
            </div>
            )
          }
      
        <Outlet />
      </section>
     );
}

export default ItemSection;