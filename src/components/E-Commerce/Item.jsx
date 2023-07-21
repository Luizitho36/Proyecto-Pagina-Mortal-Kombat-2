import "./Item.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sumarCarrito } from "../../containers/actions";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
  @import
  url('https://fonts.googleapis.com/css2?family=Coda+Caption:wght@800&display=swap');
</style>;

export default function Item({ name, price, id, imgUrl }) {
  const dispatch = useDispatch();
  const carrito = useSelector((store) => store.carrito);

  const agregarAlCarrito = (id) => {
    dispatch(sumarCarrito({ name, price, id, imgUrl }));
  };

  const idContador = (id) => {
    return carrito.find((item) => item.id === id)?.contador || 0;
  };

  const contadorPorItem = idContador(id);

  return (
    <div className="caja-item">
      <div>{name}</div>
      <img className="imgURL" src={imgUrl} />
      <div className="precio-item">
        ${price}
      </div>

      {
        <button className="boton-agregar" onClick={() => agregarAlCarrito(id)}>
          Agregar Al Carrito
        </button>
      }
    </div>
  );
}
