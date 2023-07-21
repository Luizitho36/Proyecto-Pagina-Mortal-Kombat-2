import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Search from './components/Search';
import MKHeader from "./img/Header.jpg";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Peliculas from "./components/Peliculas/Peliculas";
import Videojuegos from "./components/Videojuegos/Videojuegos";
import { E_Commerce } from "./components/E-Commerce/E_Commerce";
import Footer from "./components/Footer";
import NotFound from './components/NotFound';

import MK_1992 from './components/Videojuegos/MK_1992';
import MKII from './components/Videojuegos/MKII';
import MK3 from './components/Videojuegos/MK3';
import MK4 from './components/Videojuegos/MK4';
import MKDA from './components/Videojuegos/MKDA';
import MKD from './components/Videojuegos/MKD';
import MKA from './components/Videojuegos/MKA';
import MKvsDCU from './components/Videojuegos/MKvsDCU';
import MK_2011 from './components/Videojuegos/MK_2011';
import MKX from './components/Videojuegos/MKX';
import MK11 from './components/Videojuegos/MK11';

import MK_1995 from './components/Peliculas/MK_1995';
import MK_1995_Ver from './components/Peliculas/MK_1995_Ver';
import MK_1997 from './components/Peliculas/MK_1997';
import MK_2021 from './components/Peliculas/MK_2021';
import { Carrito } from './components/E-Commerce/Carrito';
import Gracias_Por_Comprar from './components/E-Commerce/Gracias_Por_Comprar';
import Videos from './components/Videos';
import "./App.css";
import { useSelector } from "react-redux";


function App() {

  const store = useSelector(store=> store)
  console.log('Aca esta el store vite',store)

  return (
    
    <Router>
      <div className="App">
        
        <NavLink to="/" className="Header"><a href='/' className="Header"><img className="Header" src={MKHeader}></img></a></NavLink>
        <Nav/>
        <Search />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/peliculas" element={<Peliculas />} />
          <Route path="/videojuegos" element={<Videojuegos />} />
          <Route path="/Store" element={<E_Commerce />} />
          <Route path="*" element={<NotFound/>} />

          <Route path="/peliculas/MK_1995" element={<MK_1995/>} />
          <Route path="/peliculas/MK_1995/MK_1995_Ver" element={<MK_1995_Ver/>} />

          <Route path="/peliculas/MK_1997" element={<MK_1997/>} />
          <Route path="/peliculas/MK_2021" element={<MK_2021/>} />

          <Route path="/videojuegos/MK_1992" element={<MK_1992/>} />
          <Route path="/videojuegos/MKII" element={<MKII/>} />
          <Route path="/videojuegos/MK3" element={<MK3/>} />
          <Route path="/videojuegos/MK4" element={<MK4/>} />
          <Route path="/videojuegos/MKDA" element={<MKDA/>} />
          <Route path="/videojuegos/MKD" element={<MKD/>} />
          <Route path="/videojuegos/MKA" element={<MKA/>} />
          <Route path="/videojuegos/MKvsDCU" element={<MKvsDCU/>} />
          <Route path="/videojuegos/MK_2011" element={<MK_2011/>} />
          <Route path="/videojuegos/MKX" element={<MKX/>} />
          <Route path="/videojuegos/MK11" element={<MK11/>} />

          <Route path="/Store/carrito" element={<Carrito />} />
          <Route path="/Store/carrito/gracias" element={<Gracias_Por_Comprar />} />

        </Routes>

        <Videos/>
        <Footer/>
        
      </div>
    </Router>
  );
}

export default App;
