function ItemNav() {
    return ( 
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
        <li>
          <a
            href="#"
            className="block py-2 px-3 text-white"
            aria-current="page"
          >
            Popular
          </a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-white">
            Top Rated
          </a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-white">
            Upcoming
          </a>
        </li>
      </ul>
     );
}

export default ItemNav;