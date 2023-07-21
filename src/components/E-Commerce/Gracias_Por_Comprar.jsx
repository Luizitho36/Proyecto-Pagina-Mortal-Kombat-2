import "./GraciasPorSuCompra.css";
import { NavLink } from "react-router-dom";

function Gracias_Por_Comprar() {
  return (
    <div className="divGraciasPorSuCompra">
      <p>
      ¡Gracias Por Su Compra!
      </p>
      <br></br>
      <NavLink to="/store" className="volverStore">
        Volver a Comprar
      </NavLink>
    </div>
  );
}

export default Gracias_Por_Comprar;
