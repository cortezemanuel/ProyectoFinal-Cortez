import React from 'react'
import "./ItemDetail.css"

const ItemDetail = ({id, nombre, precio, img}) => {
 

  return (
    <div className='contenedorItem'>
          <h2>Nombre: {nombre}</h2>
          <h3>Precio: {precio}</h3>
          <h3>ID: {id}</h3>
          <img src={img} alt={nombre} />
          <p>I don't want a lot for Christmas, There is just one thing I need (and I), Don't care about the presents underneath the Christmas tree, I don't need to hang my stocking there upon the fireplace, Santa Claus won't make me happy with a toy on Christmas Day.</p>
    </div>
  )
}

export default ItemDetail