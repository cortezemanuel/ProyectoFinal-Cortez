import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';  
import { getUnProducto } from '../../asyncmock';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();  

  useEffect(() => {
    getUnProducto(id)
      .then(respuesta => setProducto(respuesta))
      .catch(error => console.log(error));  
  }, [id]);  

  return (
    <div>
      {producto ? (
        <ItemDetail {...producto} />
      ) : (
        <p></p>  
      )}
    </div>
  );
};


export default ItemDetailContainer;