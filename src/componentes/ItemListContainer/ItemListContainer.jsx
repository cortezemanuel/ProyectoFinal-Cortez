import React, { useEffect, useState } from 'react';
import { getProductos } from '../../asyncmock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getProductos()
      .then((respuesta) => {
        if (id) {
          const productosFiltrados = respuesta.filter(
            (producto) => producto.categoria === Number(id) // Comparar con id numérico
          );
          setProductos(productosFiltrados);
        } else {
          setProductos(respuesta);
        }
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div>
      <h2>{id ? `Productos de la categoría: ${id}` : 'Todos los productos'}</h2>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer