import "swiper/css";
import "swiper/css/navigation";
import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Celebrities from "./pages/Celebrities";
import RootLayout from "./pages/RootLayout.jsx";
import ItemDetails from "./components/AllItems/ItemDetails";
import CelebrityDetails from "./components/Celebrities/CelebrityDetails";
import ItemList from "./components/AllItems/ItemList";
import ItemSection from "./components/AllItems/ItemSection.jsx";
import { PageNotFound } from "./pages/PageNotFound.jsx";
import MovieListError from "./components/MovieListError"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />} errorElement={<MovieListError />}>
        <Route index element={<Home />} />
        <Route path="movie" element={<ItemSection title="All Movies" />}>
          <Route
            index
            element={
              <ItemList
                type="movie"
                api={`https://api.themoviedb.org/3/discover/movie?api_key=${
                  import.meta.env.VITE_API_KEY
                }`}
              />
            }
          />
          <Route
            path="popular"
            element={
              <ItemList
                type="movie"
                api={`https://api.themoviedb.org/3/movie/popular?api_key=${
                  import.meta.env.VITE_API_KEY
                }`}
              />
            }
          />
          <Route
            path="top_rated"
            element={
              <ItemList
                type="movie"
                api={`https://api.themoviedb.org/3/movie/top_rated?api_key=${
                  import.meta.env.VITE_API_KEY
                }`}
              />
            }
          />
          <Route
            path="upcoming"
            element={
              <ItemList
                type="movie"
                api={`https://api.themoviedb.org/3/movie/upcoming?api_key=${
                  import.meta.env.VITE_API_KEY
                }`}
              />
            }
          />
          <Route
            path="search"
            element={
              <ItemList
                type="movie"
                api={`https://api.themoviedb.org/3/search/movie?api_key=${
                  import.meta.env.VITE_API_KEY
                }`}
              />
            }
          />
        </Route>

        <Route path="movie/:id" element={<ItemDetails type="movie" />} />
        <Route path="tv" element={<ItemSection title="All TV Series" />}>
          <Route
            index
            element={
              <ItemList
                type="tv"
                api={`https://api.themoviedb.org/3/discover/tv?api_key=${
                  import.meta.env.VITE_API_KEY
                }`}
              />
            }
          />
          <Route
            path="popular"
            element={
              <ItemList
                type="tv"
                api={`https://api.themoviedb.org/3/tv/popular?api_key=${
                  import.meta.env.VITE_API_KEY
                }`}
              />
            }
          />
          <Route
            path="top_rated"
            element={
              <ItemList
                type="tv"
                api={`https://api.themoviedb.org/3/tv/top_rated?api_key=${
                  import.meta.env.VITE_API_KEY
                }`}
              />
            }
          />
          <Route
            path="upcoming"
            element={
              <ItemList
                type="tv"
                api={`https://api.themoviedb.org/3/tv/on_the_air?api_key=${
                  import.meta.env.VITE_API_KEY
                }`}
              />
            }
          />
        </Route>
        <Route path="tv/:id" element={<ItemDetails type="tv" />} />
        <Route path="celebrities" element={<Celebrities />} />
        <Route path="celebrities/:id" element={<CelebrityDetails />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
