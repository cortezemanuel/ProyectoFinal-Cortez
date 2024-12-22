import React from 'react'
import './NavBar.css'
import CartWidget from '../CarWidget/CartWidget'

const NavBar = () => {
  return (
    <header>
      <h1>Christmas Cottage</h1>
      <nav>
        <ul>
        <li>Luces</li>
        <li>Arboles</li>
        <li>Adornos</li>    
        </ul>
      </nav>    

      <CartWidget/>

    </header>
  )
}

export default NavBar