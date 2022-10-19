import React from 'react';
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import CartPage from '../pages/CartPage';
import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
import ProductPage from '../pages/ProductPage';
import ProfilePage from '../pages/ProfilePage';
import NavbarPrivado from '../components/NavbarPrivado';

const RutasPrivadas = () => {
  return (
    <>
      <NavbarPrivado />
      <div className='container mt-5 p-5'>
        <Routes>
          {/* Rutas privadas */}
          <Route path="/productos" element={<ProductsPage />} />
          <Route path="/producto/:id" element={<ProductPage />} />
          <Route path="/carrito" element={<CartPage />} />
          <Route path="/perfil" element={<ProfilePage />} />

          {/* Rutas publicas */}
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
};

export default RutasPrivadas;