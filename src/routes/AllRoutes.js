import {Route, Routes } from "react-router-dom";
// import {Home, Movie, TV, Celebrities} from '../pages'
import Home from '../pages/Home'
import Movie from '../pages/Home'
import TV from '../pages/Home'
import Celebrities from '../pages/Home'


export const AllRoutes = () => {
  return (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie" element={<Movie />} />
            <Route path="/tv" element={<TV />} />
            <Route path="/celebrities" element={<Celebrities />} />
          </Routes>
  )
}