import { NavLink } from "react-router-dom";
import "./videojuegos.css";
import MK_1992 from "../../img/Games/MK_(1992).jpg";
import MKII from "../../img/Games/MKII.jpg";
import MK3 from '../../img/Games/MK3.jpg';
import MK4 from '../../img/Games/MK4.jpg';
import MKDA from '../../img/Games/MKDA.jpg';
import MKD from '../../img/Games/MKD.jpg';
import MKA from '../../img/Games/MKA.png';
import MKvsDCU from '../../img/Games/MKvsDCU.png';
import MK_2011 from '../../img/Games/MK_(2011).png';
import MKX from '../../img/Games/MKX.png';
import MK11 from '../../img/Games/MK11.png';


function Videojuegos() {
  return (
    <div className="divPrincipalVideojuegos">
      
      <NavLink to="/videojuegos/MK_1992" className="Games"><a href='' className="Games"><img className="Games" src={MK_1992}></img></a></NavLink>

      <NavLink to="/videojuegos/MKII" className="Games"><a href='' className="Games"><img className="Games" src={MKII}></img></a></NavLink>

      <NavLink to="/videojuegos/MK3" className="Games"><a href='' className="Games"><img className="Games" src={MK3}></img></a></NavLink>

      <NavLink to="/videojuegos/MK4" className="Games"><a href='' className="Games"><img className="Games" src={MK4}></img></a></NavLink>
      <br></br>
      <br></br>

      <NavLink to="/videojuegos/MKDA" className="Games"><a href='' className="MKDA"><img className="Games2" src={MKDA}></img></a></NavLink>

      <NavLink to="/videojuegos/MKD" className="Games2"><a href='' className="Games2"><img className="Games2" src={MKD}></img></a></NavLink>

      <NavLink to="/videojuegos/MKA" className="Games2"><a href='' className="Games2"><img className="Games2" src={MKA}></img></a></NavLink>

      <NavLink to="/videojuegos/MKvsDCU" className="Games2"><a href='' className="Games2"><img className="Games2" src={MKvsDCU}></img></a></NavLink>
      <br></br>
      <br></br>

      <NavLink to="/videojuegos/MK_2011" className="Games"><a href='' className="Games2"><img className="Games2" src={MK_2011}></img></a></NavLink>

      <NavLink to="/videojuegos/MKX" className="Games2"><a href='' className="Games2"><img className="Games2" src={MKX}></img></a></NavLink>

      <NavLink to="/videojuegos/MK11" className="Games2"><a href='' className="Games2"><img className="Games2" src={MK11}></img></a></NavLink>
    </div>
  )
}

export default Videojuegos;