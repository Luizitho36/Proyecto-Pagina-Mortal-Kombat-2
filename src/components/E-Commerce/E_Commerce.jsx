import "./e-Commerce.css";
import { Link } from "react-router-dom";
import productosMK from "../../data/products.json";
import { useSelector } from "react-redux";
import Item from './Item';

export const E_Commerce = () => {

  const carrito = useSelector(store=> store.carrito);

  return (
    <div className="e-Commerce-principal">
      
      <h2 className="lista-carrito">
        <Link to={"/Store/carrito"}>
          Carrito: <span className="contador-carrito">{carrito.length || 0}</span>
        </Link>
      </h2>

      <br></br>
      <br></br>

      <div className="lista-e-Commerce">
        {productosMK.map((producto) => {
          return <Item key={producto.id} {...producto} />;
        })}
      </div>

      <br></br>

      <h2 className="lista-carrito">
        <Link to={"/Store/carrito"}>
          Carrito: <span className="contador-carrito">{carrito.length || 0}</span>
        </Link>
      </h2>
    </div>
  );
};