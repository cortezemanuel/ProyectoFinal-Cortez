import React from 'react'
import './NavBar.css'
import CartWidget from '../CarWidget/CartWidget'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <h1>Christmas Cottage</h1>
      <nav>
        <ul>
          <li><Link to="/categoria/1">Arboles</Link></li>
          <li><Link to="/categoria/2">Luces</Link></li>
          <li><Link to="/categoria/3">Adornos</Link></li>
          <li><Link to="/categoria/4">Botas de Navidad</Link></li>  
        </ul>
      </nav>    

      <CartWidget />
    </header>
  );
}

export default NavBar;