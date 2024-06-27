import { Link, NavLink, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const queryTerm = e.target.search.value;
    e.target.reset();
    return navigate(`movie/search?q=${queryTerm}`);
  };
  return (
    <header className="absolute top-3 left-10 right-10 md:left-0 md:right-0">
      <div className="md:container md:mx-auto">
        <div className="flex justify-between">
          <div>
            <h3 className="text-logoColor text-3xl md:text-4xl font-extrabold">
              <Link to="/">Filmix</Link>
            </h3>
          </div>
          <div className="flex">
            <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only"
              >
                Search
              </label>
              <div className="relative">
                <input
                  type="search"
                  id="default-search"
                  name="search"
                  className="w-200 md:w-300 block p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search Movies..."
                  required
                />
                <div className="absolute inset-y-0 end-0 flex items-center px-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500  bg-white"
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
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="text-white flex justify-end pt-5">
          <nav className="bg-gray-50 dark:bg-gray-700 rounded header-nav">
            <div className="max-w-screen-xl px-4 py-3 mx-auto">
              <div className="flex items-center">
                <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                  <li>
                    <NavLink
                      to="/"
                      className="font-bold text-gray-900 dark:text-white hover:underline"
                      aria-current="page"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/movie"
                      className="font-bold text-gray-900 dark:text-white hover:underline"
                    >
                      Movie
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/tv"
                      className="font-bold text-gray-900 dark:text-white hover:underline"
                    >
                      TV
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/celebrities"
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
