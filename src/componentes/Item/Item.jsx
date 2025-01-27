import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, nombre, precio, img }) => {
  return (
    <div className='cardProducto'>
      <img src={img} alt={nombre} />
      <h3>Nombre: {nombre}</h3>
      <p>Precio: ${precio}</p>
      <p>ID: {id}</p>
      <Link to={`/producto/${id}`} className="detalleLink">
        <button>Ver Detalles</button>
      </Link>
    </div>
  );
};

export default Item;