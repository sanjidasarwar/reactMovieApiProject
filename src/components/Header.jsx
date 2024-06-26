import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  const navigate=useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault()
    const queryTerm=e.target.search.value
    e.target.reset();
    return navigate(`/search?q=${queryTerm}`)
  }
  return (
    <header className="absolute top-3 left-0 right-0">
      <div className="md:container md:mx-auto">
        <div className="flex justify-between">
          <div>
            <h3 className="text-[#f40b7e] text-2xl font-extrabold">Filmix</h3>
          </div>
          <div className="flex">
            <form onSubmit={handleSubmit}>
              <div className="flex">
                <div className="relative w-full">
                  <input
                    type="search"
                    name="search"
                    id="search-dropdown"
                    className="block px-2.5 py-1.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-dark rounded-e-lg focus:ring-4 focus:outline-none  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    <span className="sr-only">Search</span>
                  </button>
                </div>
              </div>
            </form>
            <button
              data-tooltip-target="navbar-search-example-toggle-dark-mode-tooltip"
              type="button"
              data-toggle-dark="light"
              className="flex items-center p-2 ml-2 text-xs font-medium text-gray-700 bg-white rounded-lg border border-gray-200 toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              <svg
                aria-hidden="true"
                data-toggle-icon="sun"
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                aria-hidden="true"
                data-toggle-icon="moon"
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="text-white flex justify-end pt-5">
          <nav className="bg-gray-50 dark:bg-gray-700 rounded header-nav">
            <div className="max-w-screen-xl px-4 py-3 mx-auto">
              <div className="flex items-center">
                <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                  <li>
                    <NavLink to="/"
                      className="font-bold text-gray-900 dark:text-white hover:underline"
                      aria-current="page"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/movie"
                      className="font-bold text-gray-900 dark:text-white hover:underline"
                    >
                      Movie
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/tv"
                      className="font-bold text-gray-900 dark:text-white hover:underline"
                    >
                      TV
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/celebrities"
                      className="font-bold text-gray-900 dark:text-white hover:underline"
                    >
                      Celebrities
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
