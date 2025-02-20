import React from 'react'
import './NavBar.css'
import CartWidget from '../CarWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img className='logoxmas' src={"../img/logo.png"} alt="Logo Xmas-Cottage" />
      </Link>
      <nav>
        <ul>
          <li><NavLink to="/categoria/Arboles">Arboles</NavLink></li>
          <li><NavLink to="/categoria/Luces">Luces</NavLink></li>
          <li><NavLink to="/categoria/Adornos">Adornos</NavLink></li>
          <li><NavLink to="/categoria/Botas">Botas de Navidad</NavLink></li>  
        </ul>
      </nav>    

      <CartWidget />
    </header>
  );
}

export default NavBar;