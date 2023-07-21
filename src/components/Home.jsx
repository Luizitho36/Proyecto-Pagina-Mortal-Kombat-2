import { NavLink } from "react-router-dom";
import Aside from "./Aside";
import "./home.css";
import Peliculas from "../img/Home/Peliculas.jpg";
import Videojuegos from "../img/Home/Videojuegos.jpg";

function Home() {
  return (
    <div className="divContenedor">
      
      <NavLink to="/videojuegos" className="home_imagen"><a href='/' className="home_imagen"><img className="home_imagen" src={Videojuegos}></img></a></NavLink>

      <NavLink to="/peliculas" className="home_imagen"><a href='/' className="home_imagen"><img className="home_imagen" src={Peliculas}></img></a></NavLink>

      <Aside/>
      
    </div>
  );
}

export default Home;
