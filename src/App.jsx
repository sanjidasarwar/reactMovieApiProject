import 'swiper/css';
import 'swiper/css/navigation';
import './App.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Home from './pages/Home'
import Movie from './pages/Movie'
import TV from './pages/TV'
import Celebrities from './pages/Celebrities'
import RootLayout from './pages/RootLayout.jsx';
import MovieDetails from './components/AllMovieList/MovieDetails.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="movie" element={<Movie />} />
      <Route 
              path="movie/:movieId" 
              element={<MovieDetails />}
          />
      <Route path="tv" element={<TV />} />
      <Route path="celebrities" element={<Celebrities />} />
    </Route>
  )
);


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
