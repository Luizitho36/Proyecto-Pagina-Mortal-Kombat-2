import { NavLink } from "react-router-dom";
import "./peliculas.css";
import MK_1995 from "../../img/Movies/MK_(1995).jpg";
import MK_1997 from '../../img/Movies/MK_(1997).jpg';
import MK_2021 from '../../img/Movies/MK_(2021).jpg';

function Peliculas() {
  return (
    <div className="divPrincipalPeliculas">
      
      <NavLink to="/peliculas/MK_1995" className="Movies"><a href='' className="Movies"><img className="Movies" src={MK_1995}></img></a></NavLink>

      <NavLink to="/peliculas/MK_1997" className="Movies"><a href='' className="Movies"><img className="Movies" src={MK_1997}></img></a></NavLink>

      <NavLink to="/peliculas/MK_2021" className="Movies"><a href='' className="Movies"><img className="Movies" src={MK_2021}></img></a></NavLink>
      <br></br>
      <br></br>
    </div>
  )
}

export default Peliculas