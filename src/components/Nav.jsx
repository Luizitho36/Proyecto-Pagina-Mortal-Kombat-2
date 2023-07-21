import { NavLink } from "react-router-dom";
import logoMK from "../img/MK_Logo.png";
import "./nav.css";
import { useSelector } from "react-redux";

function Nav() {
  const carrito = useSelector((store) => store.carrito);

  return (
    <div className="divPrincipalNav">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
        @import
        url('https://fonts.googleapis.com/css2?family=Coda+Caption:wght@800&display=swap');
        @import
        url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css");
      </style>
      <a href="#" id="menu-icono">
        <i className="bi bi-card-list"></i>
      </a>

      <ul className="ul">
        <NavLink to="/" className="logoMK">
          <a href="/" className="logoMK">
            <img className="logoMK" src={logoMK}></img>
          </a>
        </NavLink>
        <NavLink to="/" className="link" activeClassName="active">
          INICIO
        </NavLink>
        <NavLink to="/videojuegos" className="link" activeClassName="active">
          VIDEOJUEGOS
        </NavLink>
        <NavLink to="/peliculas" className="link" activeClassName="active">
          PELICULAS
        </NavLink>
        {}
        <NavLink to="/store" className="link" activeClassName="active">
          STORE
          {carrito.length > 0 && <span className="espacios">{"  "}</span>}
          {carrito.length > 0 && <span className="contador-carrito">{carrito.length}</span>}
        </NavLink>
        <NavLink
          to="https://discord.com/invite/mortalkombat11"
          className="link"
          activeClassName="active"
          target="_blank"
        >
          FORO
        </NavLink>
      </ul>
    </div>
  );
}

export default Nav;
