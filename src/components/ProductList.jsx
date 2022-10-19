import React, { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ProductContext from '../context/ProductContext';

const ProductList = () => {

  // const { products, obtenerProductos, agregarProductoCarrito, product } = useContext(ProductContext);
  const { products, obtenerProductos, agregarProductoCarrito } = useContext(ProductContext);

  const handleAgregarProductoCarrito = (id) => {
    agregarProductoCarrito(id);
  };

  useEffect(() => {
    obtenerProductos();
  }, [obtenerProductos]);


  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {
        products.map((product) => (
          <div className="col" key={product.id}>
            <div className="card h-100">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <br />
                <p className="card-text">{product.description}</p>
                <h5 className="card-title">${product.price}.00 mxn</h5>
                <br />
                <NavLink to={`/producto/${product.id}`} className='btn btn-dark'>Detalles</NavLink>
                <button
                  type="button"
                  className="btn btn-warning ms-1"
                  onClick={() => handleAgregarProductoCarrito(product.id)}
                >
                  Agregar al carrito
                </button>
              </div>
              <div className="card-footer">
                <small className="text-muted"></small>
              </div>

            </div>
          </div>
        ))
      }
    </div>
  )
};

export default ProductList;