import { NavLink  } from "react-router-dom";

function ItemNav() {
    return ( 
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 nested-nav">
        <li>
          <NavLink 
            to="popular"
            className="block py-2 px-3 text-white"
            aria-current="page"
          >
            Popular
          </NavLink >
        </li>
        <li>
          <NavLink  to="top_rated" className="block py-2 px-3 text-white">
            Top Rated
          </NavLink >
        </li>
        <li>
          <NavLink  to="upcoming" className="block py-2 px-3 text-white">
            Upcoming
          </NavLink >
        </li>
      </ul>
     );
}

export default ItemNav;