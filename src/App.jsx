import 'swiper/css';
import 'swiper/css/navigation';
import './App.css'
import {Route, Routes } from "react-router-dom";
import Header from './components/Header.jsx'
import Home from './pages/Home'
import Movie from './pages/Home'
import TV from './pages/Home'
import Celebrities from './pages/Home'
// import AllRoutes from './routes/AllRoutes.js'

function App() {

  return (
    <>
      <Header />
       
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie" element={<Movie />} />
            <Route path="/tv" element={<TV />} />
            <Route path="/celebrities" element={<Celebrities />} />
          </Routes>
    </>
  )
}

export default App
