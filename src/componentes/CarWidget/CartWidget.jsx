import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
  const imgCarrito = 'https://images.vexels.com/media/users/3/136017/isolated/preview/8f91e1f3e014e1d4388e951c907f8597-regalo-en-icono-de-trineo.png '

  return (

    <div>
      <img className='imgCarrito' src={imgCarrito} alt='imagen del carrito'/>   
      <strong>7</strong>
    </div>
  )
}

export default CartWidget