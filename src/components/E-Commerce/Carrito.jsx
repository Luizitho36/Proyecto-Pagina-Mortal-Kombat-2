import './Carrito.css';
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export const Carrito = () => {

  const carrito = useSelector(store=> store.carrito) 
  const precioTotal = carrito.reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);


  return (
    <div className="carrito-container">

      <div>
        <div>Cantidad de Productos: {carrito.length || 0 }</div>
        <div>Total a Pagar: ${precioTotal}</div>
        <a href='/Store/carrito/gracias'><button className='boton-comprar' onClick={() => console.log(carrito)}>¡Comprar!</button></a>

        <br></br>
        <br></br>
        
      <NavLink to="/store" className="seguirComprando">
        Continuar Comprando
      </NavLink>

      </div>
    </div>
  );
};

export default Carrito;