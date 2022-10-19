import React from 'react';
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';
import ProductPage from '../pages/ProductPage';
import RegisterPage from '../pages/RegisterPage';
import NavbarPublico from '../components/NavbarPublico';

const RutasPublicas = () => {
  return (
    <>
      <NavbarPublico />
      <div className='container mt-5 p-5'>
        <Routes>
          
          <Route path="/login" element={<LoginPage />} />
          <Route path="/productos" element={<ProductsPage />} />
          <Route path="/producto/:id" element={<ProductPage />} />
          <Route path="/registro" element={<RegisterPage />} />

          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
};

export default RutasPublicas;