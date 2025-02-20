import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import React from 'react';
import CartItem from "../CartItem/CartItem";
import "./Cart.css"; 

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <div className="cart-container">
                <h2 className="cart-empty">🎄 No hay productos en el carrito. ¡Compra algo! 🎁</h2>
                <Link to="/" className="cart-link">🛒 Ver Productos</Link>
            </div>
        );
    }

    return (
        <div className="cart-container">
            {carrito.map((producto) => (
                <CartItem key={producto.item.id} {...producto} />
            ))}
            <h3 className="cart-total">Total: ${total}</h3>
            <h3 className="cart-total">Cantidad total: {cantidadTotal}</h3>
            <button onClick={() => vaciarCarrito()} className="cart-button">🗑️ Vaciar Carrito</button>
            <Link to="/checkout" className="cart-checkout">🎅 Finalizar Compra</Link>
        </div>
    );
};

export default Cart;
